import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors/index";
export const NavBar = styled.nav`
  background: ${({ theme }) =>
    theme === "dark" ? colors.colorBlack : colors.colorWhite};
  padding: 15px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 100;
  overflow: hidden;
`;

export const Logo = styled(Link)`
  width: 80px;
  height: 100%;
  background: white;
  border-radius: 5px;
`;
export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SearchBar = styled.form`
  flex: 0.5;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.borderColor};
  justify-content: space-between;
  border-radius: 30px;
  @media (max-width: 678px) {
    display: none !important;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: ${colors.colorWhite};
  &:focus {
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const P = styled.p`
  display: none !important;
  @media (max-width: 800px) {
    display: block !important;
  }
`;

export const MenuIconBtn = styled(IconButton)`
  padding: 0 !important;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")} !important;
  @media (max-width: 800px) {
    display: block !important;
    margin: ${({ isOpen }) => (isOpen ? "10px" : "none")} !important;
  }
`;

export const SearchIconBtn = styled.div`
  display: none !important;

  @media (max-width: 660px) {
    display: block !important;
  }
`;
