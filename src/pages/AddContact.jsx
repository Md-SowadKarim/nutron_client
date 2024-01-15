import React, { useState } from 'react'
import { imageUpload } from './../api/Units';
import toast from 'react-hot-toast';
import { addContact } from '../api/contact';

const AddContact = () => {
    const [Loading,setLoading]=useState(false)
    let bname="Upload"
    const [n,setN]=useState("")
    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const Name = form.nam.value
        const Phone = form.phone.value
        const Address = form.address.value
        const Email = form.email.value
       // const image = form.image.files[0] 
        const ProfilePicture = "data.img"
       // const image_url = await imageUpload(image)
    
        const contactData = {
          Name,Phone,Address,Email,ProfilePicture
        //  image: image_url?.data?.display_url,
        }
        console.log(contactData)
        toast.success("added")

        try {
            const data = await addContact(contactData)
            console.log(data)
            bname="Uploaded!"
            toast.success('Contact Added!')
           // navigate('/dashboard/my-listings')
          } catch (err) {
            console.log(err)
            toast.error(err.message)
          } finally {
            setLoading(false)
          }
    }
  return (
    <div>
      <div className='w-full  min-h-[calc(100vh-40px)] p-10 text-gray-800 rounded-xl bg-gray-50'>
      <form className=''
      onSubmit={handleSubmit}
    >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  w-full'>
          <div className='space-y-6 w-full'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-white  border-rose-300 focus:outline-rose-500 rounded-md '
                name='nam'
                id='name'
                type='text'
                placeholder='Name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md '
                name='email'
                id='name'
                type='email'
                placeholder='Email'
                required
              />
            </div>

            

           
          </div>
          <di v className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='phone' className='block text-gray-600'>
                Phone Number
              </label>
              <input
                className='w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md '
                name='phone'
                id='phone'
                type='number'
                placeholder='Phone'
                required
              />
            </div>

            
           
             

              <div className='space-y-1 text-sm'>
                <label htmlFor='address' className='block text-gray-600'>
                  Address
                </label>
                <input
                  className='w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='address'
                  id='address'
                  type='text'
                  placeholder='Address'
                  required
                />
              </div>
           
            </di>

            
          </div>
        
        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    Image Only
                    <input
                       onChange={e => setN(e.target.files[0].name)}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                     {
                        n ==""? "Upload" : n
                     }
                    </div>
                  </label>
                </div>
              </div>
            </div>

        <button
          type='submit'
          className={`w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500 ${Loading && "text-red-500"}`}
        >
        {bname}
        </button>
      </form>
    </div>
    </div>
  )
}

export default AddContact
