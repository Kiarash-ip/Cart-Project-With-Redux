import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";

import { useSelector } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const data = useSelector((state) => state.productsState.products);
  const { image, title, description, price, category } = data[id - 1];

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>category :</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}
