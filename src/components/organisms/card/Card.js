import React, { useContext } from "react";
import cardImage from "../../../assets/images/Chuck Norris photo.png";
import InputLabel from "@material-ui/core/InputLabel";
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
import RootContext from "../../../context";
import { useStyles } from "./MaterialUIStyles";

const Card = () => {
  const classes = useStyles();
  const _renderJokesCounter = () => (
    <Container
      errorStyles={
        context.jokesCounter > 100 || context.jokesCounter < 0 ? true : false
      }
      className={classes.icon}
    >
      <IconWrapper onClickFn={context.decreaseJokesCounter}>
        <RemoveCircleOutlineIcon />
      </IconWrapper>
      <input
        onChange={context.changeJokesCounter}
        className={classes.textField}
        id="standard-basic"
        value={context.jokesCounter}
      />
      <IconWrapper onClickFn={context.increaseJokesCounter}>
        <AddCircleOutlineIcon />
      </IconWrapper>
    </Container>
  );

  const context = useContext(RootContext);
  return (
    <CardWrapper>
      <img src={cardImage} alt="Chuck-Norris" />
      <CardText />
      <form onSubmit={context.drawAnotherJoke}>
        <FormControl variant="filled" className={classes.formWrapper}>
          <InputLabel className={classes.label}>Categories</InputLabel>
          <Select
            name="categoryName"
            id="categoryName"
            className={classes.select}
            native
          >
            <option value="random">Random</option>
            <option value="explicit">Explicit</option>
            <option value="nerdy">Nerdy</option>
          </Select>

          <TextField
            onChange={context.handleNewPerson}
            placeholder="Impersonate Chuck Norris"
            className={classes.select}
            variant="outlined"
          />
          <Button type="submit" variant="contained" className={classes.button}>
            Draw a random {context.newPerson} Joke
          </Button>
        </FormControl>
      </form>
      <SaveJokesWrapper>
        <>{_renderJokesCounter()}</>
        <Container saveBtn focusStyle={context.jokesCounter > 0 ? true : false}>
          Save Jokes
        </Container>
      </SaveJokesWrapper>
    </CardWrapper>
  );
};

export default Card;
