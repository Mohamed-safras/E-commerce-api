import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
// import { colors } from "../../styles/colors/theme";
import {
  CartContainer,
  Description,
  Image,
  Price,
  ProductTitle,
  Quantity,
  Remove,
  Total,
} from "./cart.style";

const CartCard = (props) => {
  const { title, new_price, image, quantity, brand } = props;

  const { addToCart, removeToCartItem, removeToCartAtOnce } =
    useContext(CartContext);
  const addToProductCart = () => addToCart(props);
  return (
    <CartContainer>
      <Description>
        <Image>
          <img src={image} alt={title} />
        </Image>
        <ProductTitle>
          <p className="title">
            {title.length > 20
              ? `${title.slice(0, 20).trim()}...`
              : title.trim()}
          </p>
          <p className="brand">{brand}</p>
          <Remove onClick={() => removeToCartAtOnce(props)}>Remove</Remove>
        </ProductTitle>
      </Description>

      <Quantity>
        <span className="add" onClick={addToProductCart}>
          <IconButton>
            <AddIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </span>
        <span className="count">{quantity}</span>
        <span className="remove" onClick={() => removeToCartItem(props)}>
          <IconButton>
            <RemoveIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </span>
      </Quantity>

      <Price className="price">Rs.{new_price}</Price>

      <Total>Rs.{quantity * new_price}</Total>
    </CartContainer>
  );
};

export default CartCard;
