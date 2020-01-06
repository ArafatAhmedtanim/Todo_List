import { all, takeLatest } from 'redux-saga/effects';

import { TodosTypes } from './../Todos/types';

import { load, create, remove, update } from './../Todos/store/ducks/todos/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(TodosTypes.LOAD_REQUEST, load),
        takeLatest(TodosTypes.CREATE_REQUEST, create),
        takeLatest(TodosTypes.REMOVE_REQUEST, remove),
        takeLatest(TodosTypes.UPDATE_REQUEST, update)
    ]);
}