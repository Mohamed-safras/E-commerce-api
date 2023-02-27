import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart.context";
import { colors } from "../../styles/colors";

import useAuthContext from "../../Hooks/AuthHandler";
import useSignOut from "../../Hooks/useSignOut";
import { NavRight, SearchIconBtn } from "./Navbar.styled";

const NavLinks = ({ toggleSearchBar }) => {
  const { user } = useAuthContext();
  const { logout } = useSignOut();
  const { numberOfCartItems } = useContext(CartContext);

  const handelClick = () => {
    logout();
  };

  return (
    <NavRight>
      <SearchIconBtn onClick={toggleSearchBar}>
        <IconButton>
          <SearchIcon style={{ color: "#a1a0a5", fontSize: 26 }} />
        </IconButton>
      </SearchIconBtn>
      <Link to="favorites">
        <IconButton>
          <FavoriteBorderIcon sx={{ fontSize: 26, color: "#a1a0a5" }} />
        </IconButton>
      </Link>
      <Link to="cart">
        <IconButton>
          <Badge badgeContent={numberOfCartItems} max={99} color="primary">
            <LocalMallOutlinedIcon sx={{ fontSize: 26, color: "#a1a0a5" }} />
          </Badge>
        </IconButton>
      </Link>
      {user ? (
        <Avatar
          onClick={handelClick}
          src={`http://localhost:8080/images/${user.avatar}`}
          sx={{
            margin: "0 10px",
            width: "30px",
            height: "30px",
          }}
        />
      ) : (
        <Link to="/signin">
          <h4 style={{ color: colors.textColor, padding: "8px" }}>SIGNIN</h4>
        </Link>
      )}
    </NavRight>
  );
};

export default NavLinks;
