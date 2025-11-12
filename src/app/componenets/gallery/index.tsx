"use client"
import React, {useState, useEffect} from 'react'
import Card from './Card'
import { data } from '@/lib/db'
import { useSearchParams } from 'next/navigation'

const Gallery = () => {
    const params = useSearchParams();
    
    const [mounted, setMounted] = useState(false);
    // wait until component has mounted on client
    useEffect(() => setMounted(true), []);
    if (!mounted) return null; // ⛔ skip SSR mismatches
    
    const category = params.get("category");
    const search = params.get("search");

    /*const images = data.filter((item) => {
        return (
            category ? item.category === category : true 
            //||search ? item.name.toLocaleLowerCase().includes(search ? search.toLocaleLowerCase():"") : true
        )
    });*/
    const images = data.filter((item) => {
        const matchCategory = category ? item.category === category : true;
        const matchSearch = search
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : true;
        return matchCategory && matchSearch;
    });


  return (
    <div className='pt-10 grid-cols-3 gap-6 grid justify-items-center'>
        {images.map((img) => (
            <Card key={img.id} {...img}/>
        ))}
    </div>
  )
}

export default Gallery