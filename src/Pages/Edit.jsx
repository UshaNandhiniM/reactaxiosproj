import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    p_id: "",
    name: "",
    image: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6680d76956c2c76b495cdae5.mockapi.io/product/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6680d76956c2c76b495cdae5.mockapi.io/product/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/");
  };
  return (
    <div className="container-fluid">
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label class="form-label">ID</label>
          <input
            type="number"
            class="form-control"
            name="id"
            value={editData.id}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Name:</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={editData.name}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Username:</label>
          <input
            type="text"
            class="form-control"
            name="username"
            value={editData.username}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={editData.email}
            onChange={handlechange}
            id="inputEmail4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            name="address"
            value={editData.address}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            PhoneNo:
          </label>
          <input
            type="number"
            class="form-control"
            name="phone"
            value={editData.phone}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Company Name:
          </label>
          <input
            type="text"
            class="form-control"
            name="comp_name"
            value={editData.comp_name}
            onChange={handlechange}
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
