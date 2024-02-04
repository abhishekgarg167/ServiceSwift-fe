import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  getCitiesService,
  getCategoriesService,
  getProvidersService,
} from "../../services/provider";
import ProviderInfoCards from "../provider/ProviderInfoCards";

const FindServiceProvider = () => {
  const [obj, doUpdateObj] = useState({
    category: "",
    city: "",
  });
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [providerList, setProviderList] = useState([]);

  const doUpdateBoth = (event) => {
    var { name, value } = event.target;
    doUpdateObj({ ...obj, [name]: value });
  };

  async function doFindProvider() {
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await getProvidersService(formData);
    console.log(JSON.stringify(response.data));
    setProviderList(response.data);
  }

  async function fetchCities() {
    var response = await getCitiesService();
    console.log(JSON.stringify(response.data));
    setCities(response.data);
  }
  async function fetchCategories() {
    var response = await getCategoriesService();
    console.log(JSON.stringify(response.data));
    setCategories(response.data);
  }
  useEffect(() => {
    fetchCities();
    fetchCategories();
  }, []);

  return (
    <>
      <center>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
              >
                <Form.Select name="city" onChange={doUpdateBoth}>
                  <option>Select</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
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
          </div>

          <div className="row">
            <div className="col-md-6">
                {providerList.map((pro, index) => (
                  <ProviderInfoCards
                    name={pro.name}
                    phone={pro.phone}
                    address={pro.address}
                  />
                ))}
            </div>
          </div>
          <p>
            <input type="button" value="Search" onClick={doFindProvider} />
          </p>
        </div>
      </center>
    </>
  );
};
export default FindServiceProvider;
