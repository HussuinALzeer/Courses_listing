import React from 'react'

import './breadcrumb.scss'

import {BsChevronRight} from 'react-icons/bs'

const Breadcrumb = () => {
  return (
    <div className='Breadcrumb-Con'>
        <div className="links">
            <div className="link1">Home Page</div>
            <div className="icon"><BsChevronRight/></div>
            <div className="link2">e-learning Course</div>
        </div>
        <div className="user">
            <div className="use-box">admin</div>
        </div>
    </div>
  )
}

export default Breadcrumb