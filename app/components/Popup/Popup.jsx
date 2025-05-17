import './Popup.css';
import {useState} from 'react'
import { IoMdClose } from "react-icons/io";``
const Popup=({type,setcModal,popUpData})=>{
    const [value,setValue]=useState("");
    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const handleSave=()=>{
     //backend call and save data to localhost
     window.localStorage.setItem("category",value);
     setValue("");
     setcModal(false);   
    }
    return(
        <div className="popup-container bg-black fixed inset-0 z-1000">
            <div className="bg-white z-1001 flex flex-col justify-center align-items-center mt-60 ml-5 mr-5 md:mt-60 md:ml-100 md:mr-100">
                <div className="flex flex-row justify-between popup-heading bg-gray-100">
                    <div className='bg-white p-5  text-lg md:text-md'>{`Add ${type}`}</div>
                    <div className="flex jusitfy-cennter align items-center p-5" onClick={()=>{setcModal(false)}}>
                        <IoMdClose className='h-6 w-6 cursor-pointer'/>
                    </div>
                </div>
                <div className='p-5 pb-10'>
                    <div className='ml-1 mr-1 mt-1 md:ml-5 md:mr-5 md:mt-3 border-1 border-gray-200 rounded-md'>
                        <input className="w-full p-3 text-lg" placeholder={`Add ${type}`} onChange={handleChange}/>
                    </div>
                    <div className='ml-1 mr-1 mt-6 md:ml-5 md:mr-5 md:mt-10'>
                        <button className='w-full p-2 cursor-pointer text-lg' onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;