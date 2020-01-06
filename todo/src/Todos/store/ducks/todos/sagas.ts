import { call, put } from 'redux-saga/effects';
import api from '../../../../services/api';

import {
    loadSuccess,
    loadFailure,
    createSuccess,
    createFailure,
    removeSuccess,
    removeFailure,
    updateSuccess,
    updateFailure
} from './actions';

export function* load() {
    try {
        const response = yield call(api.get, `/todos/`);
        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}

export function* create(action: any) {
    try {
        const response = yield call(
            api.post, `/todos/`, { des: action.payload.todoDes }
        );
        yield put(createSuccess(response.data))
    } catch (err) {
        yield put(createFailure())
    }
}

export function* remove(action: any) {
    try {
        const response = yield call(
            api.delete, `/todos/${action.payload.todoId}`
        );
        yield put(removeSuccess(action.payload.todoId))
    } catch (err) {
        yield put(removeFailure())
    }
}

export function* update(action: any) {
    try {
        const response = yield call(
            api.put, `/todos/${action.payload.todo.id}`, { ...action.payload.todo, status: !action.payload.todo.status }
        );
        yield put(updateSuccess(response.data))
    } catch (err) {
        yield put(updateFailure())
    }
}