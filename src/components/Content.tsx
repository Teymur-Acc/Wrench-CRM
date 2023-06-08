import React from 'react';
import '../content.scss'
import Routes from "../routes";

type Props = {
    className?: string
}

const Content: React.FC<Props> = (props) => {
  return (
      <div className = 'content-container'>
          <Routes/>
      </div>
  )
}

export default Content;