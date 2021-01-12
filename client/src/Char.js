import React from "react";

const Char = ({ name, level }) => {
  return (
    <>
      <ul>
        <li>
          nome: {name} lvl: {level}{" "}
        </li>
      </ul>
    </>
  );
};

export default Char;
