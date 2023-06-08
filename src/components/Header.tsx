import React from 'react';
import '../header.scss'

type Props = {
    className?: string
}

const Header: React.FC<Props> = (props) => {
    return (
        <div className="header">
            <div className='header-left'>
                <span className='header-left-icon'/>
                <span className='header-left-title'>Wrench CRM</span>
            </div>
            <div className='header-right'>
                <span className='header-right-icon'/>
                <span className='header-right-name'>Имя Фамилия</span>
            </div>
        </div>
    )
};

export default Header;