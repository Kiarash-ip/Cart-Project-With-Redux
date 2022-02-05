import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./Product.module.css";

// redux
import { useSelector, useDispatch } from "react-redux";

// actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../redux/cart/cartAction";

import {
  shorten,
  isInCart,
  quantityCount,
} from "../components/helpers/functions";
import { Link } from "react-router-dom";

export default function Product({ productData }) {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img
        className={styles.cartImage}
        src={productData.image}
        alt="product"
        style={{ width: "200px" }}
      />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(removeItem(productData))}
            >
              <BsTrash />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(decrease(productData))}
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button
              className={styles.addButton}
              onClick={() => dispatch(addItem(productData))}
            >
              Add to card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
