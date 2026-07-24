import {deleteUser,doc} from "./Firebase";
import { db } from "./Firebase";
import React from "react";

function DeleteUser() {
    const deleteUserData = async () => {
        const deleteUser = doc(db, "Users", 'ikaNm3SjrcK9t6Wueu7g')

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
