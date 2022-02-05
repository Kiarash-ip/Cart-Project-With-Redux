import React, { useEffect } from "react";

// components
import Product from "../shared/Product";
import Loader from "./Loader";

import styles from "./Store.module.css";

import { fetchProducts } from "../redux/products/productsActions";

// redux
import { useSelector, useDispatch } from "react-redux";

export default function Store() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <Loader />
      ) : productsState.error ? (
        <p>Something went wrong</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
}
