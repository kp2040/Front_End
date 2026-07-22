import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { state, dispatch } = useContext(AuthContext);
  const [newName, setNewName] = useState("");

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        id: 1,
        displayName: "Krish",
      },
    });
  };

  const updateName = () => {
    if (!newName.trim()) return;

    dispatch({
      type: "UPDATE_DISPLAY_NAME",
      payload: newName,
    });

    setNewName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      {!state.isLoggedIn ? (
        <button onClick={login}>Login</button>
      ) : (
        <>
          <h3>Name: {state.user.displayName}</h3>

          <input
            type="text"
            placeholder="New Display Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <button onClick={updateName}>
            Update Name
          </button>

          <button
            onClick={() =>
              dispatch({ type: "LOGOUT" })
            }
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;