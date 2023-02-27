import React from "react";

import styled from "styled-components";
import Banners from "../components/banner/Banners";
import SliderComponent from "../components/sliders/Slider";

const Home = () => {
  return (
    <HomeContainer>
      <Banners />
      <SliderComponent title={"Catagories of items"} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

export default Home;
