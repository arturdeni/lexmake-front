import React from "react";

import HomeHero from "./HomeHero/HomeHero";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeServices from "./HomeServices/HomeServices";
import HomeSkills from "./HomeSkills/HomeSkills";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <HomeServices />
      <HomeSkills />
    </>
  );
};

export default Home;
