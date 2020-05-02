import { combineReducers } from 'redux';
import launches_reducer from './launches_reducer';
import launch_details_reducer from "./launch_details_reducer";
import rockets_reducer from "./rockets_reducer";

const rootReducer = combineReducers({
  launches_reducer,
  launch_details_reducer,
  rockets_reducer
});

export default rootReducer;