import React from 'react';
import { Provider } from 'react-redux';

import store, { history } from './store';
import Router from './components/Router';
import NavBar from './components/NavBar';

import routes, { routePath } from './routes';

import './../style.css';

const navLinks = [
    { text: 'Todo List', href: routePath('todos') }
];

const App = () =>
    <Provider store={store}>
        <Router
            routes={routes}
            history={history}
        >
            <NavBar links={navLinks} />
        </Router>
    </Provider>

export default App;
