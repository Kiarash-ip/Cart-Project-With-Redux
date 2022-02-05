import React from "react";

// icons
import { BsTrash } from "react-icons/bs";

// Styles
import styles from "./Cart.module.css";

// redux
import { useDispatch } from "react-redux";

// actionCreaters
import { increase, removeItem, decrease } from "../redux/cart/cartAction";

// functions
import { shorten } from "./helpers/functions";

export default function Cart(props) {
  const { image, price, title, quantity } = props.data;

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price}</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        ) : (
          <button onClick={() => dispatch(removeItem(props.data))}>
            <BsTrash />
          </button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
}
