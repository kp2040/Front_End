import { fireDb } from "./Firebase";

function UpdateUser() {

    const updateUser = async () => {
        try {
            const userRef = doc(fireDb, "React crud", 'XhsgHXfBFgn4XS7stkAr')

            await updateDoc(userRef, {
                name: 'hiten',
                email: 'hiten@example.com',
                password: 1
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

export default UpdateUser