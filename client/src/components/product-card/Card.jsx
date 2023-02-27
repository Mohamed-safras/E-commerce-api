import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { Fragment, useContext, useState } from "react";

import { CartContext } from "../../context/cart.context";

import {
  AddToCart,
  Brand,
  CardBottom,
  CardContainer,
  CardDetails,
  CardHeader,
  Price,
  ProductImage,
  ProductTitle,
  Rating,
  Sizes,
} from "./products.style";

const Card = (props) => {
  const { new_price, old_price, image, title, brand, id, param } = props;

  const off = (
    100 -
    (parseNumber(new_price) / parseNumber(old_price)) * 100
  ).toFixed(0);

  function parseNumber(value, locales = navigator.languages) {
    const example = Intl.NumberFormat(locales).format("1.1");
    const cleanPattern = new RegExp(`[^-+0-9${example.charAt(1)}]`, "g");
    const cleaned = value.replace(cleanPattern, "");
    const normalized = cleaned.replace(example.charAt(1), ".");
    return parseFloat(normalized);
  }

  return (
    <CardContainer to={`/details/${param}-${id}`}>
      <ProductImage>
        <img src={image} alt={title} />
        <Rating>
          <span>3.9</span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
            alt=""
          />
        </Rating>
      </ProductImage>
      <CardDetails>
        <CardHeader>
          <ProductTitle>
            {title.length > 20 ? `${title.slice(0, 20).trim()}...` : title}
          </ProductTitle>

          <Brand>{brand}</Brand>
        </CardHeader>

        <CardBottom>
          <Price>
            <span className="new_price">Rs.{new_price}</span>
            <span className="old_price">Rs.{old_price}</span>
            <span className="off">({off}% OFF)</span>
          </Price>
        </CardBottom>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;
