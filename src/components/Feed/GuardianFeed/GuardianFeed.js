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
            return (<div key={item.id}><h4>{item.webTitle}</h4>{item.webPublicationDate}</div>)
        })}
    </div>)
}

const RenderPlaceholder = ()=>{
    return(
        <div>register</div>
    )
}