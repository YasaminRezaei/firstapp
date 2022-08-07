import React from 'react';
import styles from "./Logos.module.css";
import apple from "../images/apple.png";
import sumsong from "../images/sumsong.png";
import xiaomi from "../images/xiaomi.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who suport us?</h3>
            <img src={apple} alt=""/>
            <img src={sumsong} alt=""/>
            <img src={xiaomi} alt=""/>
        </div>
    );
};

export default Logos;