import { observable, action, makeAutoObservable } from "mobx";
const API_KEY = "a246783d-c26f-40be-95f8-d178879ff48f"
class GuardianStore {
    constructor(){
        makeAutoObservable(this,{
            guardianFeed: observable,
            setFeed: action,
            getFeed: action, 
        })    
        this.getFeed()    
    }

    guardianFeed = []; 

    setFeed(payload){
        this.guardianFeed.replace(payload)
    }
    //https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
    //
    getFeed(){
        fetch(`https://content.guardianapis.com/search?api-key=${API_KEY}`)
        .then(result => result.json())
        // .then(result => console.log(result))
        .then(result => this.setFeed(result.response.results))
    }

    
}

export default new GuardianStore()