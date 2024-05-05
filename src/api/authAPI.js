import http from "../services/apiServices";
import generalConfig from "../GeneralConfig.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginAPI = async ({ username, password }) => {
  await delay(1000); 
  return {data:{ Data: { Token: "123", User: { ID: 1, Name: "Admin" } } }}; 
};

export const registerAPI = async ({ username, password }) => {
  await delay(1000); 
  return {data:{ Data: { Token: "123", User: { ID: 1, Name: "Admin" } } }}; 
};

export const logoutAPI = async () => {
  await delay(1000); 

  return { success: true };
};

/* export const loginAPI = async (userDetails) => {
  const result = await http.post(
    `${generalConfig.API_ENDPOINT_PREFIX}User/Login`,
    userDetails
  );
  return result;
};

export const logoutAPI = async () => {
  const result = await http.post(
    `${generalConfig.API_ENDPOINT_PREFIX}User/Logout`
  );
  return result;
};

export const registerAPI = async (userDetails) => {
  const result = await http.post(
    `${generalConfig.API_ENDPOINT_PREFIX}/user/Register`,
    userDetails
  );
  return result;
};
 */
