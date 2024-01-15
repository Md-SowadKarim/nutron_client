import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'
import { useQuery } from '@tanstack/react-query'
import { getAllContact } from './../api/contact';

const AllContact = () => {
  const { data: datas = [], refetch } = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => await getAllContact(),
  })
 //const datas=useLoaderData()
 console.log(datas)


  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 relative'>
      {datas.map((data,idx)=><Card  key={idx} data={data} refetch={refetch}/>)}

      
    </div>
  )
}

export default AllContact

