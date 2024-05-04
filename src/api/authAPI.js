import http from '../services/apiServices';
import generalConfig from '../GeneralConfig.json';

/* const users = [
  {id: 1, username: 'user1', password: 'password1'},
  {id: 2, username: 'user2', password: 'password2'},
];

// Simulated delay function to mimic network requests
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated authentication API functions
export const loginAPI = async ({username, password}) => {
  await delay(1000); // Simulate network delay

  // Check if the user exists and the password matches
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Return user data
  return {id: user.id, username: user.username}; // Return only necessary data for authentication
};

export const registerAPI = async ({username, password}) => {
  await delay(1000); // Simulate network delay

  // Check if the username is already taken
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    throw new Error('Username already exists');
  }

  // Generate a unique ID for the new user
  const id = users.length + 1;

  // Create the new user
  const newUser = {id, username, password};
  users.push(newUser);

  // Return only necessary data for authentication
  return {id: newUser.id, username: newUser.username};
}; */




export const loginAPI = async (userDetails) => {
    const result = await http.post(
        `${generalConfig.API_ENDPOINT_PREFIX}User/Login`,
        userDetails
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
