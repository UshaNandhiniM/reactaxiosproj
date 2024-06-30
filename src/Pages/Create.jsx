
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
  const [createData, setcreateData] = useState({
    p_id: "",
    name: "",
    image: "",
    price: "",
    description: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setcreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        'https://6680d76956c2c76b495cdae5.mockapi.io/product/',
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/");
  };
    return (
      
           <div className="container-fluid ml-5">
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label class="form-label">ID</label>
          <input
            type="number"
            class="form-control"
            name="id"
            value={createData.id}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Name:</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={createData.name}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Username:</label>
          <input
            type="text"
            class="form-control"
            name="username"
            value={createData.username}
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
            value={createData.email}
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
            value={createData.address}
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
            value={createData.phone}
            onChange={handlechange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Company_Name:
          </label>
          <input
            type="text"
            class="form-control"
            name="comp_name"
            value={createData.comp_name}
            onChange={handlechange}
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
     
    );
};

export default Create;