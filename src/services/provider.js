import { publicRequest } from "./axios-config";

const saveService = (data) => {
  return publicRequest.post("provider/profile", data);
};

const updateService = (data) => {
  return publicRequest.post("provider/profile-update", data);
};

const doFillService = (data) => {
  return publicRequest.post("provider/profile-fill", data);
};
const getCitiesService = () => {
  return publicRequest.post("provider/fetch-cities");
};
const getCategoriesService = () => {
  return publicRequest.post("provider/fetch-categories");
};
const getProvidersService = (data) => {
    return publicRequest.post("provider/fetch-providers",data);
  };

export {
  saveService,
  updateService,
  doFillService,
  getCitiesService,
  getCategoriesService,
  getProvidersService
};
