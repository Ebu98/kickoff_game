import React from "react";
import "./card.css";

const Card = ({ children, size, ...rest }) => {
  let classSize;
  if (size === "lg") classSize = "success";
  if (size === "sm") classSize = ".warning";
  if (size === "md") classSize = "error";
  if (size === "sm") classSize = "neutral";
  return (
    <div className={classSize} {...rest}>
      {children}
    </div>
  );
};

export default Card;
