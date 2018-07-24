import React from 'react';
import * as actions from '../store/action/Actions';
import { connect } from 'react-redux';
import DivCmp1 from './div1';
import DivCmp2 from './div2';

class MainCmp extends React.Component{
  render(){
    return(
      <div>
        <DivCmp1/>
        <hr/>
        以上是div1，读取redux数据<br/>
        以下是div2，修改redux数据
        <hr/>
        <DivCmp2/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainCmp);