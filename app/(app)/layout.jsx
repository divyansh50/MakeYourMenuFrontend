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
                <div className=" pl-6"><Image src="/restro-theme_logo.jpg" width={width<767?140:180} height={width<767?140:180} alt="Restaurant Logo" /></div>
                {width<993 && <div><Image src="/default_user.png" width={width<767?45:55} height={width<767?45:55} alt="Default User" className="default-user mr-3" onClick={()=>{setOpenModal((prev)=>!prev)}}/></div>}
            </div>
            {openModal && (
                <div className="modal-header">  
                    <div className="modal-items"><Link href="/dashboard" onClick={()=>setOpenModal(false)}>Dashboard</Link></div>
                    <div className="modal-items"><Link href="/restaurant" onClick={()=>setOpenModal(false)}>Restaurant</Link></div>
                    <div className="modal-items"><Link href="/menu" onClick={()=>setOpenModal(false)}>Menu</Link></div>
                    <div className="modal-items"><Link href="/orders" onClick={()=>setOpenModal(false)}>Orders</Link></div>
                    <div className="modal-items"><Link href="/whatsapp-ordering" onClick={()=>setOpenModal(false)}>Whatsapp Ordering</Link></div>
                    <div className="modal-items"><Link href="/membership" onClick={()=>setOpenModal(false)}>Membership</Link></div>
                    <div className="modal-items"><Link href="/account-setting" onClick={()=>setOpenModal(false)}>Account Setting</Link></div>
                    <div className="modal-items"><Link href="/logout" onClick={()=>setOpenModal(false)}>Logout</Link></div> 
                </div>
            )}
            <div className="flex flex-row flex-container">
                {width>=767 &&
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