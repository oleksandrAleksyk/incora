import {Link} from 'react-router-dom'; 

// style import
import '../../style/css/navbar.css'; 

//userState 
const USER_LOGGED_IN = localStorage.getItem('user_logged_in')?true:sessionStorage.getItem('user_logged_in')?true:false; 



export default function Navbar(){    
    return(
        <nav className="navbar">
            <Link to="/">Feed Reader</Link>
            {USER_LOGGED_IN? <LogutButton /> :<LoginButtonGroup />  }
        </nav>
    )
}

const LoginButtonGroup = ()=>{
    return(
        <div>
           <Link to="/login">Login</Link>
           <Link to="/sign-in">SignIn</Link>
        </div>
    )   
}
   
   const LogutButton = ()=>{
       return(
           <div>
               <Link to="/logout">Logout</Link>
           </div>
       )
}