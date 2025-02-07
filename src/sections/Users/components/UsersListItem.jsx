export default function UsersListItem(props) {
    const user = props.user
    const fullName = user.firstName + " " + user.lastName

    return (
        <li style={{ background: user.favouriteColour }}>
            <img src={user.profileImage} alt={fullName} />
            <h3>{fullName}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}
