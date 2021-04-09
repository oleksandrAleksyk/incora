import { Link } from "react-router-dom"


export default function ManageBar(props){    

    return(
        <div>
            <Link to="/feed">Back to Feed</Link>

            <label>Guardian</label>
            <input type="checkbox" checked={props.visibillity.guardian}
            onChange={(e)=>{props.changeVisibillity('guardian',e.target.value=e.target.type ==='checkbox'?e.target.checked:e.target.value)}}
            />  
           

            <label>New Yourk Times</label>
            <input type="checkbox" checked={props.visibillity.nyt} 
             onChange={(e)=>{props.changeVisibillity('nyt',e.target.value=e.target.type ==='checkbox'?e.target.checked:e.target.value)}}/> 
        </div>
    )

}