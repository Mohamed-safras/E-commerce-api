import {
  ButtonContainer,
  Image,
  Title,
} from "../button-component/Button.styles";
const Button = ({ title, event, style_type, Icon, ...otherprops }) => {
  return (
    <ButtonContainer
      {...otherprops}
      onClick={event && (() => event())}
      style_type={style_type}
    >
      {Icon && <Image src={Icon} alt="icon" />}
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
