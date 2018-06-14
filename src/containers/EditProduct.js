import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedProduct, clearSelectedProduct } from '../actions';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';

import Form from '../Form';

class EditProduct extends Component {

    componentDidMount() {
        this.props.selectedProduct(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearSelectedProduct();
    }

    renderUpdateForm = ({selected}) => {
        if (selected) {
            return selected.map((item) => {
                return(
                    <Form key={item.id} data={item}/>
                )
            })
        }
    }

    render(){
        return(
            <Container className="item">
                { this.renderUpdateForm(this.props.products) }
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
    return bindActionCreators({selectedProduct, clearSelectedProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);