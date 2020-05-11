import { combineReducers } from 'redux';
import launches_latest_reducer from './launches_latest_reducer';
import launches_upcoming_reducer from "./launches_upcoming_reducer";
import launches_past_reducer from "./launches_past_reducer";
import launch_details_reducer from "./launch_details_reducer";
import rockets_reducer from "./rockets_reducer";
import roadster_reducer from "./roadster_reducer";

const rootReducer = combineReducers({
  launches_latest_reducer,
  launches_upcoming_reducer,
  launches_past_reducer,
  launch_details_reducer,
  rockets_reducer,
  roadster_reducer
});

export default rootReducer;