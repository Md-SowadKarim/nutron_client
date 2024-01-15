import React from "react";
import { deleteContact } from "../api/contact";
import toast from "react-hot-toast";

export default function DeleteModal({ handleOpen, data, refetch }) {
  const handleDelete = async () => {
    try {
      const dat = await deleteContact(data._id);
      refetch();
      handleOpen(false);
      toast.success("Contact Deleted Succesfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10 flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Delete Confirmation
        </h1>
        <p className="text-center py-4 text-gray-700 mb-5">
          Are you sure {data.Name}?
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => handleOpen(false)}
            className="px-5 py-2 bg-gray-700 text-white rounded"
          >
            close
          </button>
          <button
            onClick={() => handleDelete()}
            className="px-5 py-2 bg-gray-700 text-white rounded btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
