import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchAddProduct, dispatchFetchProduct, dispatchUpdateProduct } from '../../redux/actions/index';
class ProductFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: "",
            txtPrice: "",
            cbEnabled: false
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match.path === "/products/add") {
            this.setState({
                txtName: "",
                txtPrice: "",
                cbEnabled: false
            })

        } else if (match.path === `/products/edit/:id`) {
            let id = match.params.id;
            console.log(id);
            console.log(this.props.getProduct(id));
            this.props.getProduct(id);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.product) {
            let { product } = nextProps;
            this.setState({
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                cbEnabled: product.enabled
            })
        }
    }
    onChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }

    onBack = () => {
        this.props.history.goBack();
    }

    onSubmit = event => {
        let { match } = this.props;
        let { history } = this.props;
        let { txtName, txtPrice, cbEnabled, id } = this.state
        event.preventDefault();
        if (match.path === "/products/add") {
            let product = {
                id: id,
                name: txtName,
                price: txtPrice,
                enabled: cbEnabled
            }
            this.props.addProduct(product);
            history.goBack();

        } else if (match.path === `/products/edit/:id`) {
            let product = {
                id: id,
                name: txtName,
                price: txtPrice,
                enabled: cbEnabled
            }
            console.log(product);
            this.props.updateProduct(product)
            history.goBack();

        }
    }

    render() {
        let { txtName, txtPrice, cbEnabled } = this.state;
        return (
            <div className="container">

                <div className="col-md-6 mt-5">
                    <button className="btn btn-primary" onClick={() => this.onBack()}>&lt;</button>
                    <form onSubmit={(event) => this.onSubmit(event)}>
                        <div className="form-group">
                            <label>Product name</label>
                            <input className="form-control" value={txtName} type="text" onChange={(event) => this.onChange(event)} name="txtName" />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" name="txtPrice" value={txtPrice} onChange={(event) => this.onChange(event)} className="form-control" />
                        </div>
                        <div className="form-group">

                            <div className="checkbox">Enabled
                                <input checked={cbEnabled} name="cbEnabled" type="checkbox" onChange={(event) => this.onChange(event)} value={cbEnabled} />
                            </div>
                        </div>
                        <button className="btn btn-outline-primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: product => {
            dispatch(dispatchAddProduct(product))
        },
        updateProduct: (product) => {
            dispatch(dispatchUpdateProduct(product))
        },
        getProduct: id => {
            dispatch(dispatchFetchProduct(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormPage);