import ArtListItem from "./ArtListItem"

export default function Artlist(props) {
    const arts = props.arts

    return (
        <ul className="art-list">
            {arts.map((item) => (
                <ArtListItem key={item.id} art={item} />
            ))}
        </ul>
    )
}
