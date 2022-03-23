import React from 'react'
import "./LittleDetails.scss"

const LittleDetails = () => {
  return (
   <div className="lilDetails__container">
       <div className="heading">
           UAE, KSA & OMAN
       </div>
       <div className="details">
       Emirates Business Group was established in 2001 with a focus on key emerging sectors and to seek global opportunities that generate positive results for the local economy, environment and society. As a strategic investor in new industries and markets, EBG has developed partnerships with noteworthy global companies that are synonymous with EBG's vision, goals and values. Over the past decade, EBG has acquired significant milestones in expanding and growing its portfolio of investments in the region.
       </div>

       <div className="employ">
           18,000+ <br /><span>EMPLOYEES</span>
       </div>

       <hr className="detils__he" />

       <div className="quote__heading">Chairmain's Quote</div>

       <div className="quote">
       “Perseverance, motivation, and hard work are the three key elements that drive a company’s success to its maximum potential. Without such powerful fundamentals, you can never reach wherever you set to be.”
       </div> 
       <div className="poet quote__heading">
       - Abdul Jalil Al Blooki -
       </div>
   </div>
  )
}

export default LittleDetails