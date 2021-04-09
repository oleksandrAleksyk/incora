import {Route, Switch} from 'react-router-dom'; 

import Feed from '../components/Feed/Feed';
import Login from '../components/LogGroupComponents/login';
import Logout from '../components/LogGroupComponents/logout';
import SignIn from '../components/LogGroupComponents/signIn'; 
import MainPagePlaceholder from '../components/MainPagePlaceholder/mainPagePlaceholder';

export default function Routes(){
    return(
        <>
        <Switch>
            <Route path="/feed">
                <Feed/>
            </Route>           
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/sign-in">
                <SignIn />
            </Route>
            <Route path='/logout'>
                <Logout/>
            </Route>

            <Route path='/'>
                <MainPagePlaceholder />
            </Route>
        </Switch>
        </>
    )
}