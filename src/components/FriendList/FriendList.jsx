import css from './FriendList.module.css'
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList