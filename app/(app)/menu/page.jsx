'use client'
import Popup from '@/app/components/Popup/Popup';
import './Menu.css';
import {useState} from 'react';

export default function Home() {
  const [cModal,setcModal]=useState(false);
  const addCategory=()=>{
    setcModal(true);
  }
  const popUpData=()=>{

  }

    return (
      <div className="menu-container mt-10">
       <div className="flex flex-row md:justify-between justify-center flex-wrap self-center">
        <div className=' text-3xl md:text-2xl'>Manage Menu</div>
        <button className='menu-heading-button w-100 md:w-50  text-xl mt-3 md:mt-0' onClick={addCategory}>Add Category</button>
       </div>
      {cModal && <Popup type="Category" setcModal={setcModal} popUpData={popUpData}/>}
      </div>
    );
}