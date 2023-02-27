import Lottie from "lottie-react";
import React from "react";

import EmptyCartAnimation from "../../assets/empty.json";
import {
  AnimatedIcon,
  Container,
  EmptyCartAnimationContainer,
  Header,
  LinkToHome,
  TrustSignalsGroup,
} from "./emptycart.styles";
const EmptyCart = () => {
  return (
    <Container>
      <Header>
        <p>Shopping Cart</p>
      </Header>

      <EmptyCartAnimationContainer>
        <AnimatedIcon>
          <Lottie className="lottie" animationData={EmptyCartAnimation} />
          <span>You don’t have any items in your cart.</span>
          <LinkToHome to="/">Explore More</LinkToHome>
        </AnimatedIcon>
      </EmptyCartAnimationContainer>
      <TrustSignalsGroup>
        {[
          {
            title: "Carbon Neutrality",
            description: "Investing in programs that help the environment",
            logo: "https://www.redbubble.com/frontend-static/_next/static/media/carbon-neutral.b8753599.svg",
          },
          {
            title: "Secure Payments",
            description: "100% Secure Payment with 256-bit SSL encryption",
            logo: "https://www.redbubble.com/frontend-static/_next/static/media/secure-payment.cf876141.svg",
          },
          {
            title: "Worldwide Shipping",
            description: "Available as standard or express delivery",
            logo: "https://www.redbubble.com/frontend-static/_next/static/media/shipping.3b369783.svg",
          },
          {
            title: "Super Service",
            description: "Hassle-free returns and friendly customer support",
            logo: "https://www.redbubble.com/frontend-static/_next/static/media/service.76d72df0.svg",
          },
        ].map(({ title, description, logo }, index) => (
          <div
            className="TrustSignalsGroupItems"
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <img src={logo} alt="" />
            <div
              className="details-wrapper"
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <span className="title">{title}</span>
              <span className="description">{description}</span>
            </div>
          </div>
        ))}
      </TrustSignalsGroup>
    </Container>
  );
};

export default EmptyCart;
