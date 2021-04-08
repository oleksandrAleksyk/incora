
import LogGroup from './logGroupStore/logGroup'; 
export default function Logout(){
    let confirm = window.confirm("Are you sure"); 
    if(confirm){
        LogGroup.Logout();
    } else {
        window.location.replace("/")
    }
    return(null)
}