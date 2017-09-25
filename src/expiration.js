/**
 * Created by xupan on 2017/9/25.
 */
import React from 'react'

export default class Expiration extends React.Component {
    constructor() {
        super();

        this.state = {time: 200};
    }

    componentDidMount() {
        this.timer = setInterval(()=>this.tick(), 1000);
    }

    tick() {
        this.setState((prevState, props)=>({
            time: prevState.time - props.decrement
        }));
    }
    render() {
        return (
            <div>
                <p>you have {this.state.time} left.</p>
            </div>
        );
    }
}


