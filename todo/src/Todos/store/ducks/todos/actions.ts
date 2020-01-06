import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './../../../types';

export const loadRequest = () => action(TodosTypes.LOAD_REQUEST);
export const loadSuccess = (data: Todo[]) => action(TodosTypes.LOAD_SUCCCES, { data });
export const loadFailure = () => action(TodosTypes.LOAD_FAILURE);

export const createRequest = (todoDes: string | null) => action(TodosTypes.CREATE_REQUEST, { todoDes });
export const createSuccess = (todo: Todo) => action(TodosTypes.CREATE_SUCCCES, { todo });
export const createFailure = () => action(TodosTypes.CREATE_FAILURE);

export const removeRequest = (todoId: number) => action(TodosTypes.REMOVE_REQUEST, { todoId });
export const removeSuccess = (todoId: number) => action(TodosTypes.REMOVE_SUCCCES, { todoId });
export const removeFailure = () => action(TodosTypes.REMOVE_FAILURE);

export const updateRequest = (todo: Todo) => action(TodosTypes.UPDATE_REQUEST, { todo });
export const updateSuccess = (todo: Todo) => action(TodosTypes.UPDATE_SUCCCES, { todo });
export const updateFailure = () => action(TodosTypes.UPDATE_FAILURE);