import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    const existing = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    return existing;
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItemAtOnce = (cartItems, productToRemove) => {
  const newCartItem = cartItems
    .filter((item) => item.id !== productToRemove.id)
    .map((cartItem) => cartItem);
  return newCartItem;
};

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeToCartItem: () => {},
  numberOfCartItems: 0,
  removeToCartAtOnce: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  // const { products } = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalItems = cartItems.reduce((prev, current) => {
      return prev + current.quantity;
    }, 0);

    const total = cartItems.reduce((prev, current) => {
      const new_price = current.new_price;

      return prev + current.quantity * Number.parseFloat(new_price);
    }, 0);

    setNumberOfCartItems(totalItems);
    setTotal(total);
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeToCartItem = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeToCartAtOnce = (productToRemove) => {
    setCartItems(removeCartItemAtOnce(cartItems, productToRemove));
  };

  const value = {
    cartItems,
    addToCart,
    numberOfCartItems,
    removeToCartItem,
    removeToCartAtOnce,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
