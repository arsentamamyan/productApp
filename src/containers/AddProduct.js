import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedProduct, clearSelectedProduct, addProduct } from '../actions';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';

import Form from '../Form';

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: '',
                price: '',
                description: ''
            }
        }
    }

    componentWillUnmount() {
        this.props.clearSelectedProduct();
    }

    render(){
        return(
            <Container className="item">
              <Form data={this.state.data} updateProduct={this.props.addProduct}/>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectedProduct, clearSelectedProduct, addProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);