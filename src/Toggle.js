/**
 * Created by xupan on 2017/9/25.
 */
import React from 'react'

export default class Toggle extends React.Component {
    constructor() {
        super();

        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState)=>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
        );
    }
}

// 事件绑定通常有三种方法：
/**
 * bind
 *
 * property initializer syntax
 *
 * arrow function
 */