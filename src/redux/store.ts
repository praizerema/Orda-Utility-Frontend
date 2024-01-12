// configureStore.ts
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bidReducer from '../reducers/bidReducer';

const rootReducer = combineReducers({
  bid: bidReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;