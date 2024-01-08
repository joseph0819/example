import React from 'react'
import AppNav from './AppNav'
import Hero from './Hero'

const Header = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
        <AppNav/>
        <Hero/>
    </div>
    </>
  )
}

export default Header