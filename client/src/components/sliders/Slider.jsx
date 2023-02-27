import EastIcon from "@mui/icons-material/East";
import React, { Fragment, useContext, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { CategoriesContext } from "../../context/categories.context";
import { colors } from "../../styles/colors";
import ArrowIconBtn from "../button-component/ArrowIconBtn";
import CategoryItem from "../categories/CategoryItem";

const SliderComponent = ({ title }) => {
  const { categories } = useContext(CategoriesContext);
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRef = useRef(null);
  const style = {
    backgroundColor: colors.colorPrimary,
    right: "1.5rem",
    top: "45%",
  };
  return (
    <Fragment>
      <h3 style={{ padding: "10px" }}>{title}</h3>
      <Slide>
        <Slider ref={slideRef} {...settings}>
          {Object.entries(categories).map((item, index) => (
            <CategoryItem
              key={index}
              title={item[0]}
              imageUrl={item[1][0]["image"]}
            />
          ))}
        </Slider>

        <ArrowIconBtn
          Icon={EastIcon}
          clickref={() => slideRef.current.slickNext()}
          style={style}
        />
      </Slide>
    </Fragment>
  );
};

export default SliderComponent;

const Slide = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 1rem;
  position: relative;
`;
