import React from "react";
import { Link } from "react-router-dom";
import {
  Cards__item,
  Cards__item__link,
  Cards__item__pic,
  Cards__item__img,
} from "./Services.elements";

function CardItems(props) {
  return (
    <Cards__item>
      <Cards__item__link to={props.path}>
        <Cards__item__pic data-category={props.label}>
          <Cards__item__img alt="Travel Image" src={props.src} />
        </Cards__item__pic>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Cards__item__link>
    </Cards__item>
  );
}

export default CardItems;
