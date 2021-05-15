import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/organisms/card/Card";
import MainTemplate from "../components/templates/MainTemplate";
import RootContext from "../context";

const Root = () => {
  const [joke, setJoke] = useState("");
  const [nextJokeRender, setNextJokeRender] = useState(false);
  const [newPerson, setNewPerson] = useState("Chuck Norris");
  const [jokesCounter, setJokesCounter] = useState(0);
  const [apiUrl, setApiUrl] = useState("http://api.icndb.com/jokes/random");

  const drawAnotherJoke = (e) => {
    // http://api.icndb.com/jokes/random?firstName=Kuba&lastName=Mocny&limitTo=[nerdy]
    e.preventDefault();
    const category = e.target.categoryName.value;
    const arrayDividedBySpacing = newPerson.split(/\b/);
    console.log(arrayDividedBySpacing);
    if (
      category === "random" &&
      arrayDividedBySpacing[0] === "Chuck" &&
      arrayDividedBySpacing[2] === "Norris"
    ) {
      setApiUrl(`http://api.icndb.com/jokes/random`);
    } else if (
      category !== "random" &&
      arrayDividedBySpacing[0] === "Chuck" &&
      arrayDividedBySpacing[2] === "Norris"
    ) {
      setApiUrl(`http://api.icndb.com/jokes/random?limitTo=[${category}]`);
    } else {
      setApiUrl(
        `http://api.icndb.com/jokes/random?firstName=${
          arrayDividedBySpacing[0]
        }&lastName=${
          arrayDividedBySpacing.length > 2 ? arrayDividedBySpacing[2] : "Norris"
        }&limitTo=[${category}]`
      );
    }

    setNextJokeRender((prevState) => !prevState);
    // const category = e.target.categoryName.value;
    // if (category === "random") {
    //   setApiUrl(`http://api.icndb.com/jokes/random`);
    // } else {
    //   setApiUrl(`http://api.icndb.com/jokes/random?limitTo=[${category}]`);
    // }
    // setNextJokeRender((prevState) => !prevState);
  };
  const handleNewPerson = (e) => {
    e.target.value
      ? setNewPerson(e.target.value)
      : setNewPerson("Chuck Norris");
  };
  const increaseJokesCounter = () => {
    jokesCounter < 100 && setJokesCounter((prevState) => prevState + 1);
  };
  const decreaseJokesCounter = () => {
    jokesCounter > 0 && setJokesCounter((prevState) => prevState - 1);
  };
  const changeJokesCounter = (e) => {
    setJokesCounter(+e.target.value);
  };

  useEffect(() => {
    const fetchJoke = async () => {
      await axios
        .get(apiUrl)
        .then((res) => setJoke(res.data.value.joke))
        .catch((error) => console.log(error));
    };
    fetchJoke();
  }, [nextJokeRender, apiUrl]);
  return (
    <RootContext.Provider
      value={{
        joke,
        nextJokeRender,
        newPerson,
        apiUrl,
        drawAnotherJoke,
        handleNewPerson,
        jokesCounter,
        increaseJokesCounter,
        decreaseJokesCounter,
        changeJokesCounter,
      }}
    >
      <MainTemplate>
        <Card />
      </MainTemplate>
    </RootContext.Provider>
  );
};

export default Root;
