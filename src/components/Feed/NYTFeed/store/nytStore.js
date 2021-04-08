import { observable, action, makeAutoObservable } from "mobx";
const API_KEY = "OdPCD4uXVDvvs9RTXv1xUkjak8xdO1Oq"
class NYTStore {
    constructor(){
        makeAutoObservable(this,{
            nytFeed: observable,
            setFeed: action,
            getFeed: action, 
        }) 
        this.getFeed()      
    }

    nytFeed = []; 

    setFeed(payload){
        this.nytFeed.replace(payload)
    }
    //https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
    //
    getFeed(){
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`)
        .then(result => result.json())
        // .then(result => console.log(result))
        .then(result => this.setFeed(result.results))
    }

    
}

export default new NYTStore()