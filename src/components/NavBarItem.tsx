
import { ReactNode, LinkHTMLAttributes  } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBarItem.module.css'

export interface NavBarItemType extends LinkHTMLAttributes<HTMLAnchorElement> {
    title: string;
    icon: ReactNode;
    href: string;
}

export function NavBarItem({href,title, icon}: NavBarItemType) {

    return (
        <NavLink to={href} className={({ isActive }) =>
            isActive
                ? styles.active
                : styles.inactive
        }>
            {icon}
            <p>{title}</p>
        </NavLink>
        
    )
}