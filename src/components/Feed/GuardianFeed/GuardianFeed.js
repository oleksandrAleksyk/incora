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
    <div>
        {props.guardianFeed.map((item)=>{
            return (<div key={item.id}><a href={item.webUrl} target="_blank" rel="noreferrer"><h4>{item.webTitle}</h4>{item.webPublicationDate}</a></div>)
        })}
    </div>)
}

const RenderPlaceholder = ()=>{
    return(
        <div>register</div>
    )
}