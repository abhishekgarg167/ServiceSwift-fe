import React, { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { json, Navigate, useNavigate } from "react-router-dom";
// import LoginComp from "../components/LoginComp";
import { loginService } from "../services/user";

function Login({ setShowLogin }) {
  const [obj, doUpdateObj] = useState({ email: "", pwd: "", usertype: "" });
  const doUpdateBoth = (event) => {
    var { name, value } = event.target;
    doUpdateObj({ ...obj, [name]: value });
  };
  const navigate = useNavigate();

  async function doLogin() {
    // var url = "http://localhost:3003/user/login-process"
    // var response = await axios.post(url,obj);
    var response = await loginService(obj);
    alert(JSON.stringify(response.data));
    if (response.data.status === true) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("active_email", response.data.user.email);
      // alert(active_email)
      if (response.data.user.usertype === "Client") {
        navigate("/client");
      } else {
        navigate("/provider");
      }
    } else {
      alert(response.data.message);
    }
  }
  return (
    <div className="d-flex justify-content-center">
    <div className="col-md-8 mt-3">
      <div className="row mt-3">
        <div className="col-md-8">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              value={obj.email}
              onChange={doUpdateBoth}
            />
          </FloatingLabel>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-8">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="pwd"
              value={obj.pwd}
              onChange={doUpdateBoth}
            />
          </FloatingLabel>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
        <input
          type="button"
          className="btn btn-primary"
          value="Login"
          onClick={doLogin}
        />
        </div>
      </div>

      </div>
    </div>
  );
}

export default Login;
