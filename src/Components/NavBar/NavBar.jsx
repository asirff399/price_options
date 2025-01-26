import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" }, 
        { id: 2, path: "/about", name: "About" }, 
        { id: 3, path: "/services", name: "Services" }, 
        { id: 4, path: "/contact", name: "Contact" }, 
        { id: 5, path: "/dashboard", name: "Dashboard" }
    ];
    return (
        <nav className="w-full h-[70px]">
            <div className="text-3xl md:hidden lg:hidden p-5" onClick={()=>setOpen(!open)}>
                {
                    open === true ?  <FaRegWindowClose /> : <HiOutlineMenuAlt1 />
                }
            </div>
            <ul className={`${open ? 'start-6':'-start-60'} md:start-0 lg:start-0 absolute duration-1000 md:relative lg:relative bg-slate-800 md:w-full lg:w-full md:h-full lf:w-full md:flex lg:flex justify-center items-center gap-4 p-2 rounded-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;