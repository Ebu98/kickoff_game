import React from 'react'
import "./card.css"

const Card = ({children, size, ...rest}) => {
  let classNames

  if (size === "lg") classNames = "trophy-card";
  if (size === "sm") classNames = "vaadin-card";
  if (size === "md") classNames = "flag-card";
  if (size === "sm") classNames = "vector-card";
  if(size === "sm") classNames = "iconamoon-card"
  return (
    <div className={classNames} {...rest}>
        {children}
    </div>
  )
}

export default Card