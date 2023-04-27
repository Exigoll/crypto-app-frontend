import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { tokens } from "@/common/theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      flexGrow: 1,
      padding: 32,
    },
    areaChart: {
      marginBottom: "32px",
    },
    topCardItem: {
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      minHeight: 185,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    assetWrapper: {
      display: "flex",
      flexDirection: "column!important" as any,
      justifyContent: "space-between",
    },
    assetName: {
      fontSize: 25,
      fontWeight: 600,
      lineHeight: "30px",
      textTransform: "capitalize",
    },
    itemDetails: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    cardPrice: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "48px",
    },
    priceTrend: {
      width: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "5px",
      padding: "2px 4px",
      borderRadius: 4,
    },
    trendUp: {
      background: "#A9FFA7",
      color: "#037400",
    },
    trendDown: {
      backgroundColor: "#FFA7A7",
      color: "#740000",
    },
    lineChartBlock: {
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      marginBottom: 32,
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
    },
    topPriceRoot: {
      backgroundColor: `${
        theme.palette.mode === "light"
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: "20px 16px",
      marginBottom: 32,
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
      "& .MuiPaper-root": {
        backgroundColor: "transparent !important",
        boxShadow: "none !important",
        backgroundImage: "none !important",
      },
    },
  };
});
