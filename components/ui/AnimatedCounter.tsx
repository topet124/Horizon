'use client';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
          <CountUp
              duration={2.55}
              decimals ={2.755}
              decimal=','
              prefix='€'
              end={amount}
          />
    </div>
  )
}

export default AnimatedCounter
