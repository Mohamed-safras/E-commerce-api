import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors/index";
const ArrowIconBtn = ({ clickref, Icon, style }) => {
  return (
    <Button style={style} onClick={clickref}>
      <IconButton>
        <Icon style={{ color: `${colors.textColor}`, fontSize: 26 }} />
      </IconButton>
    </Button>
  );
};

export default ArrowIconBtn;

const Button = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  padding: 10px;
`;
