import React from 'react'
import './content.scss'

import StarRatings from 'react-star-ratings';


import icon1 from '../../resources/data_protection.png'
import icon2 from '../../resources/fraud_prevention.png'
import icon3 from '../../resources/it_security.png'
import icon4 from '../../resources/wphg.png'

//redux
import {connect} from 'react-redux'



const Content = ({redux_course}) => {
    const categoryIcons = {
        "Category 1": icon1,
        "Category 2": icon2,
        "Category 3": icon3,
        "Category 4": icon4
      };
    const categoryLists = {
        "Category 1": [],
        "Category 2": [],
        "Category 3": [],
        "Category 4": []
      };

      for (const course of redux_course) {
        categoryLists[course.category].push(course);
      }

      
      
  return (
    <div className='Content-con'>
        <div className="Content-con-title">
            e-learing Courses
        </div>

        {Object.entries(categoryLists).map(([category, courseList]) =>(
                
                <div className="Content-con-Main-courses" key={category}>

                    <div className="icon">
                        <img src={categoryIcons[category]} alt="" />
                    </div>
                    <div className="details" >
                    {courseList.map((course, index) => (        
                        <div className="" key={index}>
                            <div className="text"><div className='p'>{course.name}</div></div>
                            <div className="duration">
                                <div className="num">{course.duration} min</div>
                                <div className="text">To be done by :</div>
                            </div>

                            <div className="rating">
                                <div className="stare">
                                    <StarRatings
                                    rating={course.process}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    starDimension="12px"
                                    starSpacing="2px"
                                />
                                </div>
                                <div className="date">{course.endDate}</div>
                            </div>
                        </div>
                        
                    ))}
                </div>
                </div>
                ))}

       
    </div>
  )
}

const mapStateTOProps = (state) => ({
    redux_course: state.courses.courses,
    redux_categoryLists :state.courses.categoryLists
})

export default connect(mapStateTOProps)(Content)