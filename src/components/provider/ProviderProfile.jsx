import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { getUserService } from "../../services/user";
import {
  saveService,
  updateService,
  doFillService,
} from "../../services/provider";

const ProviderProfile = () => {
  const [obj, doUpdateObj] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    idPic: null,
    category: "",
    expertIn: "",
    experience: "",
    officeAddress: "",
    info: "",
  });
  const [idUrl, setIdUrl] = useState("");

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

  useEffect(() => {
    const ae = localStorage.getItem("active_email");
    doUpdateObj({ ...obj, email: ae });
  }, []);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  const token = localStorage.getItem("token");
  // const getUser = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3003/user/currentuser", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });
  //     if (res.data.status) {
  //     } else {
  //       console.log(res.data.mesage);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getUser = async () => {
    console.log("getUser");
    try {
      const res = await getUserService();
      if (res.data.status) {
        console.log(res.data);
      } else {
        console.log(res.data.mesage);
      }
    } catch (e) {
      console.log("e");
      console.log(e);
    }
  };

  const doUpdateBoth = (event) => {
    var { name, value } = event.target;
    doUpdateObj({ ...obj, [name]: value });
  };

  function loadIdfile(file) {
    var image = document.getElementById("idImage");
    image.src = URL.createObjectURL(file);
  }

  function updateIdObj(event) {
    const file = event.target.files[0];

    if (file) {
      doUpdateObj({ ...obj, ["idPic"]: event.target.files[0] });
      loadIdfile(event.target.files[0]);
    } else {
      doUpdateObj({ ...obj, ["idPic"]: event.target.files[0] });
    }
  }

  async function doSaveWithPic() {
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }

    var response = await saveService(formData);
    console.log(JSON.stringify(response))
  }

  async function doUpdate() {
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }

    var response = await updateService(formData);
    console.log(JSON.stringify(response))
  }

  async function doFill() {
    // var response = await axios.post(url,{email:obj.email});
    var response = await doFillService({ email: obj.email });
    alert(JSON.stringify(response.data));

    doUpdateObj({
      ...obj,
      name: response.data.name,
      phone: response.data.phone,
      address: response.data.address,
      city: response.data.city,
      idPic: response.data.idPic,
    });
    
    setIdUrl("https://serviceswift-backend.onrender.com/uploads/" + response.data.idPic);
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
            <div className="col-md-1 mt-2">
              <input type="button" value="Search" onClick={doFill} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="name"
                  value={obj.name}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Phone"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="phone"
                  value={obj.phone}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Address"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="address"
                  value={obj.address}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="city"
                  value={obj.city}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" onChange={updateIdObj} />
              </Form.Group>
              <img
                id="idImage"
                src={idUrl}
                alt="Preview"
                // onChange={loadfile(this)}
                style={{ width: "300px", height: "200px" }}
              />
            </div>
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Categories"
                className="mb-3"
              >
                <Form.Select name="category" onChange={doUpdateBoth}>
                  <option>Select</option>
                  {categories.map((str, index) => (
                    <option key={index} value={str}>
                      {str}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Expert In"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="expertIn"
                  value={obj.expertIn}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Experience"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="experience"
                  value={obj.experience}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <FloatingLabel
                controlId="floatingInput"
                label="Office Address"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="officeAddress"
                  value={obj.officeAddress}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <FloatingLabel
                controlId="floatingInput"
                label="Other Information"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="info"
                  value={obj.info}
                  onChange={doUpdateBoth}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className="row"></div>
          <p>
            <input type="button" value="Upload Data" onClick={doSaveWithPic} />
          </p>
          <p>
            <input type="button" value="Modify" onClick={doUpdate} />
          </p>
        </div>
      </center>
    </>
  );
};
export default ProviderProfile;
