import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
// redux
import { useSelector } from "react-redux";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const state = useSelector((state) => state.cartState);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
}
