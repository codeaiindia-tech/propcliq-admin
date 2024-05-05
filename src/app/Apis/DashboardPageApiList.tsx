const API_URL = import.meta.env.VITE_APP_API_URL;
const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));

export const getLeadListingData  = async () : Promise<any> => {
  try {
  const url = `${API_URL}/lead`;  
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

export const getPackageDetails  = async () : Promise<any> => {
  try {
  const url = `${API_URL}/auth/profile`;  
  console.log('hiiiiiii', url)        
  const reqOpts: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
  };

  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse packageeeeee' , jsonResponse )
  return jsonResponse;
} catch (error) {
  throw error;
}
};


export const getPropertyListing  = async () : Promise<any> => {
  try {
  const url = `${API_URL}/property/listing`;  
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






    
  
    