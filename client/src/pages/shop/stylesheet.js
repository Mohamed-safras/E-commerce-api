import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ShopContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  height: 100%;
  overflow: auto;
  width: calc(100vw - 270px);
  margin-left: 270px;
  height: 100%;

  @media screen and (max-width: 900px) {
    margin-left: 0px;
    width: 100vw;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  top: 70px;
  min-width: 270px;
  width: 270px;
  padding: 15px;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  background-color: #fff;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
