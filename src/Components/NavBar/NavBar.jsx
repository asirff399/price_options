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
        <nav className="md:flex lg:flex gap-3 ">
            <div className="text-3xl md:hidden lg:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <HiOutlineMenuAlt1 /> : <FaRegWindowClose />
                }
            </div>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </nav>
    );
};

export default NavBar;