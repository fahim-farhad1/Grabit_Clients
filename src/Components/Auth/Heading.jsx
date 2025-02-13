import React from 'react'

const Heading = ({heading, content}) => {
  return (
    <div className='mx-auto w-[350px]'>
      <p className='text-3xl text-secondary font-semibold text-center'>{heading}</p>
      <p className='text-center'>{content}</p>
    </div>
  )
}

export default Heading
