import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

const token = localStorage.getItem('Auth_Token');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axios.defaults.headers.common['Content-Type'] = 'application/json';

const SaveStep1 = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/property/step1`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default SaveStep1;