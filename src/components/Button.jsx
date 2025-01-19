import React from 'react'

const Button = ({styles}) => {
  
  return (
    <button type='button' className={`bg-blue-gradient outline-none ${styles} text-primary  py-4 px-6 text-[18px] font-medium font-poppins rounded-xl `}>
Get Started
    </button>
  )
}

export default Button
