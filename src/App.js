import axios from "axios";

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowList from "./ShowList";
import ProductList from "./components/ProductList";
import Product from "./pages/Product";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link className="navbar-brand" to="/product">
            Product
          </Link>
          <Link className="navbar-brand" to="/page2">
            Page2
          </Link>
          <Link className="navbar-brand" to="/page3">
            Page3
          </Link>
          <Switch>
            <Route exact path="/product" component={Product} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Dicoba deh Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h3>{element}</h3>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reacts
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
