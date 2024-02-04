import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { getUserService } from "../../services/user";
import { saveService, updateService, doFillService } from "../../services/client";

const ClientProfile = () => {
  const [obj, doUpdateObj] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    profilePic: null,
    idPic: null,
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [idUrl, setIdUrl] = useState("");

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

  function loadfile(file) {
    var image = document.getElementById("profileImage");
    image.src = URL.createObjectURL(file);
  }
  function loadIdfile(file) {
    var image = document.getElementById("idImage");
    image.src = URL.createObjectURL(file);
  }

  function updateProfileObj(event) {
    const file = event.target.files[0];

    if (file) {
      doUpdateObj({ ...obj, ["profilePic"]: file });
      loadfile(event.target.files[0]);
    } else {
      doUpdateObj({ ...obj, ["profilePic"]: null });
      // setPreviewUrl("");
    }
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
    var url = "http://localhost:3003/client/profile";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }

    var response = await saveService(formData);

    // var response = await axios.post(url, formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // alert(JSON.stringify(response.data));
  }

  async function doUpdate() {
    var url = "http://localhost:3003/client/profile-update";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
      //   alert(obj[x])
    }

    var response = await updateService(formData);

    // var response = await axios.post(url, formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // alert(JSON.stringify(response.data));
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
      profilePic: response.data.profilePic,
      idPic: response.data.idPic,
    });
    // alert(obj.profilePic);
    const imgElement = document.getElementById("profileImage");
    console.log(response.data.profilePic);
    // imgElement.src = response.data.profilePic;
    // loadfile(response.data.profilePic)
    setPreviewUrl("https://serviceswift-backend.onrender.com/uploads/" + response.data.profilePic);
    setIdUrl("https://serviceswift-backend.onrender.com/uploads/" + response.data.idPic);
  }
  console.log(previewUrl);

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
                <Form.Control type="file" onChange={updateProfileObj} />
              </Form.Group>
              <img
                id="profileImage"
                src={previewUrl}
                alt="Preview"
                // onChange={loadfile(this)}
                style={{ width: "300px", height: "200px" }}
              />
            </div>
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
          </div>
          <div className="row"></div>
          <p>
            <input type="button" value="Save" onClick={doSaveWithPic} />
          </p>
          <p>
            <input type="button" value="Update" onClick={doUpdate} />
          </p>
        </div>
      </center>
    </>
  );
};
export default ClientProfile;
