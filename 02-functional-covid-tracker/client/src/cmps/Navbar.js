import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

import AuthService from '../Services/AuthService';

import { AuthContext } from '../Context/AuthContext';


const Navbar = props =>{
    const {isAuthenticated,user,setUser,setIsAuthenticated} = useContext(AuthContext);

    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            console.log(data);
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }


    const unauthenticatedNavBar = ()=>{
        return(
            <>
                <Link to="/">
                    <li>   
                        Home
                    </li>
                </Link>
                <Link to="/login">
                    <li>   
                        Login
                    </li>
                </Link>

            </>
        )
    }
    
    const authenticatedNavBar = ()=>{
        return(
            <>
                <Link to="/">
                    <li>   
                        Home
                    </li>
                </Link>
                <Link to="/preferences">
                    <li>   
                        Preferences
                    </li>
                </Link>
                {
                    user.role === "admin"?
                        <Link to="/admin">
                            Admin
                        </Link>:null
                }
                {
                    user.role === "admin" || user.role === "dataEntry"?
                        <>
                        <Link to="/userInfo">
                            UserInfo
                        </Link>
                        <Link to="/register">
                            Register
                        </Link>
                        </>:null
                }
                <h2>User role:{user.role}</h2>
                <h2>Username:{user.username}</h2>    
                
                <h3>Status:{user.status}</h3>
                
                <button type="button" onClick={onClickLogoutHandler}>Logout</button>
            </>

        )
    }
    
    return(
        <nav>
            <Link to="/" className="logo"> Covid Data Manager</Link>
            <div className="ul-container">
                <ul>
                    {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;