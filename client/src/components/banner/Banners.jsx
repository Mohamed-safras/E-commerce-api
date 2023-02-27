import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import ArrowIconBtn from "../button-component/ArrowIconBtn";

import Banner from "./Banner";
const bannerdata = [
  {
    id: 1,
    src: "https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg?w=1060&t=st=1674818548~exp=1674819148~hmac=1b29541e72c96b658af49ea739f427b5da1160e1e22d89c643f44e1617266c3a",
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-psd/fashion-sale-concept-banner-template_23-2148696517.jpg?w=1060&t=st=1674818581~exp=1674819181~hmac=9bc4329e34f633730bca07f893d3ff2d89fc8db8f2263bb1b3fd47a0f20f030f",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-psd/online-shopping-banner-template-design_23-2148690177.jpg?w=1060&t=st=1674818683~exp=1674819283~hmac=61fc791c04eb13cfcc14d8b7aceab15869b2274115766ea56d2317eea16065b4",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-psd/online-shopping-horizontal-banner_23-2148690175.jpg",
  },
];

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slideRef = useRef(null);
  const style = {
    backgroundColor: colors.colorWhite,
    color: colors.textColor,
    top: "45%",
  };
  return (
    <Slide>
      <Slider ref={slideRef} {...settings}>
        {bannerdata.map((item) => (
          <Banner src={item.src} key={item.id} />
        ))}
      </Slider>

      <ArrowIconBtn
        Icon={EastIcon}
        clickref={() => slideRef.current.slickNext()}
        style={{ ...style, right: "1.5rem" }}
      />
      <ArrowIconBtn
        Icon={WestIcon}
        clickref={() => slideRef.current.slickPrev()}
        style={{ ...style, left: "1.5rem" }}
      />
    </Slide>
  );
};

export default Banners;

const Slide = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 1rem;
  position: relative;
`;
