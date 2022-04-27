import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer, productInitialState } from './reducer';


const store = createStore((state, action) => productReducer(state,action),
  productInitialState,
  composeWithDevTools(applyMiddleware(thunk)));
export default store;
