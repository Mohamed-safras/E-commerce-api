import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import React, { useState } from "react";
import { colors } from "../../styles/colors/index.js";

import {
  Card,
  CheckMark,
  DeliverContainer,
  DeliverDetails,
} from "./deliver.style.js";
const DELIVER_OPTIONS = [
  {
    id: 1,
    title: "DPD Deliveries",
    expect_deliver: "Friday,28",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/DPD-Logo-1977-2015.png",
    deliver_charge: 5.25,
  },
  {
    id: 2,
    title: "FedEx Fast Delivery",
    expect_deliver: "Friday,28",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/FedEx_logo.jpg",
    deliver_charge: 7.25,
  },
  {
    id: 3,
    title: "UPS Deliveries",
    expect_deliver: "Friday,28",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/UPS-logo.png",
    deliver_charge: 5.5,
  },
  {
    id: 4,
    title: "Collect in person",
    expect_deliver: "Friday,27",
    logo: "https://www.shutterstock.com/image-vector/delivery-logo-transport-logistic-template-260nw-1496477174.jpg",
    deliver_charge: undefined,
  },
];

const Delivery = () => {
  return (
    <DeliverContainer>
      {DELIVER_OPTIONS.map((options) => (
        <DeliverCards key={options.id} {...options} />
      ))}
    </DeliverContainer>
  );
};

const DeliverCards = ({ id, title, expect_deliver, logo, deliver_charge }) => {
  const [check, setCheck] = useState("DPD Deliveries");

  return (
    <Card
      onClick={() => {
        setCheck(title);
      }}
    >
      <CheckMark>
        {check ? (
          <CheckCircleOutlineIcon sx={{ color: colors.colorLightBlue }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ color: colors.textColor }} />
        )}
      </CheckMark>
      <DeliverDetails>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="title_and_expected_delivery">
          <p>{title}</p>
          <span>
            Expected{" "}
            {`${
              deliver_charge === undefined ? "Collection : " : "delivery : "
            }`}
            {expect_deliver}
          </span>
          <span className="delivery_charge">
            {deliver_charge === undefined ? "Free" : `$${deliver_charge}`}
          </span>
        </div>
      </DeliverDetails>
    </Card>
  );
};

export default Delivery;
