import React, { Component } from 'react';
import Products from '../../components/Products'
import Product from '../../components/Product'
import { connect } from 'react-redux'
import { dispatchProducts, dispatchDeleteProduct } from '../../redux/actions/index'
class ProductPage extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    onDelete = id => {
        // let { products } = this.props;
        // fetchAPI("DELETE", `/products/${id}`, null).then(res => {
        //     if (res.status === 200) {
        //         products.splice(this.findIndex(products, id), 1);
        //         this.setState({
        //             products: products
        //         })
        //     }
        // })

    }

    findIndex = (products, id) => {
        let index = -1;
        products.forEach((product, i) => {
            if (product.id === id) {
                index = i;
            }
        });
        return index;
    }

    showProduct = products => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product key={index} product={product} index={index} onDelete={this.props.deleteProduct} />
                )
            })
        }
        return result;
    }
    render() {
        let { products } = this.props;
        return (
            <div className="container mt-5">
                <Products>
                    {this.showProduct(products)}
                </Products>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProducts: () => {
            dispatch(dispatchProducts())
        },
        deleteProduct: id => {
            dispatch(dispatchDeleteProduct(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);