import NYTStore from './store/nytStore';

export default function NYTFeed(props){
    let {nytFeed} = NYTStore;    
   
    return(
        <div>
            {props.state?<RenderFeed nytFeed={nytFeed}/>:<RenderPlaceholder />}
        </div>
    )
}

const RenderFeed = (props)=>{
    return(
        <div>
        {props.nytFeed.map((item)=>{
            return (<><h4>{item.title}</h4> {item.published_date}</>)
        })}
        </div>
    )
}

const RenderPlaceholder = (props)=>{
    return(<div>
        register
    </div>)
}

