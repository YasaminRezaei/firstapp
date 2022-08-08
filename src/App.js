import React,{Component} from "react";
//import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Burger from "./Components/Burger";
import Landing from "./Components/Landing";
import Products from "./Components/Products";
import {Route, Switch} from "react-router-dom";



class App extends Component {

    render() {
        return (
           <div>
                <Burger />
                <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/" component={Landing} />
                </Switch>
              
                <Footer />
           </div>
        )
    }

}
export default App;