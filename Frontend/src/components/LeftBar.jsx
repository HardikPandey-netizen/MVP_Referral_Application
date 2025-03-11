import React from 'react'
import { Bell,LayoutDashboard,Zap,Users,Speech } from "lucide-react";
import {Link,NavLink} from 'react-router-dom';

const LeftBar = () => {
  return (
    <ul className='flex flex-col gap-6 mt-2 ml-5'>
        <li>
            <NavLink to='/' className={({isActive})=>`flex flex-row gap-1 ${isActive?"text-blue-600":"text-black"} font-Outfit cursor-pointer`}>
                <LayoutDashboard/>
                <p>Dashboard</p>
            </NavLink>
        </li>
        <li>
            <NavLink to='/campaigns' className={({isActive})=>`flex flex-row gap-1 ${isActive?"text-blue-600":"text-black"} font-Outfit cursor-pointer`}>
                <Speech/>
                <p>Campaigns</p>
            </NavLink>
        </li>
        <li>
            <NavLink to='/customers' className={({isActive})=>`flex flex-row gap-1 ${isActive?"text-blue-600":"text-black"} font-Outfit cursor-pointer`}>
                <Users/>
                <p>Customers</p>
            </NavLink>
        </li>
        <li>
            <NavLink to='/followups' className={({isActive})=>`flex flex-row gap-1 ${isActive?"text-blue-600":"text-black"} font-Outfit cursor-pointer`}>
                <Bell/>
                <p>Follow Ups</p>
            </NavLink>
        </li>
        <li>
            <NavLink to='/integrations' className={({isActive})=>`flex flex-row gap-1 ${isActive?"text-blue-600":"text-black"} font-Outfit cursor-pointer`}>
                <Zap/>
                <p>Integrations</p>
            </NavLink>
        </li>
    </ul>
  )
}

export default LeftBar