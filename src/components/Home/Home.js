import React from "react";

import HomeHero from "./HomeHero/HomeHero";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeServices from "./HomeServices/HomeServices";
import HomeSkills from "./HomeSkills/HomeSkills";
import HomeShopCart from "./HomeShopCart/HomeShopCart";
import HaveAnIdea from "../shared/HaveAnIdea/HaveAnIdea";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <HomeServices />
      <HomeSkills />
      <HomeShopCart />
      <HaveAnIdea />
    </>
  );
};

export default Home;
