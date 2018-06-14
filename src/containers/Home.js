import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allProducts } from '../actions';
import { bindActionCreators } from 'redux';

// COMPONENTS
import Products from '../components/home/Products';

class Home extends Component {

    componentDidMount(){
        this.props.allProducts()
    }

    render(){
        return(
            <div>
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