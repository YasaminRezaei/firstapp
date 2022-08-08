import React, { Component } from 'react';
import Baner from "./Baner";
import Cards from "./Cards";
import Search from "./Search";
import Logos from "./Logos";

class Landing extends Component {
    render() {
        return (
            <div>
                <Baner />
                <Cards />
                <Search />
                <Logos />
            </div>
        );
    }
}

export default Landing;