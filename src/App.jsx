import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AcessFiles from "./components/AcessFiles";
import Productive from "./components/Productive";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AcessFiles />
      <Productive />
      <Comments />
      <Footer />
    </div>
  );
};

export default App;
