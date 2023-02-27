import React from "react";
import styled from "styled-components";

const Banner = ({ src }) => {
  return <Image src={src} />;
};

export default Banner;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;

  @media screen and (max-width: 678px) {
    height: 200px;
  }
`;
