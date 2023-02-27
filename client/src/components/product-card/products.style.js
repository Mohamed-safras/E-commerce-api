import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors/theme";
export const CardContainer = styled(Link)`
  // border-radius: 15px;
  max-height: 400px;
  position: relative;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  /* @media screen and (max-width: 440px) {
    height: 340px;
  } */
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;

  @media screen and (max-width: 440px) {
    height: 250px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 2px 4px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fe5e02;
  span {
    font-size: 12px;
    color: ${colors.colorWhite};
    font-weight: 500;
    width: 100%;
    height: 100%;
    margin-right: 3px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardDetails = styled.div``;

export const CardHeader = styled.div`
  position: relative;
  margin: 8px;
`;

export const ProductTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

export const Brand = styled.p`
  color: ${colors.textColor};
  font-size: 14px;
`;

export const Sizes = styled.div`
  display: flex;
  align-items: center;

  color: ${colors.textColor};
  font-size: 14px;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
    li {
      margin-right: 5px;
    }
  }
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
`;

export const Price = styled.div`
  .new_price {
    font-size: 14px;
    margin-right: 5px;
    color: $colorBlack;
  }
  .old_price {
    font-size: 11px;
    color: $text-color;
    margin-right: 5px;
    text-decoration: line-through;
  }

  .off {
    font-size: 11px;
    color: #fe5e02;
  }
`;
