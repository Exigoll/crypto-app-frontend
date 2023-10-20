import { Grid, Typography } from "@mui/material";
import { FC, useEffect } from "react";

import AssetsTable from "@/components/AssetsTable";

import { getTopPriceData } from "@/store/thunks/assets";
import { getWatchListElements } from "@/store/thunks/watchlist";

import { useAppDispatch, useAppSelector } from "@/utils/hooks";

import { useStyles } from "./styles";

const WatchlistPage: FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.assets);
  const { assets } = useAppSelector((state) => state.assets);

  useEffect(() => {
    dispatch(getTopPriceData());
    dispatch(getWatchListElements());
  }, [dispatch]);

  const filteredArray = assets.filter((element: any) => {
    return watchlist.some((otherElement: any) => {
      return otherElement.assetId === element.id;
    });
  });

  console.log(filteredArray);

  return (
    <Grid className={classes.root}>
      <Grid className={classes.watchlistHeading}>
        <Typography variant="h2" className={classes.heading}>
          Избранное
        </Typography>
      </Grid>
      <Grid className={classes.assetsTableBlock}>
        <AssetsTable assets={filteredArray} />
      </Grid>
    </Grid>
  );
};

export default WatchlistPage;
