import React from "react";
import styles from "./Front.module.css";
import { Link } from "react-router-dom";

export default function Front() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Cypherock Wallet</div>
      <div className={styles.text}>
        Decentralised Recovery System for Blockchain Private Keys
      </div>
      <Link to={"/form"} style={{ textDecoration: "none" }}>
        <div className={styles.button}>Let's go!</div>
      </Link>
    </div>
  );
}
