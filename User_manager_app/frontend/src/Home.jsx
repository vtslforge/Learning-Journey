import React from 'react'
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
    <div className='flex rounded-3xl flex-col text-white box-border space-y-10'>
      <h1 className='text-6xl'>User Manager App</h1>
      <Link to={"/user-manager"}><p className='opacity-70 text-2xl hover:opacity-100 cursor-pointer hover:text-red-400'>Full-Time Employee</p></Link> 
      <p className='opacity-70 text-2xl hover:opacity-100 cursor-pointer hover:text-red-400'>Part-Time Employee</p>
      <p className='opacity-70 text-2xl hover:opacity-100 cursor-pointer hover:text-red-400'>Intern</p>
      <p className='opacity-70 text-2xl hover:opacity-100 cursor-pointer hover:text-red-400'>Contract Employee</p>
      <p className='opacity-70 text-2xl hover:opacity-100 cursor-pointer hover:text-red-400'>Remote Employee</p>
    </div>
    </div>
  )
}

export default Home
