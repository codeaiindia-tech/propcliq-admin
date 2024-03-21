const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));

export const getProjectList = async () : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/project/getProjects';  
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
