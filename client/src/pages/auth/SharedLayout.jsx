import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/SideBar/Index";
import Overlay from "../components/SideBar/Overlay";
// import { UserContext } from "../context/user.context";

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTopBar = () => {
    setIsOpen(!isOpen);
    const body = document.body;
    body.style.position = !isOpen ? "fixed" : "";
  };
  return (
    <Fragment>
      <Navbar toggleTopBar={toggleTopBar} />
      {/*<Overlay isOpen={isOpen} toggleTopBar={toggleTopBar} />
  <SideBar isOpen={isOpen} toggleTopBar={toggleTopBar} />*/}
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
