import React , {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import img from './index.png';

function Navbar() {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'#'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar?'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <Link tp="#" className="menu-bars">
                <AiIcons.AiOutlineClose/>
                </Link> 
            </li>
            <div className='user-detail'>
                <div className='image-user'>
                    <img src={img}/>
                </div>
                <p>User Name</p>
            </div>
            {SidebarData.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icons}
                <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
