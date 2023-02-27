import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  OrderSummaryContainer,
  OrderSummaryHeader,
  PromoCode,
  ShoppingCartHeader,
  TotalCost,
} from "./order_summary.style";
const OrderSummary = () => {
  const { cartItems, numberOfCartItems, total } = useContext(CartContext);
  return (
    <OrderSummaryContainer>
      <ShoppingCartHeader>
        <h4>Order Summary</h4>
      </ShoppingCartHeader>
      <OrderSummaryHeader>
        <span className="description">ITEMS {numberOfCartItems}</span>
        <span className="description">Rs.{total}</span>
      </OrderSummaryHeader>

      <PromoCode>
        <span>PROMO CODE</span>
        <div className="promo">
          <input type="text" placeholder="Enter your code" />
          <button>APPLY</button>
        </div>
      </PromoCode>
      <TotalCost>
        <div>
          <span>TOTAL COST</span>
          <span>RS.{total}</span>
        </div>
        <button>CHECKOUT</button>
      </TotalCost>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
