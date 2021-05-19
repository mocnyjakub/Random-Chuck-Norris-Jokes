import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/organisms/card/Card";
import MainTemplate from "../components/templates/MainTemplate";
import RootContext from "../context";
import cardImage from "../assets/images/Chuck Norris photo.png";
import impersonateImage from "../assets/images/Random photo.png";

const Root = () => {
  const [joke, setJoke] = useState("");
  const [nextJokeRender, setNextJokeRender] = useState(false);
  const [newPerson, setNewPerson] = useState("Chuck Norris");
  const [submittedPerson, setSubmittedPerson] = useState("Chuck Norris");
  const [jokesCounter, setJokesCounter] = useState(0);
  const [fetchRandomJokesArray, setFetchRandomJokesArray] = useState([]);
  const [apiUrl, setApiUrl] = useState(
    "https://api.icndb.com/jokes/random?escape=javascript"
  );
  const [category, setCategory] = useState("random");

  const saveJoke = () => {
    axios
      .get(apiUrl)
      .then((res) => setJoke(res.data.value.joke))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    saveJoke();
  }, [nextJokeRender, apiUrl]);

  const fetchRandomJokes = () => {
    const arrayDivided = newPerson.split(/\b/);
    let baseURL;
    if (category === "random") {
      baseURL = `https://api.icndb.com/jokes/random/${jokesCounter}?firstName=${
        arrayDivided[0]
      }&lastName=${
        arrayDivided.length > 2 ? arrayDivided[2] : ""
      }&escape=javascript`;
    } else {
      baseURL = `https://api.icndb.com/jokes/random/${jokesCounter}?firstName=${
        arrayDivided[0]
      }&lastName=${
        arrayDivided.length > 2 ? arrayDivided[2] : ""
      }&limitTo=[${category}]&escape=javascript`;
    }
    axios
      .get(baseURL)
      .then((res) => setFetchRandomJokesArray(res.data.value))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchRandomJokes();
  }, [jokesCounter, category, newPerson]);

  const drawAnotherJoke = (e) => {
    e.preventDefault();
    const category = e.target.categoryName.value;
    setCategory(category);
    const arrayDividedBySpacing = newPerson.split(/\b/);
    if (
      category === "random" &&
      arrayDividedBySpacing[0] === "Chuck" &&
      arrayDividedBySpacing[2] === "Norris"
    ) {
      setApiUrl(`https://api.icndb.com/jokes/random&escape=javascript`);
    } else if (
      category !== "random" &&
      arrayDividedBySpacing[0] === "Chuck" &&
      arrayDividedBySpacing[2] === "Norris"
    ) {
      setApiUrl(
        `https://api.icndb.com/jokes/random?limitTo=[${category}]&escape=javascript`
      );
    } else if (category === "random" && arrayDividedBySpacing[0] !== "Chuck") {
      setApiUrl(
        `https://api.icndb.com/jokes/random?firstName=${
          arrayDividedBySpacing[0]
        }&lastName=${
          arrayDividedBySpacing.length > 2 ? arrayDividedBySpacing[2] : ""
        }&escape=javascript`
      );
    } else {
      setApiUrl(
        `https://api.icndb.com/jokes/random?firstName=${
          arrayDividedBySpacing[0]
        }&lastName=${
          arrayDividedBySpacing.length > 2 ? arrayDividedBySpacing[2] : ""
        }&limitTo=[${category}]&escape=javascript`
      );
    }

    setNextJokeRender((prevState) => !prevState);
    setSubmittedPerson(newPerson);
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

  const createJokesFile = () => {
    if (jokesCounter <= 100 && jokesCounter !== 0) {
      const element = document.createElement("a");
      const file = new Blob(
        fetchRandomJokesArray.map((Eachjoke) => Eachjoke.joke + "\n"),
        { type: "text/plain" }
      );
      element.href = URL.createObjectURL(file);
      element.download = "Jokes.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      alert("You can pick a number from 1 to 100");
    }
  };
  const renderCardImg = () => {
    return submittedPerson !== "Chuck Norris" ? impersonateImage : cardImage;
  };

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
        createJokesFile,
        renderCardImg,
      }}
    >
      <MainTemplate>
        <Card />
      </MainTemplate>
    </RootContext.Provider>
  );
};

export default Root;
