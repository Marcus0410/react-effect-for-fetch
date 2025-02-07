export default function ArtListItem(props) {
    const art = props.art

    const imgUrl = "https://boolean-uk-api-server.fly.dev" + art.imageURL

    return (
        <li>
            <div className="frame">
                <img src={imgUrl} />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {art.publicationHistory.map((publication, index) => (
                    <li key={index}>{publication}</li>
                ))}
            </ul>
        </li>
    )
}
