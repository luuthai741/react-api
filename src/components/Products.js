import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Products extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <NavLink to="/products/add" className="btn btn-outline-info">
                            Add product
                        </NavLink>
                        <table className="table table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Enable</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;