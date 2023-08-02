import React from 'react'
import './program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

function Program() {
  return (
    <>
    <div className="program" id="program">
        {/* HEADER */}
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* PROGRAM CATEGORIES */}
        <div className="program-category">
            {
               programsData.map((programs)=>(
                <div className="category">
                        {programs.image}
                        <span>{programs.heading}</span><span>{programs.details}</span>
                        <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                    </div>
                    
               ))
            }
        </div>
    </div>
    </>
  )
}

export default Program