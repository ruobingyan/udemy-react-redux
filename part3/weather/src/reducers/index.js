import { combineReducers } from 'redux';
import WEatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WEatherReducer 
});

export default rootReducer;
