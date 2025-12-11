import React from "react";
import Hero from "../layout/Hero";
import ProjectShow from "../layout/ProjectShow";
import Silderimg from "../components/Silderimg";
import Verification from "../components/Verification";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectShow />
      <Silderimg />
      <Verification />
    </div>
  );
};

export default Home;
