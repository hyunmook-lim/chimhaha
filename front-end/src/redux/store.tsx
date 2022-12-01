import { createStore, combineReducers } from "redux";
import PoksoPageNumReducer from "./reducers/pokso_page_reducer";
import LoginReducer from "./reducers/login_reducer";

const reducers = combineReducers({
  pokso_page_num: PoksoPageNumReducer,
  login_info: LoginReducer,
});

const store = createStore(reducers);

export default store;
