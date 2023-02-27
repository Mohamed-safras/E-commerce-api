// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/product-card/Card";
import { CategoriesContext } from "../../context/categories.context";

import { Container, ShopContainer, SideBar } from "./stylesheet";
const Shop = () => {
  const param = useLocation().pathname.split("/")[2];
  const { categories } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categories[param]);
  }, [param, categories]);

  return (
    <Container>
      <SideBar></SideBar>
      <ShopContainer>
        {products &&
          products?.map(
            ({ id, title, brand, new_price, old_price, limit, image }) => (
              <Card
                key={id}
                param={param}
                id={id}
                title={title}
                brand={brand}
                new_price={new_price}
                old_price={old_price}
                limit={limit}
                image={image}
              />
            )
          )}
      </ShopContainer>
    </Container>
  );
};

export default Shop;
