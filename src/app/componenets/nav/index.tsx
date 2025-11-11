import React from 'react'
import Item from './item';

const NavBar=() => {
  return (
    <nav className='flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-200 items-end gap-2.5'>
        {/* Navigation bar content goes here */}
        {/* Logo */}
        <a href="/" className='text-5xl px-4 py-2 mr-auto text-slate-700 font-black font-sans uppercase 
        tracking-widest visited:text-slate-700 border-4 border-slate-700 shadow-lg 
        active:translate-y-0.5 
        transition-all duration-500 rounded'>Gallery</a>

        {/*<a href='/' className="inline-block text-lg text-slate-800 hover:text-white tracking-wide uppercase 
        relative group z-20 
        after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:bg-slate-800 after:w-full 
        after:h-px hover:after:h-9 after:-z-20 transition-all after:transition-all duration-100 active:translate-y-0.5 ">
            photo
        </a>*/}
        {navItems.map((item, i) => (
          <Item key={i} {...item} />
        ))}

    </nav>
  )
}

const navItems = [
  { label: 'Photo', url: '/?category=photo' },
  { label: 'Vector', url: '/?category=vector' },
];

export default NavBar