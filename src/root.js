import React from 'react';
import ReactDOM from 'react-dom';
import JCookie from '../static/js/jquery.cookie.js';
import {HashRouter, Route, Switch} from 'react-router-dom';
import MainCmp from './main/main';
/// redux
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import orderReducer from './store/reducer/orderReducer'

const rootReducer = combineReducers({
  orderReducer:orderReducer
})
const store = createStore(rootReducer);
export default  class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={MainCmp}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<Root/> ,document.getElementById('mainContainer'));