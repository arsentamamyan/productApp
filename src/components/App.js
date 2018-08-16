import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './Header';
import Footer from './Footer';

// CONTAINERS
import Home from '../containers/Home';
import Product from '../containers/Product';
import EditProduct from '../containers/EditProduct';
import AddProduct from '../containers/AddProduct';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/product/details/:id" component={Product}/>
                    <Route path="/product/edit/:id" component={EditProduct}/>
                    <Route path="/product/add" component={AddProduct}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
