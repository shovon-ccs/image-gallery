import React, { FC } from 'react'
import Image from 'next/image'
import {SaveIcon} from '../icons'


const Card:FC<IImage> = (props) => {
    const {id, name, src, category, likes, shares} = props;
    
  return (
    <figure className='w-fit relative group overflow-hidden rounded'>
        <Image
        src={src}
        alt={name}
        width={400}
        height={400}
        className="w-full h-auto max-w-md group-hover:scale-105 transition-all duration-200"
      />
      <figcaption className='w-full absolute bottom-0 left-0 p-3 bg-slate-900/30 text-white flex justify-between items-center
       gap-1.5 invisible group-hover:bottom-0 group-hover:visible transition-all duration-200'>
        <div className='space-y-2'>
            <p className='text-lg font-semibold'>{name}</p>
            <p className='text-sm'>{likes} likes | {shares} shares</p>
        </div>
        <button className='cursor-pointer'> 
            <SaveIcon />
        </button>
      </figcaption>
    </figure>
  )
}

export default Card