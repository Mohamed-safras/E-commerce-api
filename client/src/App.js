import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import axios from "axios";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/Contact";
import Details from "./pages/Details/Details.";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import SharedLayout from "./pages/SharedLayout";

import Shop from "./pages/shop/Shop";
const App = () => {
  const param = useLocation().pathname.split("/").pop();

  const [selectedFile, setSelectedFile] = useState();
  const [output, setOutput] = useState({});
  const changeHandler = (event) => {
    console.log(event.target);
    setSelectedFile(event.target.files[0]);
  };
  const predict = async () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    try {
      const res = await axios.post("http://localhost:8080/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setOutput(() => {
        return { class: res.data.class, confidence: res.data.confidence };
      });
      console.log(res.status);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="favorites"
          element={
            <Favorites
              predict={predict}
              change={changeHandler}
              output={output}
            />
          }
        />
        <Route path={`details/${param}`} element={<Details />} />
        <Route path={`shop/${param}`} element={<Shop />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
