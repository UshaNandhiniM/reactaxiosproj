import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Products = ({ setId }) => {
  const [product, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://6680d76956c2c76b495cdae5.mockapi.io/product")

      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://6680d76956c2c76b495cdae5.mockapi.io/product/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Num</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">userName</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Company_name</th>
            <th scope="coll" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((ele, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{ele.id}</th>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.address}</td>
                <td>{ele.phone}</td>
                <td>{ele.comp_name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleEdit(ele.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn btn-danger ml-5"
        onClick={() => {
          navigate("/create");
        }}
      >
        Create
      </button>

      <div>
          <Footer/>
        </div>
    </div>
    
  );
};

export default Products;
