const API_URL = import.meta.env.VITE_APP_API_URL;
// const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));
const Auth_Token = localStorage.getItem("Auth_Token") || 'NO TOKEN IS SAVED IN LOCAL STORAGE';

export const getProjectList = async () : Promise<any> => {
    try {
    const url = `${API_URL}/project/getProjects`;  
    console.log('hi', url)        
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Brearer ${Auth_Token}`,
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



  export const addProjects  = async (data: any) : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/project';          
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    console.log('reponse' , jsonResponse )
    return jsonResponse
  } catch (error) {
    throw error;
  }
  };
 

 
