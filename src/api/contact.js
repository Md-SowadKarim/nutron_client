// Save a contact data in db
import axiosSecure from './index';
export const addContact = async contactData => {
    const { data } = await axiosSecure.post(`/add`, contactData)
    return data
  }

// update contact
export const update = async (id, updateContact) => {
    console.log(updateContact)
    const { data } = await axiosSecure.put(`/update/${id}`, updateContact)
    return data
  }
// updateFav contact
export const favourite = async (id,status) => {
    console.log(status,id)
    const { data } = await axiosSecure.patch(`/fav/${id}`, {status})
    return data
  }
// get All contact
export const getAllContact = async () => {
    const { data } = await axiosSecure("/all")
    return data
  }
// Delete  contact
export const deleteContact = async (id) => {
    console.log(id)
    const { data } = await axiosSecure.delete(`/delete/${id}`)
    return data
  }