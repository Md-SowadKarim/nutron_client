import React, { useState } from "react";
import MyModal from "./MyModal";
import DeleteModal from "./DeleteModal";
import { favourite } from "../api/contact";
import toast from "react-hot-toast";

const Card = ({ data, refetch }) => {
  const [del, setDel] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (command) => {
    setOpen(command);
    setDel(command);
  };
  const handleFavClick = async () => {
    try {
      let sta = "yes";
      if (data.fav == "yes") {
        sta = "no";
      }
      const dat = await favourite(data._id, sta);
      console.log(dat);
      refetch();
      if (data.fav == "yes") {
        toast.success("Removed From Favourite");
      } else {
        toast.success("Added To Favourite");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
    }
  };
  return (
    <div className="border-2 border-white rounded-lg">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <button
          onClick={handleFavClick}
          className={`btn btn-primary bg-blue-500 ${
            data.fav == "yes" && "bg-green-500"
          }`}
        >
          {data.fav == "yes"
            ? "Remove from Favourite"
            : `Add to Favourite  ${data.Name}`}{" "}
        </button>
        <figure className="w-full h-[300px] ">
          <img
            className="object-cover w-[80%]"
            src={data.ProfilePicture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.Name}</h2>
          <div className="text-left my-2">
            <p>{data.Email}</p>
            <p>{data.Phone}</p>
            <p>{data.Address}</p>
          </div>
          <div className="card-actions justify-between">
            <button
              className="btn btn-primary"
              onClick={() => {
                setOpen(true);
              }}
            >
              Update
            </button>
            {open && (
              <MyModal data={data} handleOpen={handleOpen} refetch={refetch} />
            )}
            <button
              className="btn btn-primary"
              onClick={() => {
                setDel(true);
              }}
            >
              Delete
            </button>
            {del && (
              <DeleteModal data={data} handleOpen={handleOpen} refetch={refetch} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
