function UserProfile(props) {
  return (
    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={props.profilePic}
        alt={props.username}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <h2>{props.username}</h2>

      <p>
        <strong>{props.followers}</strong> Followers
      </p>
    </div>
  );
}

// Default props
UserProfile.defaultProps = {
  followers: 0,
  profilePic: "https://via.placeholder.com/100",
};

export default UserProfile;