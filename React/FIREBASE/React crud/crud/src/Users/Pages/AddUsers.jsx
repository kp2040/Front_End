import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase';


function AddUser() {

    const addUser = async () => {

        try {

            await addDoc(collection(db, 'Users'), {
                name: "Rajeet",
                email: "rajeet@gmail.com",
                password: "123456"
            });

            console.log("User Added Successfully");

        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div>
            <h2>Add User Here</h2>

            <button onClick={addUser}>
                Add User
            </button>
        </div>
    );
}
export default AddUser;