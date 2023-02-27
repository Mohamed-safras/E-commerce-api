import styled from "styled-components";
import { colors } from "../../styles/colors/theme";
export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border: 1px solid #e7e7e7;
  padding: 8px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: center;

  @media screen and (max-width: 550px) {
    width: 55%;
  }
`;

export const Image = styled.div`
  width: 150px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
  }

  @media screen and (max-width: 550px) {
    min-width: 80px;
    max-width: 80px;
    /* height: 50px; */
  }
`;

export const ProductTitle = styled.div`
  margin: 0 15px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .title {
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    margin: 3px 0;
  }
  .brand {
    font-size: 12px;
    font-weight: 500;
    color: ${colors.textColor};
  }

  @media screen and (max-width: 550px) {
    .title {
      font-size: 10px;
    }

    .brand {
      font-size: 8px;
    }
    margin-left: 8px;
    margin-right: 0px;
  }
`;

export const Price = styled.p`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 550px) {
    font-size: 10px;
    width: 15%;
  }
`;

export const Total = styled.p`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 550px) {
    font-size: 10px;
    width: 15%;
  }
`;

export const Quantity = styled.div`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 550px) {
    .count {
      font-size: 12px;
    }
    flex-direction: column;
    width: 15%;
  }
`;

export const Remove = styled.button`
  background: ${colors.textColor};
  padding: 8px 10px;
  outline: none;
  border: none;
  border-radius: 15px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${colors.colorWhite};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px 0;

  @media screen and (max-width: 550px) {
    font-size: 8px;
    padding: 5px 8px;
  }
`;
