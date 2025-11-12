import React from 'react'
import Card from './Card'
import { data } from '@/lib/db'

const Gallery = () => {
  return (
    <div className='pt-10 grid-cols-3 gap-6 grid justify-items-center'>
        {data.map((img) => (
            <Card key={img.id} {...img}/>
        ))}
    </div>
  )
}

export default Gallery