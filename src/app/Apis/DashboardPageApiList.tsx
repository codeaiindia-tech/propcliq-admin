import axios from 'axios';

const Auth_Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRkZjUyOGE1ZGYwMzVmMGQxYWY1MTEiLCJpYXQiOjE3MDkyOTQ1NTIsImV4cCI6MTcwOTI5ODE1Mn0.64ZxS6LQr3yznBf4sKgNOGDGcHRnZGMmOY7YT6sSgCc';








export const getLeadListingData  = async () : Promise<any> => {
  try {
  const url = 'https://api.propcliq.com/lead';  
  console.log('hi', url)        
  const reqOpts: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
  };

  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse lead' , jsonResponse )
  return jsonResponse.data;
} catch (error) {
  throw error;
}
};


export const getPropertyListing  = async () : Promise<any> => {
  try {
  const url = 'https://api.propcliq.com/property/listing';  
  console.log('hi', url)        
  const reqOpts: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
  };

  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse lead' , jsonResponse )
  return jsonResponse.data;
} catch (error) {
  throw error;
}
};






    
  
    