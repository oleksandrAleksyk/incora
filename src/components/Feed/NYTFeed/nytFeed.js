import NYTStore from './store/nytStore';

export default function NYTFeed(props) {
    let { nytFeed } = NYTStore;

    return (
        <div className="feed-list">
            {props.state ? <RenderFeed nytFeed={nytFeed} /> : <RenderPlaceholder />}
        </div>
    )
}

const RenderFeed = (props) => {
    return (
        <div>
            {props.nytFeed.map((item) => {
                return (<div><a href={item.url} target="_blank" rel="noreferrer" ><h4>{item.title}</h4> {item.published_date}</a></div>)
            })}
        </div>
    )
}

const RenderPlaceholder = (props) => {
    return (
        <div>
            <h1>Please Register First</h1>
        </div>
    )
}

