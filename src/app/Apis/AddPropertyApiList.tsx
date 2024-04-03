
const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));

export const SaveStep1  = async (data: any) : Promise<any> => {
  try {
  const url = 'https://api.propcliq.com/property/step1';          
  const reqOpts: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
    body: JSON.stringify(data),
  };


  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse' , jsonResponse )
  return jsonResponse.data;
} catch (error) {
  throw error;
}
};

export const UpdateStep1 = async (data: any) : Promise<any> => {
  try {
  const url = 'https://api.propcliq.com/property/updatestep1';          
  const reqOpts: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse' , jsonResponse )
  return jsonResponse.data;
} catch (error) {
  throw error;
}
};


export const SaveStep2 =   async (data: any) => {
            try {
             const url = 'https://api.propcliq.com/property/step2';          
              const reqOpts: RequestInit = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': Auth_Token
                },
                body: JSON.stringify(data),
              };

              const response = await fetch(url, reqOpts);
              const jsonResponse = await response.json();
             console.log('reponse' )
              return jsonResponse.data;
            } catch (error) {
              throw error;
            }
         
}


export const UpdateStep2 = async (data: any) : Promise<any> => {
  try {
  const url = 'https://api.propcliq.com/property/updatestep2';          
  const reqOpts: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse' , jsonResponse )
  return jsonResponse.data;
} catch (error) {
  throw error;
}
};


export const SaveStep3  = async (data: any, propertyId: any) : Promise<any> => {
  try {
      const url = `https://api.propcliq.com/property/step3/${propertyId}`; 
      const formData  = new FormData();

      console.log('data',data)
          
      for (const file of data) {
        console.log('file.name',file.name)
        formData.append( "file",
        file);
      }
        
   

      console.log('formData',formData)

      const reqOpts: RequestInit = {
        method: 'POST',
        headers: {
          'Authorization': Auth_Token
        },
        body: formData,
      };
    
      const response = await fetch(url, reqOpts);

      const jsonResponse = await response.json();
      console.log('reponse' , jsonResponse )
      return jsonResponse.data;
    
  }
  catch (error){
    throw error;
  }
}


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

export const getPropertyDetailById  = async (data:any) : Promise<any> => {
  try {
  const url = `https://api.propcliq.com/property/${data.id}`;  
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


export const deletePropertyDetailById  = async (data:any) : Promise<any> => {
  try { 
  const url = `https://api.propcliq.com/property/${data.id}`;  
  console.log('hi', url)        
  const reqOpts: RequestInit = {
    method: 'DELETE',
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


export const filterPropertySearch = async (data: any) : Promise<any> => {
  try {
  const url = 'https://api.propcliq.com/property/search';  
     
  const reqOpts: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Auth_Token
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, reqOpts);
  const jsonResponse = await response.json();
  console.log('reponse filter Property data' , jsonResponse )
  return jsonResponse.data;
} catch (error) {
  throw error;
}
};




    
  
    