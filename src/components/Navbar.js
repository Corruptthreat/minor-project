import React , {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link,useHistory} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import img from './index.png';
import {Button} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const { logout } = useAuth()
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    const [error, setError] = useState("")
    const history = useHistory()
    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch  {
            setError('Failed to log out')
        }
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <Button className="logout-button" variant="link" onClick={handleLogout}>Logout</Button>
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
    {/* <p>{currentUser.email}</p> */}
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
