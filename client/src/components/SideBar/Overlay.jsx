import React from "react";
import stylesheets from "styled-components";
const Overlay = ({ isOpen, toggleTopBar }) => {
  return <OverLayContainer isOpen={isOpen} onClick={toggleTopBar} />;
};

const OverLayContainer = stylesheets.div`
    background: black;
    position:fixed;
    opacity:0.4;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:100;
    height:100%;
    width:100vw;
    overflow:hidden;
    trasition:translateX 250ms ease-in-out;
    transform:translateX(${({ isOpen }) => (isOpen ? 0 : "100%")});

    `;

export default Overlay;
