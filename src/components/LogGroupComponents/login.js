import {useState} from 'react';

import {Link} from 'react-router-dom';

import LogGroup from '../LogGroupComponents/logGroupStore/logGroup'; 

import '../../style/css/log-form.css';

export default function Login(props){ 
    let [login,setLogin] = useState(""); 
    let [password,setPassword] = useState(""); 
    let [saveState, setSaveState] = useState(false); 
    // if saveState set to true -> user_logged_in save to localstorage and won`t delete after page reload 
    // if saveState set to false -> user_logged_in save to SessionStarage and will dissepear after session end

    return(
        <div className="log-form">
            <h1>To Login Enter Your Data</h1>
            <label>Login</label>
            <input type="text" placeholder="Login" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>

            <label>Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />

            <div>
            <input name="on" type="checkbox" checked={saveState} 
            onChange={(e)=>{setSaveState(e.target.value=e.target.type ==='checkbox'?e.target.checked:e.target.value)}}/>  
            <label >Remember me</label>   
            </div>

            <button onClick={()=>{LogGroup.Login(login,password,saveState)}}>Login</button>
            
            <h5>Don`t have account <Link to="/sign-in">Register</Link> new one</h5>

            <a href="/">Back to main Page</a>
        </div>
    )
}