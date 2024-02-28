import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM3NmI1MzdhYWY5MDIwYThlNzMwYmMiLCJpYXQiOjE3MDc1NzE5NTksImV4cCI6MTcwNzU3NTU1OX0.qUSzMKcIfJQS38-yv_ycEhixvnMft7GqtViajJBbRy8';
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
