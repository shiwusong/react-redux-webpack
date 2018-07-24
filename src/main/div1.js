import React from 'react';
import * as actions from '../store/action/Actions';
import { connect } from 'react-redux';

class DivCmp1 extends React.Component{
  render(){
    return(
      <div>
        <h1>div1</h1>
        <p>id:{this.props.orderStory.id}</p>
        <p>name:{this.props.orderStory.name}</p>
      </div>
    )
  }
}
const mapStateToProps = state => {
	return {
    orderStory:state.orderReducer.orderStory,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSetOrder: (newState) => dispatch(actions.orderAction(newState))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DivCmp1);