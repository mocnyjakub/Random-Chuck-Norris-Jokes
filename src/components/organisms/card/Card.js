import React from "react";
import cardImage from "../../../assets/images/Chuck Norris photo.png";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { CardWrapper, SaveJokesWrapper } from "./StyledCard";
import Button from "@material-ui/core/Button";
import CardText from "../../atoms/CardText/CardText";
import Container from "../../atoms/container/Container";

const useStyles = makeStyles({
  formWrapper: {
    width: "100%",
  },
  select: {
    marginBottom: 32,
    border: `solid 1px #c4c4c4`,
    background: "#fff",
    // color: "#c4c4c4",
    color: "#34394f",
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 6,
    backgroundColor: "#34394f",
    color: "#fff",
    fontSize: 16,
    letterSpacing: -0.52,
    textTransform: "none",
    fontWeight: 600,
    "&:hover": {
      color: "#000",
    },
  },
});

const Card = ({ joke, drawAnotherJoke }) => {
  const classes = useStyles();
  return (
    <CardWrapper>
      <img src={cardImage} alt="Chuck-Norris" />
      <CardText joke={joke} />

      <FormControl variant="filled" className={classes.formWrapper}>
        <InputLabel>Categories</InputLabel>
        <Select
          className={classes.select}
          native
          inputProps={{
            name: "age",
            id: "filled-age-native-simple",
          }}
        >
          <option></option>
          <option>Explicit</option>
          <option>Nerdy</option>
        </Select>

        <TextField
          placeholder="Impersonate Chuck Norris"
          className={classes.select}
          variant="outlined"
        ></TextField>
        <Button
          type="submit"
          onClick={drawAnotherJoke}
          variant="contained"
          className={classes.button}
        >
          Draw a random Chuck Norris Joke
        </Button>
      </FormControl>
      <SaveJokesWrapper>
        <Container>- 122 +</Container>
        <Container saveBtn>Save Jokes</Container>
      </SaveJokesWrapper>
    </CardWrapper>
  );
};

export default Card;
