import React, { Component } from 'react';
import styles from "./Card.module.css"; 
import down from "../images/down-arrow-svgrepo-com.svg";
import up from "../images/up-arrow-svgrepo-com.svg";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }
    upHandler = (event) => {
        this.setState(prevState => ({
            counter : prevState.counter +1
        }))
    }
    downHandler = (event) => {
      if(this.state.counter >= 1) {
        this.setState(prevState => ({
            counter : prevState.counter -1
        }))
      }
    }
    render() {
        const {image,title,cost} = this.props;
        const counter = this.state.counter;
        return (
            <div className={styles.container}>
               
                <img className={styles.images} src={image} alt='' />
                <div className={styles.description}>
                    <h3>{title}</h3>
                        <p>{cost} {counter ? `X ${counter} = ${cost*counter}`: ""} €</p>
                    <div className={styles.counter}>
                        <img src={down} className={!this.state.counter && styles.deactive } alt="arrow down" onClick={this.downHandler}/>
                        <span>{counter}</span>
                        <img src={up} alt="arrow down" onClick={this.upHandler}/>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Card;