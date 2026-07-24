import {deletedoc,doc} from "./Firebase";
import { fireDb } from "./Firebase";
import React from "react";

function DeleteUser() {
    const deleteUserData = async () => {
        const deleteUser = doc(fireDb, "React crud", '02pD4hTWuPzfyh4QzwAJ')

        await deleteDoc(deleteUser)
        alert("User Deleted Successfully")
    }

    return (
        <div>
            <h2>Delete User</h2>
            <button onClick={deleteUserData}>
                Delete User
            </button>
        </div>
    )
}

export default DeleteUser

