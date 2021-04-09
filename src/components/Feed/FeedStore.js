import { action, makeAutoObservable, observable } from "mobx";

class FeedStore{
    constructor(){
        makeAutoObservable(this,{
            visibillity: observable, 
            changeVisibillity: action,    
        })
    }

    visibillity = {
        guardian: true, 
        nyt: true,
    }

    changeVisibillity(item, value){
        this.visibillity[item] = value; 
    }


}


export default new FeedStore()