import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            style={({ isActive }) => ({color: isActive ? 'red' : 'blue',})}
                            to={route.to}
                            end // el end se añade para que home no cuente siempre como activa
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const routes = [];
routes.push({
    to: '/',
    text: 'Home',
});
routes.push({
    to: '/blog',
    text: 'Blog',
});
routes.push({
    to: '/profile',
    text: 'Profile',
});
routes.push({
    to: '/login',
    text: 'Login',
});
routes.push({
    to: '/logout',
    text: 'Logout',
});

export { Menu };