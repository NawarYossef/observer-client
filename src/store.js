import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/reducer';

 const store = createStore(
	combineReducers({
			reducer: reducer
	}),
	applyMiddleware(thunk)
);

export default store
