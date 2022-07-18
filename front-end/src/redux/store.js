import { createStore, combineReducers } from "redux";
import { PoksoPageNum } from "./reducers/pokso_page_reducer";

const reducers = combineReducers({ pokso_page_num: PoksoPageNum });

const store = createStore(reducers);

export default store;
