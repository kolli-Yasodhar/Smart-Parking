import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const tabs = [
    {
      name: "Dashboard",
      title: "dashboard"

    },
    {
      name: "Update Prices",
      title: "updatePrice"
    },
    {
      name: "Add New Slot",
      title: "addSlot"
    },
    {
      name: "View Slots",
      title: "viewSlots"
    }
  ]

  function handleTabChange(title) {

    if (title === "dashboard") {
      navigate(`/`)
    } else if (title === "updatePrice") {
      navigate(`/admin/update/prices`)
    } else if (title === "addSlot") {
      navigate("/admin/add/slot")
    } else if (title === "viewSlots") {
      navigate("/admin/view/slots");
    }

    console.log("Current Tab -", title);
  }

  return (
    <div className='flex flex-col items-center space-y-10 bg-slate-400 h-[100vh] w-[18%] fixed border-r-2  shadow-md' >

      <div className='mt-5' >
        <img className='h-[13vw] w-[13vw] rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
      </div>

      <div className='flex flex-col space-y-2 ' >
        {tabs.map((item) =>
          <div className= {`py-2 px-7 cursor-pointer rounded-md hover:border ${item.title === activeTab ? "font-semibold bg-slate-100" : ""}`} 
            onClick={() => { 
              setActiveTab(item.title)
              handleTabChange(item.title)
               }}>
            {item.name}
          </div>)}
      </div>

    </div>
  )
}

export default Sidebar