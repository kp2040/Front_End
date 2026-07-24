import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'fortawesome/fontawesome-free/css/all.min.css';
// import AddUser from './React crud/pages/AddUser';
// import GetUser from './React crud/pages/GetUser';
// import UpdateUser from './React crud/pages/UpdateUser';
// import DeleteUser from './React crud/pages/DeleteUser';
import { ToastContainer } from 'react-toastify';
import products from './React crud/pages/Products';
import AddUser from './React crud/pages/AddUser';

function App() {
  return (
  <div>
    <ToastContainer
    autoclose={2000} />
    {/* <AddUser/>
    <UpdateUser/>
    <GetUser/>
    <DeleteUser/> */}
   
</div>
)
}  

export default App
