import React, { useState } from "react";
import toast from "react-hot-toast";
import { update } from "../api/contact";
import { imageUpload } from "../api/Units";

export default function MyModal({handleOpen,data,refetch}) {
    const [Loading,setLoading]=useState(false)
     
    let img=data.ProfilePicture
    console.log(img)
    let bname="Update"
    const [n,setN]=useState("")
    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const Name = form.nam.value
        const Phone = form.phone.value
        const Address = form.address.value
        const Email = form.email.value
        const image =form.image.files[0]
        
        console.log(image)
        let Profile=img
        console.log(Profile)
        if(image != undefined){
            const image_url = await imageUpload(image)
             Profile=image_url?.data?.display_url
             console.log(Profile)
            // console.log(image)
            // Profile=image
        }
      //  const ProfilePicture = "data.img"
     

        const contactData = {
          Name,Phone,Address,Email,
          image:Profile ,
        }
        console.log(contactData)
        toast.success("Image Updloaded Successfully")

        try {
            const dat = await update(data._id,contactData)
            console.log(dat)
            refetch()
            bname="Updated!"
            toast.success('Contact Updated Succesfully!')
           // navigate('/dashboard/my-listings')
          } catch (err) {
            console.log(err)
            toast.error(err.message)
          } finally {
            setLoading(false)
          }
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10">
      <div className="bg-white p-2 rounded w-[80%] md:w-[65%]">
        <h1 className="font-semibold text-center text-xl text-gray-700">
         Update Form
        </h1>
        <div>
      <div className='w-full  min-h-[calc(100vh-120px)]  overflow-y-scroll  px-10 py-4 text-gray-800 rounded-xl bg-gray-50'>
      <form className=''
      onSubmit={handleSubmit}
    >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6  w-full'>
          <div className='space-y-2 w-full'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
              defaultValue={data.Name}
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
                defaultValue={data.Email}
                id='name'
                type='email'
                placeholder='Email'
                required
              />
            </div>

            

           
          </div>
          <di v className='space-y-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='phone' className='block text-gray-600'>
                Phone Number
              </label>
              <input
                className='w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md '
                name='phone'
                defaultValue={data.Phone}
                id='phone'
                type='number/tel'
                placeholder='Phone'
                required
              />
            </div>

            
           
             

              <div className='space-y-2 text-sm'>
                <label htmlFor='address' className='block text-gray-600'>
                  Address
                </label>
                <input
                  className='w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='address'
                  defaultValue={data.Address}
                  id='address'
                  type='text'
                  placeholder='Address'
                  required
                />
              </div>
           
            </di>

            
          </div>
        
          <div className=' px-4 py-1 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-1 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col mx-auto text-center '>
                  <label>
                    Running Image
                   
                    
                  </label>
                  <div className="w-[40%] mx-auto  h-auto border-2 border-red-500">
                    <img className="object-cover  mx-auto " src={img} alt="" />
                    </div>
                </div>
              </div>
            </div>
        <div className=' px-4 py-1 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5  relative border-4 border-dotted border-gray-300 rounded-lg'>
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
            

<div>
    
</div>
        <button
          type='submit'
          className={`w-full p-3 mt-5 text-center font-medium text-white transition duration-200 anima  rounded shadow-md bg-rose-500 ${Loading && "animate-bounce"} `}
        >
        {bname}
        </button>
        </form>
        </div>
        <div className="text-center">
          <button onClick={()=>handleOpen(false)} className="px-5 py-2 bg-gray-700 text-white rounded">
           close
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}