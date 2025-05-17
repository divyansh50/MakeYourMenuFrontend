import "./Sidebar.css";
import Link from 'next/link';
import { memo } from "react";
const Sidebar=memo(()=>{
    return(
        <div>
                    <div className="sidebar-heading">Management</div>
                    <div className="sidebar-items"><Link href="/dashboard">Dashboard</Link></div>
                    <div className="sidebar-items"><Link href="/restaurant">Restaurant</Link></div>
                    <div className="sidebar-items"><Link href="/menu">Menu</Link></div>
                    <div className="sidebar-items"><Link href="/orders">Orders</Link></div>
                    <div className="sidebar-items"><Link href="/whatsapp-ordering">Whatsapp Ordering</Link></div>
                    <div className="sidebar-items"><Link href="/membership">Membership</Link></div>
                    <div className="sidebar-heading">Account</div>
                    <div className="sidebar-items"><Link href="/account-setting">Account Setting</Link></div>
                    <div className="sidebar-items"><Link href="/logout">Logout</Link></div>               
        </div>
    );
})
export default Sidebar;