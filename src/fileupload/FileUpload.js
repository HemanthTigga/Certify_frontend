import React, { useState } from 'react'
import axios from 'axios';


const FileUpload = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])

  }


  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/read', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });


      window.location.reload();
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
    }

  };
  return (
    <div className='h-screen flex items-center justify-center bg-gray-900'>

      <div className="mb-3 w-96 h-48 bg-gray-300 rounded-md p-5">

        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-500 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-600 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-200 dark:focus:border-primary"
          type='file'
          onChange={handleFileChange}
        // onChange={(e) => setFile(e.target.files[0])} 
        />
        <button
          className='p-3 bg-blue-600 text-white mt-2 rounded-md'
          type='button' onClick={handleFileUpload}>Upload</button>

      </div>
    </div>

  )
}

export default FileUpload
