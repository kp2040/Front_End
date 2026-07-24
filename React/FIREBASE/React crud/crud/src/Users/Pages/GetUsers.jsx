import React from 'react';
import { collection,getDocs,onSnapshot,query,querySnapshot } from 'firebase/firestore';
import { db } from './Firebase';
import { Toast } from 'react-toastify';

function GetUsers() {

    const [users, setUsers] = React.useState([])

    const getUser = async () => {
        try {
            const userdata = query(collection(db, 'Users'));
            const data = onSnapshot(userdata, (querySnapshot) => {
                const viewData = querySnapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                setUsers(viewData)
                Toast.success('Users fetched successfully')


            })
            return data


        } catch (error) {
            console.log(error);
        }

        return (
            <div>
                <h2>Get Users</h2>

                <button onClick={getUser}>
                    Get Users
                </button>

                {
                    users.map((user) => {
                        return (
                            <div key={user.id}>
                                <h3>Name :{user.name}</h3>
                                <p>Email :{user.email}</p>
                                <p>Password :{user.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}       

    export default GetUsers;
