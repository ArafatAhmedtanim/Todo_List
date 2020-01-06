import Todos from '../Todos';

import { RouteType } from './types'

const routes: RouteType[] = [
    {
        name: 'todos',
        path: '/',
        component: Todos,
        exact: true,

        type: 'global'
    }
];

function routePath(name: string, args: any = null) {
    let route = routes.find(route => route.name === name);

    if (route === undefined) return '';
    if (args === null) return route.path;

    return Object.keys(args).reduce(
        (path, arg) => path.replace(':' + arg, args[arg]),
        route.path
    );
}

export default routes;
export { routePath };