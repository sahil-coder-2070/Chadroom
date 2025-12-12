import React from "react";
import Hero from "../layout/Hero";
import ProjectShow from "../layout/ProjectShow";
import Silderimg from "../components/ui/Silderimg";
import Verification from "../components/Verification";
import TextGrid from "../components/ui/TextGrid";
import AnimatedProject from "../components/AnimatedProject";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectShow />
      <Silderimg />
      <Verification />
      <TextGrid />
      <AnimatedProject />
    </div>
  );
};

export default Home;
