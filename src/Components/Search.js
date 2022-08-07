import React, { Component } from 'react';
import styles from "./Search.module.css";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }
    changeHandler= (event) => {
        this.setState({
            text :event.target.value
        });
        
    }


    render() {
        const text = this.state.text;
        return (
            <div className={styles.container}>
                <p>Search what do you want?</p>
                <div>
                <input type="text" placeholder='Search...' value={text} onChange={this.changeHandler} />
                <br / > <br / >
                <span>{text}</span>
                </div>
              
            </div>
        );
    }
}

export default Search;