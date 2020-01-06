import React from 'react';
import { Link } from 'react-router-dom';

import { NavLinkType } from './../types';

const NavLink = ({ href, text }: NavLinkType) => (
    <li className="nav-item">
        <Link className="nav-link" to={href}>{text}</Link>
    </li>
);


interface Props {
    links: NavLinkType[]
}
const NavBar = (props: Props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <ul className="navbar-nav mr-auto">
            {props.links.map(({ href, text }: { href: string, text: string }, i: number) => (
                <NavLink key={i} href={href} text={text} />
            ))}
        </ul>
    </nav>
);

export default NavBar;
