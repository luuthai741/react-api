import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
class Product extends Component {

    handleEnable = enabled => {
        if (enabled === true) {
            return (
                <td className="text-success">YES</td>
            )
        } else {
            return (
                <td className="text-danger">NO</td>
            )
        }
    }

    onDeleteItem = id => {
        if (confirm("Are you sure about that?")) {//eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        let { product, index } = this.props;

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{this.handleEnable(product.enabled)}</td>
                <td>
                    <span className="mr-2"><NavLink to={`/products/edit/${product.id}`} className="btn btn-outline-warning" >Edit</NavLink></span>
                    <span><button className="btn btn-outline-danger" onClick={() => this.onDeleteItem(product.id)}>Del</button></span>
                </td>
            </tr>
        );
    }
}

export default Product;