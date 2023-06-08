import React from 'react';
import NavElement from './NavElement'
import '../navbar.scss'


type Props = {
    className?: string
}

interface navElement {
    name: string;
    iconUrl: string;
    link?: string | undefined
}

const navElements: navElement[] = [
    {name: 'Главная', iconUrl: 'main', link: '/'},
    {name: 'Поиск адресов', iconUrl: 'address', link: 'address'},
    {name: 'Таблицы', iconUrl: 'table'},
    {name: 'Календарь', iconUrl: 'calendar'},
    {name: 'Карты', iconUrl: 'maps'},
    {name: 'Виджеты', iconUrl: 'widgets'},
    {name: 'Настройки', iconUrl: 'settings'},
    {name: 'Выход', iconUrl: 'exit'}
]

// The error above is known error regarding multiple JSX elements returns in TS
// @ts-ignore
const NavSection: React.FC<Props> = (props) => {
    return (
        <div className = 'section-container'>
            <p className = 'menu'>Меню</p>
            {navElements.map(element => {
                return <NavElement name={element.name} iconUrl={element.iconUrl} link={element.link}/>
            })}
        </div>
    );
}

export default NavSection;