import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { tokens } from "@/common/theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxHeight: "95px",
      padding: "32px 24px",
      borderBottom: `1px solid ${colors.borderColor}`,
      backgroundColor: colors.primary.DEFAULT,
    },

    iconBlock: {
      paddingTop: "10px",
      paddingRight: "37px",
      borderRight: `1px solid ${colors.borderColor}`,
    },

    themeIcon: {
      marginRight: "45px",
    },

    searchBlock: {
      display: "flex",
      marginLeft: "28px",
      borderRadius: "8px",
      backgroundColor: `${colors.primary[600]}`,
    },

    searchIcon: {
      "&:hover": {
        backgroundColor: "transparent !important",
      },
    },

    searchInput: {
      padding: "5px",
    },
  };
});
