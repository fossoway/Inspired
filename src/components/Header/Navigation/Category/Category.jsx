import { NavLink, useLocation } from "react-router-dom";
import s from './Category.module.scss'
import cn from "classnames";

const list = [
    {link: 'bras', title: 'Бюстгальтеры'},
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
    {link: 'pijamas', title: 'Пижамы'},
];

export const Category = ({ list }) => {
    const location = useLocation();
    const gender = location.pathname.split('/')[1] || 'woman';

    const categoriesList = list.find(item => item.link === gender)

    return (
        <ul className={s.category}>
            {categoriesList.categories.map((item) => (
                <li key={item.link} className={s.item}>
                    <NavLink
                        className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                        to={`${gender}/${item.link}`}
                    >
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}