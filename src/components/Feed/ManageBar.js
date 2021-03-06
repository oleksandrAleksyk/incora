import { Link } from "react-router-dom"


export default function ManageBar(props){    

    return(
        <div className="manage">
            <Link to="/feed">Back to Feed</Link>

            <div>
                <label>Guardian</label>
                <input type="checkbox" checked={props.visibillity.guardian}
                    onChange={(e) => { props.changeVisibillity('guardian', e.target.value = e.target.type === 'checkbox' ? e.target.checked : e.target.value) }}
                />
            </div>

            <div>
                <label>New Yourk Times</label>
                <input type="checkbox" checked={props.visibillity.nyt}
                    onChange={(e) => { props.changeVisibillity('nyt', e.target.value = e.target.type === 'checkbox' ? e.target.checked : e.target.value) }} />
            </div>
        </div>
    )

}