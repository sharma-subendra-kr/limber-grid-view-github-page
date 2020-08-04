import { combineReducers } from "redux";

import { homeReducer } from "../pages/home/ducks";

const reducer = combineReducers({
  // exampleReducer
  homeReducer,
});

export default reducer;
