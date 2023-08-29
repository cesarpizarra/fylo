import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AcessFiles from "./components/AcessFiles";
import Productive from "./components/Productive";
import Comments from "./components/Comments";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AcessFiles />
      <Productive />
      <Comments />
    </div>
  );
};

export default App;
