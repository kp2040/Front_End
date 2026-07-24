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
        margin: "20px auto",
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
          marginBottom: "10px",
        }}
      />

      <h2>{props.username}</h2>

      <p>
        <strong>{props.followers}</strong> Followers
      </p>

      <button
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Follow
      </button>
    </div>
  );
}

export default UserProfile;