import { createContext, useEffect, useState } from "react";
import { SHOPDATA } from "../data/clothing";
import {
  addCollectionAndDocument,
  getProducts,
} from "../utils/firebase/createProduct";
export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  const getNewProducts = async () => {
    try {
      const products = await getProducts();
      setCategories(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewProducts();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOPDATA);
  // }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
