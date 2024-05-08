function FriendListItem({ data }) {
  return (
    <div>
      <img src={data.avatar} alt="Avatar" width="48" />
      <p>{data.name}</p>
      <p>{data.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default FriendListItem;
