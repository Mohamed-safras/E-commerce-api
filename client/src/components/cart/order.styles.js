import styled from "styled-components";

export const ShoppingCart = styled.div`
  padding: 10px 15px;
  width: 100%;
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

export const CartHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;

  .header-block {
    text-transform: capitalize;
    font-size: 16px;
    text-align: center;
    width: 20%;
    &:first-child {
      width: 40%;
    }
  }
  @media screen and (max-width: 550px) {
    .header-block {
      font-size: 12px;

      width: 15%;
      &:first-child {
        width: 55%;
      }
    }
  }
`;

export const CartItems = styled.div`
  width: 100%;
`;
