import { FriendListItem } from "./FriendListItem";
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
    <FriendsList>
        {friends.map(friend => {
            return (
            <FriendListItem key={friend.id} friend={friend} />
            )
        })}
    </FriendsList>
    )
}