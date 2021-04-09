import GuardianStore from './guardianStore/GuardianStore';


export default function GuardianFeed(props){   
    let {guardianFeed} = GuardianStore;     
    return(
        <>
        {props.state?<RenderFeed guardianFeed={guardianFeed}/>:<RenderPlaceholder/>}
        </>
    )
}

const RenderFeed = (props)=>{
    return(
    <div className="feed-list">
        {props.guardianFeed.map((item)=>{
            return (<div key={item.id}><a href={item.webUrl} target="_blank" rel="noreferrer"><h4>{item.webTitle}</h4>{item.webPublicationDate}</a></div>)
        })}
    </div>)
}

const RenderPlaceholder = ()=>{
    return(
        <div>
            <h1>Please Register First</h1>
        </div>
    )
}