import { useState, useEffect } from "react";
import Card from "../components/organisms/card/Card";
import MainTemplate from "../components/templates/MainTemplate";
import axios from "axios";

const Root = () => {
  const [joke, setJoke] = useState([]);
  const [clickedBtn, setClickedBtn] = useState(false);
  const [apiUrl, setApiUrl] = useState("http://api.icndb.com/jokes/random");
  const drawAnotherJoke = (e) => {
    e.preventDefault();
    const category = e.target.categoryName.value;
    console.log(category);
    setClickedBtn((prevState) => !prevState);
    category
      ? setApiUrl(`http://api.icndb.com/jokes/random?limitTo=[${category}]`)
      : setApiUrl(`http://api.icndb.com/jokes/random`);
  };
  useEffect(() => {
    const fetchJoke = async () => {
      await axios
        .get(apiUrl)
        .then((res) => setJoke(res.data.value.joke))
        .catch((error) => console.log(error));
    };
    fetchJoke();
  }, [clickedBtn, apiUrl]);
  return (
    <MainTemplate>
      <Card joke={joke} drawAnotherJoke={drawAnotherJoke} />
    </MainTemplate>
  );
};

export default Root;
