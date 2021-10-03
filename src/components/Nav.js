import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const navBar = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Products",
        to: "/products",
        exact: false
    },
]

class Nav extends Component {

    handleNav = navBar => {
        let result = null;
        if (navBar.length > 0) {
            result = navBar.map((item, index) => {
                return (
                    <NavLink className="nav-item nav-link" activeClassName="selected" key={index} to={item.to} exact={item.exact}>{item.name}</NavLink>
                )
            })
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {this.handleNav(navBar)}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;