import React,{useState,useContext} from 'react';

import AuthService  from '../Services/AuthService';
import Message from '../cmps/Message';

import { AuthContext } from '../Context/AuthContext';


const Login =(props)=>{
    const [user,setUser] = useState({username:"",password:""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onSubmit=(e)=>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data)
            const {isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/preferences');
            }else{
                setMessage(message);
                console.log(message)
            }
        })

    }
    const onChange = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    return(
        <div>
            <form onSubmit={onSubmit} className="style-form">
                <h3>Sign in for office COVID data managment</h3>
                <label htmlFor = "username" >Username</label>
                <input type="text" name="username" onChange={onChange} placeholder="Enter username" />

                <label htmlFor = "password" >Password</label>
                <input type="text" name="password" onChange={onChange} placeholder="Enter password" />

                <button type="submit">Login</button>
            </form>
            {message ? <Message message={message}/>: null}
        </div>
    )
}

export default Login;