import React, { useState } from 'react'
import './sidebar.scss'

import icon1 from '../../resources/data_protection.png'
import icon2 from '../../resources/fraud_prevention.png'
import icon3 from '../../resources/it_security.png'
import icon4 from '../../resources/wphg.png'



const Sidebar = () => {

    const [Courses, setCourses] = useState([
        {
            title:'Money Laundering and Fraud Preventing',
            icon:icon1
        },
        {
            title:'IT security and information security',
            icon:icon2
        },
        {
            title:'Data Protection',
            icon:icon3
        },
        {
            title:'WpHG-Compliance',
            icon:icon4
        },
    ])


    const [Contact, setContact] = useState([
        {
            title:'Technical support ',
            name:'John 1',
            email:'John@Gmail.com'
        },

        {
            title:'Content-didactic Topic',
            name:'John 2',
            email:'John2@gmail.com'
        },
    ])

    return (
    <div className='sidebar-con'>

        <div className="title">
            <p>navigation</p>
        </div>
        
        <div className="courses-icons-with-titles">

            {Courses.map((item,index)=>(
                <div className="course-box" key={index}>
                    <div className="course-icon">
                        <img src={item.icon} alt="" />
                    </div>
                    <div className="course-title">{item.title}</div>
                    
                </div>
            ) )}

            

        </div>


        <div className="contactt">
                <div className="contact-header">
                    <p>Contact</p>
                </div>

                <div className="contact-info">
                    {Contact.map((item,index) => (
                        <div className="contact-user" key={index}>
                            <div className="contact-title">{item.title}</div>
                            <div className="contact-name">{item.name}</div>
                            <div className="contact-email">{item.email}</div>
                        </div>
                    ))}
                    
                </div>
        </div>

    </div>
  )
}

export default Sidebar