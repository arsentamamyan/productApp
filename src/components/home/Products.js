import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Grid, Image, Header, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteProduct, allProducts } from '../../actions';
import { bindActionCreators } from 'redux';


class Products extends Component {

    showProducts = ({items}) => {
        if (items) {
            return items.map((item) => {
                return(
                    <Grid.Column key={item.id} className="product-item">
                        <Card>
                            <Card.Content>
                                <Image floated="right" size="small" src={item.image}/>
                                <Card.Header>{ item.name }</Card.Header>
                                <Card.Description>
                                    <div>
                                        <span className="currency">$</span> {item.price}</div>
                                    <div>
                                        <span className="added-date">Added:</span> {item.created_at}</div>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className="ui two buttons">
                                    <Button.Group>
                                        <Link to={`/product/edit/${item.id}`} className="product-item-edit-link">
                                            <Button color="teal" animated>
                                                <Button.Content visible>Edit</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name='pencil alternate' />
                                                </Button.Content>
                                            </Button>
                                        </Link>
                                        <Modal trigger={
                                            <Button color="red" animated>
                                                <Button.Content visible>Remove</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name='remove' />
                                                </Button.Content>
                                            </Button>
                                        } basic size='small'>
                                            <Header icon='archive' content='Delete Product' />
                                            <Modal.Content>
                                                <p>Are you sure you want delete product?</p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button color='green' inverted onClick={(event) => this.removeProduct(event, item.id)}>
                                                    <Icon name='checkmark' /> Yes
                                                </Button>
                                            </Modal.Actions>
                                        </Modal>
                                        <Link to={`/product/details/${item.id}`} className="product-item-details-link">
                                            <Button animated>
                                                <Button.Content visible>Details</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name='right arrow' />
                                                </Button.Content>
                                            </Button>
                                        </Link>
                                    </Button.Group>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })
        }
    }

    removeProduct(event, id) {
        event.preventDefault();
        this.props.deleteProduct(id);
    }

    render(){
        return(
            <div className="home-products">
                <Card.Group>
                    <Grid container centered doubling stackable columns={3}>
                        { this.showProducts(this.props) }
                    </Grid>
                </Card.Group>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({deleteProduct, allProducts}, dispatch);
    return {
        deleteProduct: (id) => {
            return actions.deleteProduct(id).then(() => actions.allProducts())
        }
    }
}


export default connect(null, mapDispatchToProps)(Products);