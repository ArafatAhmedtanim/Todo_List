export type RouteType = {
    name: string,
    path: string,
    component: React.ComponentType<any>;
    exact: boolean,

    type: string
}

export type NavLinkType = { text: string, href: string }