import { History } from "history";
import { combineReducers } from 'redux';
import { RouterState } from 'react-router-redux'
import todos from './../Todos/store/ducks/todos';

import { TodosState } from './../Todos/types'
import { connectRouter } from "connected-react-router";

export interface RootState {
    todos: TodosState,
    routerReducer: RouterState,
}

export default (history: History) => combineReducers({
    todos,
    router: connectRouter(history)
});