import React from "react";
import Feature from "../Components/Feature";
import HomeHeader from "../Components/HomeHeader";
import HomeBanner from "../Components/HomeBanner";
import HomeClothing from "../Components/HomeClothing";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Feature />
      <HomeBanner />
      <HomeClothing />
    </>
  );
};

export default Home;
