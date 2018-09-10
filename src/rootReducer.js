import { combineReducers } from "redux";

import user from "./reducers/user";
import destinations from "./reducers/destination";

export default combineReducers({
  user,
  destinations
});
