import React, { FC } from 'react'

type  TItemProps = {label: string, url: string};

const Item:FC<TItemProps> = ({label, url}) =>{
  return (
    <a href={url} className="inline-block text-lg text-slate-800 hover:text-white tracking-wide uppercase 
    relative group z-20 
    after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:bg-slate-800 after:w-full 
    after:h-px hover:after:h-9 after:-z-20 transition-all after:transition-all duration-100 active:translate-y-0.5 ">
        {label}
    </a>
  )
}

export default Item