import { Reducer } from 'redux';
import { TodosState, TodosTypes, Todo } from './../../../types';

const INITIAL_STATE: TodosState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodosTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case TodosTypes.LOAD_SUCCCES:
            return { ...state, loading: false, error: false, data: action.payload.data, };
        case TodosTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [], };

        case TodosTypes.CREATE_REQUEST: {
            return { ...state, loading: true }
        };
        case TodosTypes.CREATE_SUCCCES:
            {
                return {
                    ...state,
                    loading: false,
                    error: false,
                    data: [
                        ...state.data,
                        action.payload.todo,
                    ],
                }
            };
        case TodosTypes.CREATE_FAILURE:
            return { ...state, loading: false, error: true, data: [], };

        case TodosTypes.REMOVE_REQUEST:
            return { ...state, loading: true };
        case TodosTypes.REMOVE_SUCCCES:
            return { ...state, loading: false, error: false, data: state.data.filter(todo => todo.id !== action.payload.todoId) };
        case TodosTypes.REMOVE_FAILURE:
            return { ...state, loading: false, error: true, data: [], };



        case TodosTypes.UPDATE_REQUEST:
            return { ...state, loading: true };
        case TodosTypes.UPDATE_SUCCCES:
            {
                console.log(state, action)
                return {
                    ...state,
                    loading: false,
                    error: false,
                    data: state.data.map(todo =>
                        todo.id === action.payload.todo.id ?
                            todo = action.payload.todo : todo
                    )
                };
            }
        case TodosTypes.UPDATE_FAILURE:
            return { ...state, loading: false, error: true, data: [], };


        default:
            return state;
    }
};

export default reducer;