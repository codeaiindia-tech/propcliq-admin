import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRkZjUyOGE1ZGYwMzVmMGQxYWY1MTEiLCJpYXQiOjE3MDkyOTQ1NTIsImV4cCI6MTcwOTI5ODE1Mn0.64ZxS6LQr3yznBf4sKgNOGDGcHRnZGMmOY7YT6sSgCc';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const SaveStep1 = async (data: any) => {
  try {
    const response = await axios.post('https://api.propcliq.com/property/step1', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 
export default SaveStep1;
