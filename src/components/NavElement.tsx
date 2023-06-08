import React from 'react';
import '../navbar.scss'
import { Link } from "react-router-dom";

type Props = {
    className?: string,
    name: string,
    iconUrl: string,
    link?: string
}

const NavElement: React.FC<Props> = (props) => {
    return (
        props.link ?
            <Link to={props.link} className='nav-element'>
            <p className='nav-element-name'>{props.name}</p>
            <span className={props.iconUrl}/>
        </Link> :
            <div className='nav-element'>
            <p className='nav-element-name'>{props.name}</p>
            <span className={props.iconUrl}/>
        </div>

    )
}

export default NavElement;