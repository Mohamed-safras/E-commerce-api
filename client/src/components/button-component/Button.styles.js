import styled from "styled-components";
import { colors } from "../../styles/colors/theme";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 8px;
  height: 45px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  @media screen and (max-width: 300px) {
    height: 35px;
    margin: 12px 0;
  }

  ${({ style_type }) =>
    style_type === "primary"
      ? `
    background: ${colors.colorWhite};
    color: ${colors.colorBlack};
  `
      : ` 
      background: ${colors.inputBlack};
      color: ${colors.colorWhite};
      border: 2px solid ${colors.borderColor}`}
`;

export const Image = styled.img`
  margin-right: 10px;
  width: 25px;
  height: 25px;

  @media screen and (max-width: 300px) {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;

  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;
