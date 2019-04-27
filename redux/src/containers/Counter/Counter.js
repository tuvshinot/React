import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstractCounter( 5 )}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(res => {
                        return <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr:state.ctr.counter,
        storedResult:state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch(actionCreators.increment()),
        onDecrementCounter : () => dispatch(actionCreators.decrement()),
        onAddCounter : (num) => dispatch(actionCreators.add(num)),
        onSubstractCounter : (num) => dispatch(actionCreators.substruct(num)),
        onStoreResult : (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult : (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);