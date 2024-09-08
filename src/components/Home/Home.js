import React from "react";

import HomeHero from "./HomeHero/HomeHero";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeServices from "./HomeServices/HomeServices";
import HomeSkills from "./HomeSkills/HomeSkills";
import HaveAnIdea from "../shared/HaveAnIdea/HaveAnIdea";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <HomeServices />
      <HomeSkills />
      <HaveAnIdea />
    </>
  );
};

export default Home;
