import React from "react";
import star from "./img/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card_container">
      {badgeText && <div className="card_badge">{badgeText}</div>}
      <img src={props.coverImg} alt={props.coverImg} className="card_img" />
      <div className="card_stats">
        <img src={star} alt="" className="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card_title">{props.title}</p>
      <p className="card_price">
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
export default Card;
