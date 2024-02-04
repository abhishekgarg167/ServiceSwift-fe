import { publicRequest } from "./axios-config";

const saveService = (data) => {
  return publicRequest.post("client/profile", data);
};

const updateService = (data) => {
  return publicRequest.post("client/profile-update", data);
};

const doFillService = (data) => {
  return publicRequest.post("client/profile-fill", data);
};
const postReqService = (data) => {
  return publicRequest.post("client/post-req", data);
};

export { saveService, updateService, doFillService, postReqService };
