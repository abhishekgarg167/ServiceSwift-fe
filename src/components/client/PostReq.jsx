import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { postReqService } from "../../services/client";

const PostReq = () => {
  const [obj, doUpdateObj] = useState({
    email: "",
    category: "",
    taskDetails: "",
    upToDate: "",
    location: "",
    contact: "",
  });

  const categories = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "HVAC Technician",
    "Painter",
    "Mechanic",
    "Landscaper",
    "Roofing Contractor",
    "Locksmith",
    "Plasterer/Drywaller",
    "Appliance Repair Technician",
    "Pest Control Specialist",
    "General Contractor",
    "Tile Setter",
    "Mason",
    "Window Installer",
  ];

  const doUpdateBoth = (event) => {
    var { name, value } = event.target;
    doUpdateObj({ ...obj, [name]: value });
  };

  async function doSave() {
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response= await postReqService(formData)
    console.log(response);
  }

  return (
    <>
      <center>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="email"
                  value={obj.email}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Category"
                className="mb-3"
              >
                <Form.Select name="category" onChange={doUpdateBoth}>
                  <option>Select</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Task Details"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="taskDetails"
                  value={obj.taskDetails}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Up To Date"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="upToDate"
                  value={obj.upToDate}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Location"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="location"
                  value={obj.location}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Contact"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="contact"
                  value={obj.contact}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row"></div>
          <p>
            <input type="button" value="Save" onClick={doSave} />
          </p>
        </div>
      </center>
    </>
  );
};
export default PostReq;
