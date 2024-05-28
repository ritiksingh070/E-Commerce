import React, { useEffect } from "react";
import { Link ,useNavigate
} from 'react-router-dom';
import logo from './img/logo.png'

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <img alt="logo" className="logo"src={logo}/>
            { auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link on onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li> 
            </ul>
            }
        </div>
    )
};
export default Nav;