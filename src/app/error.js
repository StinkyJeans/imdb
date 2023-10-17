"use client";

import React from 'react'

export default function error({error, reset}) {
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong</h1>
        <button className='hover:text-amber-600' onClick={()=> reset()}>try Again</button>
    </div>
  )
}
