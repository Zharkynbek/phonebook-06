import { createStore } from "redux"
import {reducer} from "./phonebookReducer"



export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

