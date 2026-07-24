import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";


function AddUser() {

    const addUser = async () => {

        try {

            await addDoc(collection(db, "React crud"), {
                name: "krish",
                email: "krish@gmail.com",
                password: "2040",
            });

            console.log("Product Added Successfully");
            
        } catch (error) {

            console.log( error);
            
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
    