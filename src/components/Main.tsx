import React from 'react';
import NavSection from './NavSection';
import Content from './Content';
import '../main.scss';

type Props = {
    className?: string
}

const Main: React.FC<Props> = (props) => {
 return (
     <div className = 'container'>
         <NavSection/>
         <Content/>
     </div>
 )
}

export default Main;