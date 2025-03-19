'use client';
import Image from "next/image";
import './layout.css';
import Sidebar from "../components/sidebar/Sidebar";
import useResize from "../components/useResize/useResize";
import { useState } from "react";
import Link from 'next/link';

export default function AppLayout({ children }) {
    const width= useResize();//custom hook for resposniveness
    const [openModal,setOpenModal]=useState(false);
    return(
        <div>
            <div className="bg-white h-20 w-full image-header">
                <div className=" pl-6"><Image src="/restro-theme_logo.jpg" width={180} height={180} alt="Restaurant Logo" /></div>
                {width<993 && <div><Image src="/default_user.png" width={55} height={55} alt="Default User" className="default-user mr-3" onClick={()=>{setOpenModal((prev)=>!prev)}}/></div>}
            </div>
            {openModal && (
                <div className="modal-header">  
                    <div className="modal-items"><Link href="/dashboard">Dashboard</Link></div>
                    <div className="modal-items"><Link href="/restaurant">Restaurant</Link></div>
                    <div className="modal-items"><Link href="/menu">Menu</Link></div>
                    <div className="modal-items"><Link href="/orders">Orders</Link></div>
                    <div className="modal-items"><Link href="/whatsapp-ordering">Whatsapp Ordering</Link></div>
                    <div className="modal-items"><Link href="/membership">Membership</Link></div>
                    <div className="modal-items"><Link href="/account-setting">Account Setting</Link></div>
                    <div className="modal-items"><Link href="/logout">Logout</Link></div> 
                </div>
            )}
            <div className="flex flex-row flex-container">
                {width>=993 &&
                <div className="sidebar-container">
                    <Sidebar/>
                </div>}
                <div className=" main-content">
                    <div className="main-container">{children}</div>  
                </div>
            </div>
            
        </div>
    )
}