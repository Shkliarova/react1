import { ListItem, ItemStatus, ItemName } from "./FriendItem.styled"

export const FriendListItem = ({ friend }) => {
    return (
    <ListItem>
        <ItemStatus $isOnline = {friend.isOnline}></ItemStatus>
        <img src={friend.avatar} alt={friend.name} width="48" />
        <ItemName>{friend.name}</ItemName>
    </ListItem>
    )
}