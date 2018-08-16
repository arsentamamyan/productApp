import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allProducts } from '../actions';
import { bindActionCreators } from 'redux';

// COMPONENTS
import Products from '../components/home/Products';
import {Button, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Home extends Component {

    componentDidMount(){
        this.props.allProducts()
    }

    render(){
        return(
            <div>
                <Link to={`/product/add/`} className="product-item-edit-link">
                    <Button color="teal" animated>
                        <Button.Content visible>Add Product</Button.Content>
                        <Button.Content hidden>
                            <Icon name='plus' />
                        </Button.Content>
                    </Button>
                </Link>
                <Products items={this.props.products.allProducts}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({allProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);