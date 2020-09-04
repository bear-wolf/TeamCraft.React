import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    addOne = () => {
        this.props.dispatch({ type: 'ADD_ONE' });
    }

    minusOne = () => {
        this.props.dispatch({ type: 'MINUS_ONE' });
    }

    render() {
        return (
            <div className={'d-flex'}>
                <h1>counter = {this.props.counter}</h1>
                <div>
                    <button onClick={this.minusOne} className={'btn'} type="button">-</button>
                    <button onClick={this.addOne} className={'btn'} type="button">+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
}

export default connect(mapStateToProps)(Counter);