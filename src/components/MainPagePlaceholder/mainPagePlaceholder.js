import { Link } from 'react-router-dom';
import '../../style/css/placeholder.css'; 

export default function MainPagePlaceholder(){
    return(
        <div className="main-placeholder">
            <h1>Register and than go to feed</h1>

            <Link to="/feed">Go to Feed</Link>
        </div>
    )
}