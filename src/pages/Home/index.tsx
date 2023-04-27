import { Box, Grid } from "@mui/material";
import { FC, useCallback, useEffect, useMemo, useRef } from "react";

import TopPrice from "@/components/TopPrice";
import AreaChart from "@/components/charts/AreaChart";
import LineChart from "@/components/charts/LineChart";

import TrendDown from "@/assets/images/chart/trend-down.svg";
import TrendUp from "@/assets/images/chart/trend-up.svg";

import { IChartData, ISingleAsset } from "@/common/types/assets";

import { getFavoriteAssets, getTopPriceData } from "@/store/thunks/assets";

import { useAppDispatch, useAppSelector } from "@/utils/hooks";

import { useStyles } from "./styles";

const Home: FC = (): JSX.Element => {
  const favoriteAssets: IChartData[] = useAppSelector(
    (state) => state.assets.favoriteAssets
  );
  const assetsArray: ISingleAsset[] = useAppSelector(
    (state) => state.assets.assets
  );

  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const classes = useStyles();

  const favoriteAssetName = useMemo(() => ["bitcoin", "ethereum"], []);

  const filteredArray = useMemo(() => {
    return favoriteAssets.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );
  }, [favoriteAssets]);

  const filteredAssetArray = assetsArray
    .slice()
    .sort((a, b) => b.current_price - a.current_price);

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getFavoriteAssets(element));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetName);
    dispatch(getTopPriceData());
  }, [favoriteAssetName, fetchData, dispatch]);

  const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
    let currentPrice = 0;
    let changePrice = 0;

    element.singleAsset.forEach((element: ISingleAsset) => {
      currentPrice = element.current_price;
      changePrice = element.price_change_percentage_24h;
    });

    return (
      <Grid item xs={12} sm={6} lg={6} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6} className={classes.assetWrapper}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>{`$ ${currentPrice}`}</h3>
              <Box
                className={
                  changePrice > 0
                    ? `${classes.priceTrend} ${classes.trendUp}`
                    : `${classes.priceTrend} ${classes.trendDown}`
                }
              >
                {changePrice > 0 ? (
                  <img src={TrendUp} alt="Icon" />
                ) : (
                  <img src={TrendDown} alt="Icon" />
                )}
                <span>{`${Number(changePrice).toFixed(2)} %`}</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={element.price_chart_data} />
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.areaChart}>
        {renderFavoriteBlock}
      </Grid>
      <Grid container className={classes.lineChartBlock}>
        <Grid item xs={12} sm={12} lg={12}>
          {filteredArray.length && <LineChart data={filteredArray} />}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} className={classes.topPriceRoot}>
          {filteredAssetArray.length && (
            <TopPrice assets={filteredAssetArray.slice(0, 6)} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
