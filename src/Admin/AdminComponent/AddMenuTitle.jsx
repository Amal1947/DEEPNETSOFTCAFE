import React, { useEffect, useState } from 'react'
import { Input } from "@material-tailwind/react";
import axios from "axios"
import { BaseUrl } from '../../Config/BaseUrl';
function AddMenuTitle() {
  const [menuName, setMenuName] = useState("")
  const [getMenu, setGetMenu] = useState([])
  const [response, setResponse] = useState("")

  const handleAdd = ()=>{
    axios.post(BaseUrl+"api/menus",{menuName:menuName}).then((response)=>{
      console.log("response",response);
      setResponse(response)
   
    })

  }
  useEffect(() => {
    axios.get(BaseUrl+"getmenu").then((response)=>{
      console.log(response.data,"responsee");
      
      setGetMenu(response.data.data)
    })
  }, [response])
  
  return (
    <div>
      <div className="flex items-center space-x-2"> {/* Flex container for input and button */}
        <div className='w-full'>
          <Input label="Add Menu" value={menuName} onChange={(e)=>{setMenuName(e.target.value)}} />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
{
  getMenu?.map(el=>{
    return  <div className="bg-white shadow-md w-full rounded-lg p-4 mx-auto mt-4">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{el.menuName}</h2>
    <div className="flex justify-between">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        // onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        // onClick={onDelete}
      >
        Delete
      </button>
    </div>
  </div>
  })
}
     
    </div>
  )
}

export default AddMenuTitle;
