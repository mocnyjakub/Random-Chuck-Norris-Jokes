import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../../styles/theme";
export const useStyles = makeStyles({
  formWrapper: {
    width: "100%",
  },
  select: {
    marginBottom: 32,
    border: `solid 1px ${theme.colors.lightGrey}`,
    background: `${theme.colors.white}`,
    color: `${theme.colors.dark}`,
    fontSize: `${theme.fontSizes.s}`,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 6,
    backgroundColor: `${theme.colors.dark}`,
    color: `${theme.colors.white}`,
    fontSize: `${theme.fontSizes.s}`,
    letterSpacing: -0.52,
    textTransform: "none",
    fontWeight: theme.fontWeights.bold,
    "&:hover": {
      color: `${theme.colors.black}`,
    },
  },
  icon: {
    cursor: "pointer",
  },
  textField: {
    width: "20%",
    textAlign: "center",
    border: 0,
    backgroundColor: "transparent",
    fontFamily: "Inter",
    "&:focus": {
      border: 0,
      outline: 0,
    },
  },
  label: {
    fontSize: `${theme.fontSizes.s}`,
  },
});
