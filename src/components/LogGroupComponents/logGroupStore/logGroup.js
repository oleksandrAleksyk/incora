import {action, makeAutoObservable} from 'mobx'; 

class LogGroup{
    constructor(){
        makeAutoObservable({
            Login: action, 
            SignIn: action, 
            Logout: action, 
        })
    }

    Login(login, password, saveState){
        fetch("https://jsonplaceholder.typicode.com/users",{
            method: "POST", 
            body: JSON.stringify({
                'login': login, 
                'password': password,
            })
        }).then(response => {
            if (!response.ok) {
                return response.json()
                    .catch(() => {
                        // Couldn't parse the JSON
                        throw new Error(response.status);
                    })
                    .then(({message}) => {
                        // Got valid JSON with error response, use it
                        throw new Error(message || response.status);
                    });
            }
            // Successful response, parse the JSON and return the data
            return response.json()
        })
        .then(response => {
            if(saveState){
                localStorage.setItem('user_logged_in',true);
            } else {
                sessionStorage.setItem('user_logged_in', true);
            }
            window.location.replace('/');
        })
    }

    SignIn(login, password, saveState){
        fetch("https://jsonplaceholder.typicode.com/users",{
            method: "POST", 
            body: JSON.stringify({
                'login': login, 
                'password': password,
            })
        }).then(response => {
            if (!response.ok) {
                return response.json()
                    .catch(() => {
                        // Couldn't parse the JSON
                        throw new Error(response.status);
                    })
                    .then(({message}) => {
                        // Got valid JSON with error response, use it
                        throw new Error(message || response.status);
                    });
            }
            // Successful response, parse the JSON and return the data
            return response.json()
        })
        .then(response => {
            if(saveState){
                localStorage.setItem('user_logged_in',true);
            } else {
                sessionStorage.setItem('user_logged_in', true);
            }
            window.location.replace('/');
        })
    }

    Logout(){
        localStorage.removeItem('user_logged_in'); 
        sessionStorage.removeItem('user_logged_in'); 
        window.location.replace("/");
    }


}

export default new LogGroup()