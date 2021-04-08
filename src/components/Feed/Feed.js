import {Link, Route, Switch, useRouteMatch} from 'react-router-dom'; 
import {observer} from 'mobx-react'; 

// importing styles 
import "../../style/css/feed.css";

import NytFeed from './NYTFeed/nytFeed';
import GuardianFeed from './GuardianFeed/GuardianFeed';

const USER_LOGGED_IN = localStorage.getItem('user_logged_in')?true:sessionStorage.getItem('user_logged_in')?true:false; 


function Feed(){
    let {path} = useRouteMatch();
    let visibillity = {
        nasa : true, 
        nyt: true,
        yahoo: true, 
        reddit: true 
    }
    return(
    <div className="feed">
        <ul className="feed-menu">
            <li className={visibillity.nasa?"visible":"invisible"}><Link to="/feed/guardian">Guardian</Link></li>
            <li className={visibillity.nyt?"visible":"invisible"}><Link to="/feed/nyt">New Yourk Times</Link></li>
        </ul>

        <Switch>
            <Route path={`${path}/nyt`}>
                <NytFeed state={USER_LOGGED_IN}/>
            </Route>

            <Route path={`${path}/guardian`}>
                <GuardianFeed state={USER_LOGGED_IN}/>
            </Route>
        </Switch>
    </div>)
}

export default observer(Feed)