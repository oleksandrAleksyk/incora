import {Link, Route, Switch, useRouteMatch} from 'react-router-dom'; 
import {observer} from 'mobx-react'; 

// importing styles 
import "../../style/css/feed.css";

//importing store
import FeedStore from './FeedStore'; 

import NytFeed from './NYTFeed/nytFeed';
import GuardianFeed from './GuardianFeed/GuardianFeed';
import ManageBar from './ManageBar';


const USER_LOGGED_IN = localStorage.getItem('user_logged_in')?true:sessionStorage.getItem('user_logged_in')?true:false; 


function Feed(){
    let {path} = useRouteMatch();
    
    let {visibillity} = FeedStore; 

    return(
    <div className="feed">
        <ul className="feed-menu">
            <li className={visibillity.guardian?"visible":"invisible"}><Link to="/feed/guardian">Guardian</Link></li>
            <li className={visibillity.nyt?"visible":"invisible"}><Link to="/feed/nyt">New Yourk Times</Link></li>
        </ul>
        <Link to="/feed/manage">Manage</Link>
        <Switch>
            <Route path={`${path}/nyt`}>
                <NytFeed state={USER_LOGGED_IN}/>
            </Route>

            <Route path={`${path}/guardian`}>
                <GuardianFeed state={USER_LOGGED_IN}/>
            </Route>

            <Route path={`${path}/manage`}>
                <ManageBar changeVisibillity={FeedStore.changeVisibillity} visibillity={FeedStore.visibillity} />
            </Route>
        </Switch>
    </div>)
}



export default observer(Feed)