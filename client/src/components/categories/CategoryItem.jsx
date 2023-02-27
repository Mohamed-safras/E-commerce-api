import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <Container>
      <Image src={imageUrl} />
      <Link to={`shop/${title}`}>
        <ProductDetails>
          <h2>{title}</h2>
          <p>shop now</p>
        </ProductDetails>
      </Link>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  padding: 0 2px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  width: 80%;
  background-color: ${colors.colorWhite};
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 90px;
  bottom: 50%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, 50%);

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 16px;
    color: #4a4a4a;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #292929;
  }
`;
