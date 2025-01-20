import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'
import styles from '../style'
const Testimonials = () =>  (
    <section id="clients" className={` py-6 sm:py-16 ${styles.flexCenter} flex-col relative `}  >
      {/* Gradient Div */}
      <div className={` w-[60%] h-[60%] -right-[50%] absolute rounded-full z-[0] blue__gradient `} />
<div className={` w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]  `} > 
<h1 className={`${styles.heading2}`}>What people are <br className="sm:block hidden" /> saying about us</h1>
<div className='w-full md:mt-0 mt-6 '>
<p className={`${styles.paragraph} text-left max-w-[450px] `} >Everything you need to accept card payments and grow your business anywhere on the planet.112</p>

</div>

  </div> 
  <div  className=' w-full flex sm:justify-start justify-center  flex-wrap relative z-[1] feedback-container ' >
    {feedback.map((card)=>(
    <FeedbackCard key={card.id} {...card} />
    ))}
    </div>     
    </section>
  )


export default Testimonials
