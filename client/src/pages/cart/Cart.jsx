import React, { Fragment, useContext } from "react";
import AdditionalService from "../../components/cart/AdditionalService";
import Delivery from "../../components/cart/Delivery";
import Order from "../../components/cart/Order";
import OrderSummary from "../../components/cart/OrderSummary";
import { CartContext } from "../../context/cart.context";

import { Container } from "./carts.style";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const { numberOfCartItems } = useContext(CartContext);
  return (
    <Fragment>
      {numberOfCartItems > 0 ? (
        <Container>
          <Order />
          <AdditionalService />
          <Delivery />

          <OrderSummary />
        </Container>
      ) : (
        <EmptyCart />
      )}
    </Fragment>
  );
};

export default Cart;
