import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useState } from "react";
import BrandLogo from "../../assets/clothing-logo.jpg";
import { IMG, Input, Logo, NavBar, SearchBar } from "./Navbar.styled";

import NavLinks from "./NavLinks";

import { ThemeContex } from "../../context/Theme.contex";

const Navbar = ({ toggleTopBar }) => {
  const { theme } = useContext(ThemeContex);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };
  return (
    <NavBar theme={theme}>
      <React.Fragment>
        <Logo to="/">
          <IMG src={BrandLogo} alt="logo" />
        </Logo>

        <SearchBar>
          <Input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <IconButton>
            {searchText.length > 0 ? (
              <CloseIcon
                style={{ color: "#a1a0a5", fontSize: 26 }}
                onClick={() => setSearchText("")}
              />
            ) : (
              <SearchIcon style={{ color: "#a1a0a5", fontSize: 26 }} />
            )}
          </IconButton>
        </SearchBar>
        <NavLinks toggleSearchBar={toggleSearchBar} />
      </React.Fragment>
    </NavBar>
  );
};

export default Navbar;
