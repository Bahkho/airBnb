import React from "react";
import Nav from "./navbar";
import Hero from "./hero";
import Card from "./card";
import data from "./data";
import "./style.css";

const App = () => {
  const cards = data.map((info) => {
    return (
      <Card
        key={info.id}
        {...info}
      />
    );
  });
  return (
    <div>
      <Nav />
      <Hero />
      <section className="card_list">{cards}</section>
    </div>
  );
};
export default App;

