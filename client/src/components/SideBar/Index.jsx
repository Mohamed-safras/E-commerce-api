import MenuIcon from "@mui/icons-material/Menu";

import React, { useContext } from "react";
import { ThemeContex } from "../../context/Theme.contex";
import useSystemDefaultTheme from "../../Hooks/defaultTheme";

import { MenuIconBtn } from "../navbar/Navbar.styled";
import NavLinks from "../navbar/NavLinks";
import "./sidebar.styles.scss";
const SideBar = ({ isOpen, toggleTopBar }) => {
  const { changeTheme } = useContext(ThemeContex);
  const defaultTheme = useSystemDefaultTheme();
  return (
    <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
      <MenuIconBtn
        isOpen={isOpen}
        sx={{ padding: "0 !important" }}
        onClick={toggleTopBar}
      >
        <MenuIcon
          color="primary"
          sx={{ fontSize: 40, color: "#a1a0a5", padding: "0 !important" }}
        />
      </MenuIconBtn>
      <NavLinks />
      <select onChange={(e) => changeTheme(e.target.value)}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value={defaultTheme ? "dark" : "light"}>
          Use device theme
        </option>
      </select>
    </div>
  );
};

export default SideBar;
