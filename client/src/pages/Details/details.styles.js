import styled from "styled-components";
import { colors } from "../../styles/colors/index";
export const Container = styled.div`
  padding: 15px;
`;

export const ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Images = styled.div`
  display: flex;

  flex-wrap: wrap;
  /* padding: 0 4px; */

  /* Create four equal columns that sits next to each other */
  .column {
    flex: 50%;
    max-width: 50%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
  }
`;

export const ProductDetails = styled.div`
  padding: 15px;
`;

export const Title = styled.h2``;

export const Subtitle = styled.span``;
export const Sizes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  li {
    border-left: 2px solid ${colors.textColor};
    border-top: 2px solid ${colors.textColor};
    border-bottom: 2px solid ${colors.textColor};
    padding: 5px 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: ${colors.textColor};
    }
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-right: 2px solid ${colors.textColor};
    }
  }

  li.active {
    background: ${colors.colorPrimary};
    color: ${colors.colorWhite};
  }
`;

export const AddToCart = styled.button`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 2px solid ${colors.searchColor};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.colorWhite};
  background: ${colors.colorPrimary};
  /* width: 100%; */
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${colors.borderColor};
  }
`;
