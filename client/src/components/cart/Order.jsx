import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartCard from "../../pages/cart/Cart.card";
import {
  CartHeader,
  CartItems,
  ShoppingCart,
  ShoppingCartHeader,
} from "./order.styles";

const Order = () => {
  const { cartItems, numberOfCartItems, total } = useContext(CartContext);
  return (
    <ShoppingCart>
      <ShoppingCartHeader>
        <h4>Shopping Cart</h4>
        <h4>{numberOfCartItems} Items</h4>
      </ShoppingCartHeader>
      <CartItems>
        <CartHeader>
          <span className="header-block">Description</span>
          <span className="header-block">Quantity</span>
          <span className="header-block">Price</span>
          <span className="header-block">Total</span>
        </CartHeader>
        {cartItems.map((item) => (
          <CartCard key={item.id} {...item} />
        ))}
      </CartItems>
    </ShoppingCart>
  );
};

export default Order;
