import React from "react";

function UpdateUsers() {

    const updateUser = async () => {
        try {
            const userRef = doc(db, "Users", 'CAVzBKcoIaxqinZ5vO3M')

            await updateDoc(userRef, {
                name: 'Rajee',
                email: 'rajeet@gmail.com',
                password: 3010

            })
            alert("User Update Successfully")

        } catch (error) {
            console.log('Api not Found')
        }
    }
 
    return ( 
        <div>
            <h2>Update User</h2>
            <button onClick={updateUser}>
                Update User
            </button>
        </div>
    )
}

export default UpdateUsers

