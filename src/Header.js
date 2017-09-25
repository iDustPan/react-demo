/**
 * Created by xupan on 2017/9/24.
 */
import React from 'react'


const nav = ['Home', 'Discovery', 'Brand', 'About'];

class NavItem extends React.Component {
    render() {
        return (
            <li className="nav-li">{nav[this.props.index]}</li>
        );
    }
}

export default class Header extends React.Component {

    constructor() {
        super();
    }

    renderNavItem(i) {
        return <NavItem index={i}/>
    }


    render() {
        return (
            <div>
                <ul className="nav">
                    {this.renderNavItem(0)}
                    {this.renderNavItem(1)}
                    {this.renderNavItem(2)}
                    {this.renderNavItem(3)}
                </ul>
            </div>
        );
    }
}

