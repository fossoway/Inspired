import { NavLink, useLocation } from 'react-router-dom'
import s from './Gender.module.scss'
import cn from 'classnames'


export const Gender = ({ list }) => {
    const locarion = useLocation();
    const gender = location.pathname.split('/')[1] || 'woman';

    return (
        <ul className={s.gender}>
            {list.map(item => (
                <li key={item.link} className={s.item}>
                    <NavLink 
                        className={({ isActive }) =>
                            cn(s.link, (isActive || gender === item.link) && s.linkActive)}
                            to={item.link}
                    >
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}