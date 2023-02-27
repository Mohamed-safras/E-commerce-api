import styled from "styled-components";
import { colors } from "../../styles/colors/theme";

export const OrderSummaryContainer = styled.div`
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const ShoppingCartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0;
`;

export const OrderSummaryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const PromoCode = styled.div`
  margin: 5px 0;
  padding: 5px 0;
  border-bottom: 1px solid #e7e7e7;
  span {
    display: block;
    font-size: 16px;
    font-weight: 600;
  }
  .promo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  input {
    border: 1px solid ${colors.colorBlack};
    height: 35px;
    width: 100%;
    padding: 8px;
    outline: none;
    font-size: 14px;
    margin: 10px 0;
    border-radius: 5px;
  }
  button {
    padding: 0 8px;

    height: 35px;
    border-radius: 5px;
    width: 100px;
    border: none;
    outline: none;
    background: ${colors.orange};
    color: ${colors.colorWhite};
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const TotalCost = styled.div`
  margin: 5px 0;
  padding: 5px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
  button {
    display: block;
    padding: 0 10px;
    height: 40px;
    border-radius: 5px;
    width: 100%;
    border: none;
    outline: none;
    background: ${colors.colorBlack};
    color: ${colors.colorWhite};
    font-size: 14px;
    font-weight: 600;
    box-shadow: ${colors.colorBlack} 0px 1px 6px 0px;
    cursor: pointer;
  }
`;
