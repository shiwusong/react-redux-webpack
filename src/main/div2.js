import React from 'react';
import {deepCopy} from '../utils';
import * as actions from '../store/action/Actions';
import { connect } from 'react-redux';

class DivCmp2 extends React.Component{

  change(){

    let orderStory = deepCopy(this.props.orderStory);
    orderStory.id = 1;
    orderStory.name = '改完名字了';
    this.props.onSetOrder({orderStory:orderStory});
  }
  render(){
    return(
      <div>
        <h1>div2</h1>
        <p>点击按钮，修改数据</p>
        <button onClick={()=>this.change()}>修改</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DivCmp2);