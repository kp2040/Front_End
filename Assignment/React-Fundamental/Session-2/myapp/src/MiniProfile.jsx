function MiniProfile() {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />

      <h2>Krish Panchal</h2>

      <p>
        💻 Front-End Developer <br />
        🚀 Learning React & JavaScript
      </p>
    </div>
  );
}

export default MiniProfile;