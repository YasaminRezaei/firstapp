import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import laptop from '../images/top-view-person-writing-on-laptop-with-copy-space.jpg';
import mobile from '../images/woman-holding-smartphone-in-hands.jpg';
import keyboard from '../images/clay-banks-PXaQXThG1FY-unsplash.jpg';
import iphone from '../images/v-a-tao-OxvlDO8RwKg-unsplash.jpg';

class Cards extends Component {
    constructor(){
        super();
        this.state = {
            productData : [
                {id:1 ,image: iphone ,title: "iphone",cost:"500"},
                {id:2 ,image: laptop ,title: "laptop",cost:"1200"},
                {id:3 ,image: mobile, title:"Mobile", cost:"500"},
                {id:4 ,image:keyboard ,title:"keyboard" ,cost:"150"}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.productData.map(
                    (product) => <Card key={product.id} image= {product.image} title={product.title} cost={product.cost}/>
                )}
            </div>
        );
    }
}

export default Cards;