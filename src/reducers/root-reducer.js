import { combineReducers } from 'redux';
import FetchHouseReducer from './FetchHouseReducer';

const rootReducer = combineReducers({
  houses: FetchHouseReducer
});


export default rootReducer;
