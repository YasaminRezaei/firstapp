import React from 'react';
import styles from "./Baner.module.css";
import image from "../images/beautiful-shot-of-rocky-mountains-covered-with-white-snow.jpg";

const Baner = () => {
    return (
        <div className={styles.container}>
            <img src={image} alt=""/>
            <p>Botostart</p>   
        </div>
    );
};

export default Baner;