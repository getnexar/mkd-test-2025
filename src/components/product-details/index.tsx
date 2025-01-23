import React from "react";
import styles from "./Product.module.scss";

interface ProductProps {
  productId: string;
  onAddToCart: () => void;
}

const Product: React.FC<ProductProps> = ({ productId, onAddToCart }) => {
  const title = "Essence Mascara Lash Princess";
  const image =
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png";
  const price = 19.99 - 5;

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.productImageArea}>
          <img src={image} alt={title} className={styles.productImage} />
        </div>
        <div className={styles.productDetails}>
          <h2 className={styles.productTitle}>{title}</h2>
          <p className={styles.productPrice}>${price.toFixed(2)}</p>
          <button onClick={onAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
