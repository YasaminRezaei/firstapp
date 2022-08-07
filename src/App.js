import React,{Component} from "react";
//import Navbar from "./Components/Navbar";
import Baner from "./Components/Baner";
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import Logos from "./Components/Logos";
import Footer from "./Components/Footer";
import Burger from "./Components/Burger";


class App extends Component {

    render() {
        return (
           <div>
                <Burger />
                <Baner />
                <Cards />
                <Search />
                <Logos />
                <Footer />
           </div>
        )
    }

}
export default App;