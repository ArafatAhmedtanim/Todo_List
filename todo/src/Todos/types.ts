export enum TodosTypes {
    LOAD_REQUEST = '@todos/LOAD_REQUEST',
    LOAD_SUCCCES = '@todos/LOAD_SUCCCES',
    LOAD_FAILURE = '@todos/LOAD_FAILURE',

    CREATE_REQUEST = '@todos/CREATE_REQUEST',
    CREATE_SUCCCES = '@todos/CREATE_SUCCCES',
    CREATE_FAILURE = '@todos/CREATE_FAILURE',

    REMOVE_REQUEST = '@todos/REMOVE_REQUEST',
    REMOVE_SUCCCES = '@todos/REMOVE_SUCCCES',
    REMOVE_FAILURE = '@todos/REMOVE_FAILURE',

    UPDATE_REQUEST = '@todos/UPDATE_REQUEST',
    UPDATE_SUCCCES = '@todos/UPDATE_SUCCCES',
    UPDATE_FAILURE = '@todos/UPDATE_FAILURE',
}

export interface Todo {
    id: number
    des: string
    status: boolean,
    created: Date,
    modified: Date

}

export interface TodosState {
    readonly data: Todo[]
    readonly loading: boolean
    readonly error: boolean
}