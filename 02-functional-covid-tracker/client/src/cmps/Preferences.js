import React,{useState,useContext,useEffect} from "react";
import PreferenceItem from './PreferenceItem';
import PreferenceService from '../Services/PreferenceService';
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";

const Preferences = (props)=>{
    const [pref,setPref] = useState({preferredUI:"",preferredCountry:""});
    const [prefs,setPrefs] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        PreferenceService.getPrefs().then(data=>{
            setPrefs(data.preferences);
        });
    },[]);

    const onSubmit = e =>{
        e.preventDefault();
        PreferenceService.postPref(pref).then(data=>{
            const {message} = data;
            resetForm();
            if(!message.msgError){
                PreferenceService.getPrefs().then(getData=>{
                    console.log(getData)
                    setPrefs(getData.preferences)
                    setMessage(message)
                })
            }else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username:"",role:""});
                authContext.setIsAuthenticated(false);
            }else{
                setMessage(message);
            }
        })
    }

    function resetForm(){
        setPref({preferredUI:"",preferredCountry:""})
    }
    const onChange = e =>{
        setPref({...pref,[e.target.name]:e.target.value});
        console.log(pref);

    }

    return(
        <div>
            <h1>Preferences of the user</h1>
            <ul className="list-grp">
                {
                    prefs&&prefs.map(pref=>{
                        return <PreferenceItem key={pref._id} pref={pref}/>
                    })
                }
            </ul>
            <br/>
            <form onSubmit={onSubmit}>
                <label htmlFor = "pref">Enter UI Preference</label>
                <select name="uiPref" onChange={onChange} >
                    <option value="select role">
                        Select UI
                    </option>
                    <option value="covidFirst">
                     covid First
                    </option>
                    <option value="managmentFirst">
                     managment First
                    </option>

                </select>
                <label htmlFor = "pref">Enter Country Preference</label>
                <input type="text" name="countryPref"  onChange={onChange} placeholder="Enter country Preference" />

                <button type="submit"> Submit </button>


            </form>
            {
                message ? <Message message={message} />:null
            }
        </div>
    )
}

export default Preferences;