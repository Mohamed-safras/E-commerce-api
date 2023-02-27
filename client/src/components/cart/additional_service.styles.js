import styled from "styled-components";
import { colors } from "../../styles/colors/index";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-height: 260px;
  @media screen and (max-width: 800px) {
    max-height: 100%;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    max-height: 100%;
    grid-template-columns: 1fr;
  }
`;

export const ServicePackage = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  width: 100%;
  height: 80px;
  justify-content: space-evenly;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 4px 0px;
`;

export const PackagePrice = styled.div`
  font-size: 14px;
  margin: 0 10px;
  /* width: 100%; */
`;
export const PackageType = styled.div`
  /* width: 100%; */
  margin: 0 10px;
  .package_name {
    color: ${colors.colorBlack};
    font-weight: 500;
    font-size: 16px;
  }
  span {
    display: block;
    font-size: 14px;
    color: ${colors.textColor};
  }
`;

export const ServiceEnabalButton = styled.div`
  /* width: 100%; */
`;
