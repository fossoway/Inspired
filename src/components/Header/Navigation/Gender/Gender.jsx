import s from './Gender.module.scss'

const list = [
    {link: 'woman', title: 'Женщины'},
    {link: 'man', title: 'Мужчины'},
]

export const Gender = () => {
    return (
        <ul className={s.gender}>
            {list.map(item => (
                <li key={item.link} className={s.item}>
                    <a className={s.link} href={item.link}>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}