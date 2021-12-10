import React,{useState,useRef,useEffect,useContext} from 'react';

import AuthService  from '../Services/AuthService';
import Message from '../cmps/Message';
import { AuthContext } from '../Context/AuthContext';



const Register =(props)=>{
    const [user,setUser] = useState({username:"",password:"",role:""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);
    const authContext = useContext(AuthContext);
    // console.log(authContext)

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const resetForm = ()=>{
        setUser({username:"",password:"",role:""})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            console.log(data)
            const {message} = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                // timerID = setTimeout(()=>{
                //     props.history.push('/login');
                // },2000);
                if(authContext.user.role === "admin"){
                    props.history.push('/users');
                }else{
                    props.history.push('/');
                }
            }
        })

    }
    const onChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    return(
        <div>
            <form onSubmit={onSubmit} className="style-form">
                <h3>Register a dataEntry personnel or an employee</h3>
                <label htmlFor = "username" >Username</label>
                <input type="text" name="username" onChange={onChange} placeholder="Enter username" value={user.username} />

                <label htmlFor = "password" >Password</label>
                <input type="text" name="password" onChange={onChange} placeholder="Enter password" value={user.password} />

                <label htmlFor = "role" >Password</label>
                <select name="role" onChange={onChange} value={user.role}>
                    <option value="select role">
                        Select Role
                    </option>
                    {(authContext.user.role === "admin") &&
                        (
                            <>
                            <option value="admin" >
                               admin
                            </option>
                            <option value="dataEntry">
                                dataEntry
                            </option>
                            </>
                        )
                    }
                    <option value="employee">
                        employee
                    </option>
                </select>
    

                <button type="submit">Register</button>
            </form>
            {message ? <Message message={message}/>: null}
        </div>
    )
}

export default Register;