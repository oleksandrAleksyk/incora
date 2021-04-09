import {useState} from 'react';

import LogGroup from '../LogGroupComponents/logGroupStore/logGroup'; 

import {Link} from 'react-router-dom';

export default function SignIn(props){ 
    let [login,setLogin] = useState(""); 
    let [password,setPassword] = useState(""); 
    let [saveState, setSaveState] = useState(false); 
    // if saveState set to true -> user_logged_in save to localstorage and won`t delete after page reload 
    // if saveState set to false -> user_logged_in save to SessionStarage and will dissepear after session end

    return(
        <div className="log-form">
            <h1>Enter Register Information</h1>
            <label>Login</label>
            <input type="text" placeholder="Login" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>

            <label>Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />

            <div>
            <input name="on" type="checkbox" checked={saveState} 
            onChange={(e)=>{setSaveState(e.target.value=e.target.type ==='checkbox'?e.target.checked:e.target.value)}}/>  
            <label >Remember me</label>   
            </div>

            <button onClick={()=>{LogGroup.SignIn(login,password,saveState)}}>Login</button>
            
            <h5>Don`t have account <Link to="/login">Log In</Link> new one</h5>

            <a href="/">Back to main Page</a>
        </div>
    )
}