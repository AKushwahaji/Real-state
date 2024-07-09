// import React from "react";

import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from "firebase/storage";
import { app } from "../firebase";
import { updateUserStart, updateUserSuccess, updateUserFailure } from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";


const Profile = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();



  console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  },
    [file]);


  const handleFileUpload = (file) => {
    const storage = getStorage(app);

    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progess));
      },
      (error) => {
        setFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURl) =>
          setFormData({ ...FormData, avatar: downloadURl })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="images/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar} alt="avatar" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2" />

        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700"> Error image upload(images must be less than 2 mb)</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uplaoding ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Successfully Uploaded</span>
          ) : (
            ''
          )}
        </p>

        <input type="text" placeholder="username" id="username" defaultValue={currentUser.username}
          onChange={handleChange}

          className="border p-3 rounded-lg" />


        <input type="email" placeholder="email" id="email" defaultValue={currentUser.email}
          onChange={handleChange}

          className="border p-3 rounded-lg" />


        <input type="password" placeholder="password"
          onChange={handleChange}
          id="password"
          className="border p-3 rounded-lg" />

        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95">
          {loading ? "loading..." : "Update profile"}
        </button>
      </form>

      <p className="text-red-700 mt-5">{error ? error : ''}</p>
      <p className="text-green-700 mt-5">{updateSuccess ? "profile Updated successfully " : ''}</p>
      
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer"> Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}

export default Profile