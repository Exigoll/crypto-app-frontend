import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { tokens } from "@/common/theme";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);

  return {
    root: {
      position: "static",
      borderBottom: `1px solid ${colors.borderColor}`,
      background: `${colors.primary.DEFAULT} !important`,
      boxShadow: "none !important",
    },

    toolbar: {
      justifyContent: "space-between",
      padding: "25px 50px",
    },

    menuIcon: {
      marginRight: "10px",
      cursor: "pointer",
    },
  };
});
