/**
 * Created by xupan on 2017/9/25.
 */
import React from 'react'

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

// Constructor() -> render() -> componentDidMount() -> this.setState() to update Render
// The only place where you can assign this.state is the constructor.

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleString()}</h2>
}