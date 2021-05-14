import React, { useState } from "react";
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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import IconWrapper from "../../atoms/IconWrapper/IconWrapper";

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
});

const Card = ({ joke, drawAnotherJoke }) => {
  const [jokesCounter, setJokesCounter] = useState(0);
  const classes = useStyles();
  const increaseJokesCounter = () => {
    jokesCounter < 100 && setJokesCounter((prevState) => prevState + 1);
  };
  const decreaseJokesCounter = () => {
    jokesCounter > 0 && setJokesCounter((prevState) => prevState - 1);
  };
  const changeJokesCounter = (e) => {
    setJokesCounter(+e.target.value);
  };

  return (
    <CardWrapper>
      <img src={cardImage} alt="Chuck-Norris" />
      <CardText joke={joke} />
      <form style={{ width: `100%` }} onSubmit={drawAnotherJoke}>
        <FormControl variant="filled" className={classes.formWrapper}>
          <InputLabel>Categories</InputLabel>
          <Select
            name="categoryName"
            id="categoryName"
            className={classes.select}
            native
          >
            <option value=""></option>
            <option value="explicit">Explicit</option>
            <option value="nerdy">Nerdy</option>
          </Select>

          <TextField
            placeholder="Impersonate Chuck Norris"
            className={classes.select}
            variant="outlined"
          ></TextField>
          <Button type="submit" variant="contained" className={classes.button}>
            Draw a random Chuck Norris Joke
          </Button>
        </FormControl>
      </form>
      <SaveJokesWrapper>
        {jokesCounter > 100 || jokesCounter < 0 ? (
          <Container errorStyles className={classes.icon}>
            <IconWrapper onClickFn={decreaseJokesCounter}>
              <RemoveCircleOutlineIcon />
            </IconWrapper>
            <input
              onChange={changeJokesCounter}
              className={classes.textField}
              id="standard-basic"
              value={jokesCounter}
            />
            <IconWrapper onClickFn={increaseJokesCounter}>
              <AddCircleOutlineIcon />
            </IconWrapper>
          </Container>
        ) : (
          <Container className={classes.icon}>
            <IconWrapper onClickFn={decreaseJokesCounter}>
              <RemoveCircleOutlineIcon />
            </IconWrapper>
            <input
              onChange={changeJokesCounter}
              className={classes.textField}
              id="standard-basic"
              value={jokesCounter}
            />
            <IconWrapper onClickFn={increaseJokesCounter}>
              <AddCircleOutlineIcon />
            </IconWrapper>
          </Container>
        )}

        <Container saveBtn>Save Jokes</Container>
      </SaveJokesWrapper>
    </CardWrapper>
  );
};

export default Card;
