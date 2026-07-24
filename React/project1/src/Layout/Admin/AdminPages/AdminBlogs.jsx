import React, { useEffect, useState } from "react";
import axios from "axios";

import Ahero from "../Acoman/Ahero";
import Aheader from "../AdminComman/AdminHeader";

function BlogsManage() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blogs");
      setBlog(res.data);
    } catch (error) {
      console.error("API Not Found:", error);
    }
  };

  return (
    <>
      <Aheader />
      <Ahero title="Blogs Manage" name="Blogs" />

      <div className="container">
        <table className="table table-hover my-5">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Post</th>
              <th>Date</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {blog.length > 0 ? (
              blog.map((data) => (
                <tr key={data.id} className="text-center align-middle">
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.post}</td>
                  <td>{data.date}</td>

                  <td>
                    <img
                      src={data.img}
                      alt={data.name}
                      width="100"
                      height="70"
                      style={{ objectFit: "cover" }}
                    />
                  </td>

                  <td>
                    <button className="btn btn-info btn-sm">
                      View
                    </button>

                    <button className="btn btn-success btn-sm mx-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Blogs Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BlogsManage;