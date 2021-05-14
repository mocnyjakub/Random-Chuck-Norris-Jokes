import { useState, useEffect } from "react";
import Card from "../components/organisms/card/Card";
import MainTemplate from "../components/templates/MainTemplate";
import axios from "axios";

const Root = () => {
  const [joke, setJoke] = useState([]);
  const [clickedBtn, setClickedBtn] = useState(false);
  const drawAnotherJoke = () => {
    setClickedBtn((prevState) => !prevState);
  };
  useEffect(() => {
    const fetchJoke = async () => {
      await axios
        .get(`http://api.icndb.com/jokes/random`)
        .then((res) => setJoke(res.data.value.joke))
        .catch((error) => console.log(error));
    };
    fetchJoke();
  }, [clickedBtn]);
  return (
    <MainTemplate>
      <Card joke={joke} drawAnotherJoke={drawAnotherJoke} />
    </MainTemplate>
  );
};

export default Root;
