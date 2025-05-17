'use client';
import "./restaurant.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    resName: '',
    resSlug: '',
    resSubtitle: '',
    resTiming: '',
    resDescription: '',
    resLocation: '',
    resTableOrder: '',
    resTakeawayOrder: ''
  })
  const [localData,setLocalData]=useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  useEffect(()=>{
    const localData= window.localStorage.getItem("res")
    if(localData){
      setFormData(JSON.parse(localData));
    }
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("res", JSON.stringify(formData));
  }
  return (
    <div>
      <div className="res-container">
        {/* heading */}
        <div className="res-heading flex flex-row justify-between flex-wrap self-center">
          <div className="res-heading-text flex self-center"> Restaurant Information</div>
          <button className="res-heading-button">Live Preview</button>
        </div>

        <div className="res-content">
          <form >
            {/* Restaurant Name  */}
            <div className="flex flex-col">
              <label className="mt-3">Restaurant Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="res-name-input p-2 mt-3"
                name="resName"
                value={formData.resName}
                onChange={handleChange} />
            </div>

            {/* Restaurant Slug */}
            <div className="flex flex-col">
              <label className="mt-4">Restaurant Slug - Your Link (Eg: annapoorna)</label>
              <input
                type="text"
                placeholder="Enter your Slug"
                className="res-name-input p-2 mt-3"
                name="resSlug"
                value={formData.resSlug}
                onChange={handleChange} />
            </div>

            <div className="text-gray-500 text-xs mt-4">Use only alphanumeric value without space. (Hyphen(-) allow) You can include hyphens in the name example give as cafename or rajcafe-mumbai</div>

            {/* Restaurant Subtitle and timing combo  */}
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col">
                <label className="mt-4">Restaurant Sub Title</label>
                <input
                  type="text"
                  placeholder="Enter your Sub Title"
                  className="res-name-input p-2 mt-3 mr-3"
                  name="resSubtitle"
                  value={formData.resSubtitle}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="mt-4">Restaurant Timing</label>
                <input
                  type="text"
                  placeholder="Enter your Slug"
                  className="res-name-input p-2 mt-3"
                  name="resTiming"
                  value={formData.resTiming}
                  onChange={handleChange} />
              </div>
            </div>

            {/* Restaurant Description */}
            <div className="flex flex-col">
              <label className="mt-4">Enter your Description</label>
              <input
                type="text"
                className="res-name-input p-2 mt-3 h-50"
                name="resDescription"
                value={formData.resDescription}
                onChange={handleChange} />
            </div>

            {/* Restaurant Location */}
            <div className="flex flex-col">
              <label className="mt-4">Restaurant Location</label>
              <input
                type="text"
                placeholder="Enter your Location"
                className="res-name-input p-2 mt-3"
                name="resLocation"
                value={formData.resLocation}
                onChange={handleChange} />
            </div>

            {/* allow on-table and takeway order */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
              <div className="flex flex-col">
                <label className="mt-4">Allow On-Table Order (Yes/No)</label>
                <input
                  type="text"
                  className="res-name-input p-2 mt-3 mr-4"
                  name="resTableOrder"
                  value={formData.resTableOrder}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="mt-4">Allow Takeway Order (Yes/No)</label>
                <input
                  type="text"
                  className="res-name-input p-2 mt-3"
                  name="resTakeawayOrder"
                  value={formData.resTakeawayOrder}
                  onChange={handleChange} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col jusitfy-center self-center">
        <button className="res-heading-button mt-6 mb-20" type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}