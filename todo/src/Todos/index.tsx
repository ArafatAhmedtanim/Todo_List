import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Todo } from './types';
import { ApplicationState } from '../App/store';

import Dictaphone from './components/Dictaphone';

import * as TodosActions from './store/ducks/todos/actions';

interface State {
    todos: Todo[]
}

interface DispatchProps {
    loadRequest(): void
    createRequest(todoDes: string | null): void
    removeRequest(todoId: number): void
    updateRequest(todo: Todo): void
}

type Props = State & DispatchProps

const mapStateToProps = (state: ApplicationState) => {
    return {
        todos: state.todos.data,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TodosActions, dispatch);

class Todos extends Component<Props>{
    state = {
        des: null
    }
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    handleDes = (des: string) => {
        this.setState({ des: des })
    }

    render() {
        const { todos, createRequest, removeRequest, updateRequest } = this.props
        return (<div className="main">
            <div className="card">
                <div className="card-body">
                    <ul className="list-group todo-list">
                        {todos.length && todos.map((item, index) =>
                            <li
                                className={
                                    item.status ?
                                        "list-group-item list-group-item-success done"
                                        : "list-group-item list-group-item-danger todo"
                                }
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}


                            >
                                <span onClick={() => updateRequest(item)}>{item.des}</span>

                                <button
                                    type="button"
                                    className="btn btn-danger button-remove"

                                    onClick={() => removeRequest(item.id)}
                                >
                                    X
                                </button>
                            </li>)}
                    </ul>
                </div>
            </div>


            <nav className="navbar fixed-bottom navbar-light bg-light">
                {/* <Dictaphone handleDes={this.handleDes}/> */}
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add New Task"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"

                        value={this.state.des || ''}

                        onChange={(e) => this.setState({ des: e.target.value })}
                    />
                    {this.state.des ?
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"

                                onClick={() => {
                                    createRequest(this.state.des)
                                    this.setState({ des: null })
                                }}
                            >
                                Add
                        </button>
                        </div> : null
                    }
                </div>
            </nav>
        </div>)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);