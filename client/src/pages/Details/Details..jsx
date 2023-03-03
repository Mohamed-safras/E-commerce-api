import { Subtitles } from "@mui/icons-material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { CategoriesContext } from "../../context/categories.context";
import {
  AddToCart,
  Container,
  Images,
  ProductDetails,
  ProductDetailsContainer,
  Sizes,
  Subtitle,
  Title,
} from "./details.styles";

const Details = () => {
  const { addToCart } = useContext(CartContext);
  const { categories } = useContext(CategoriesContext);
  const param = useLocation().pathname.split("/").pop();

  const [category, id] = param.split("-");

  const addToProductCart = () => {
    const products = categories[category];
    const item = products.find((item) => item.id === id);
    addToCart(item);
  };
  return (
    <Container>
      <ProductDetailsContainer>
        <Images>
          <div class="column">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175__340.jpg"
              alt=""
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"
              alt=""
            />
          </div>
          <div class="column">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
              alt=""
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg"
              alt=""
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"
              alt=""
            />
          </div>
        </Images>
        <ProductDetails>
          <Title>Stay Positive Long T-Shirt</Title>
          <Subtitle>Designed and sold by Steven Rhodes</Subtitle>

          <Sizes>
            <li className="active">S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>2XL</li>
          </Sizes>

          <AddToCart onClick={addToProductCart}>Add To Cart</AddToCart>
        </ProductDetails>
      </ProductDetailsContainer>
    </Container>
  );
};

export default Details;
