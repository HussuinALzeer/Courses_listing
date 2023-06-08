import React from 'react'
import './body.scss'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'

const Body = () => {
  return (
    <div className='main-bodyCon'>
        <Breadcrumb/>


          <div className="content">
            <div className="sidebar">
              <Sidebar/>
            </div> 

            <div className="courses-side">
              <Content/>
            </div>
          </div>

          
    </div>
  )
}

export default Body