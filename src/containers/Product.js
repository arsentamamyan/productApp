import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedProduct, clearSelectedProduct } from '../actions';
import { bindActionCreators } from 'redux';
import { Container, Item } from 'semantic-ui-react';

class Product extends Component {

    componentDidMount() {
        this.props.selectedProduct(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearSelectedProduct();
    }

    renderProductDetails = ({selected}) => {
        if (selected) {
            return selected.map((item) => {
                return(
                    <Item.Group key={item.id}>
                        <Item>
                            <Item.Image size="medium" src={item.image}></Item.Image>
                            <Item.Content>
                                <Item.Header>{item.name}</Item.Header>
                                <Item.Meta><span className="item-price">$ {item.price}</span></Item.Meta>
                                <Item.Meta><span className="item-added-date">Added: {item.created_at}</span></Item.Meta>
                                <Item.Description>
                                    <span className="item-description">{item.description}</span>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                )
            })
        }
    }

    render(){
        return(
            <Container className="item">
                { this.renderProductDetails(this.props.products) }
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);