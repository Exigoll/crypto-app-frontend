import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: "20px",
  },

  form: {
    flex: 1,
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "640px",
    margin: "auto",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "-3px -2px 20px 1px #202020",
  },

  incitingText: {
    marginLeft: "10px",
    cursor: "pointer",
    color: "#1900d5",
  },
});
