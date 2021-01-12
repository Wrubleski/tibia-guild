import React, { useEffect, useState } from "react";
import axios from "axios";
import Char from "./Char";

const App = () => {
  const [char, setChar] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(
        "https://api.tibiadata.com/v2/guild/grind+valoroso.json"
      );
      setChar(response.data.guild.members);
      // console.log(response.data.guild.members);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(char);
  return (
    <>
      <h1>App page!</h1>
      {char.map((rank) => {
        return (
          <div>
            <h4>{rank.rank_title}</h4>
            {rank.characters.map((character) => {
              return <Char name={character.name} level={character.level} />;
            })}
          </div>
        );
      })}
    </>
  );
};

export default App;
