import React from 'react'
import NavBar from './componenets/nav/index'

const HomePage = () => {
  return (
    <main className='flex justify-center items-center min-h-screen bg-sky-200'>
      <div className='w-full max-w-7xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg'>
        <NavBar />
        <h1 className='text-green-500 text-5xl font-bold'>Home Page</h1>
      </div>
      
    </main>
  )
}

export default HomePage
