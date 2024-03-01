import axios from 'axios';

const Auth_Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWRkZjUyOGE1ZGYwMzVmMGQxYWY1MTEiLCJpYXQiOjE3MDkyOTAwNjMsImV4cCI6MTcwOTI5MzY2M30.vqqbvWFghBc4_0mm5OOXIiNOwKMxkHMov5inz9sZl_k';

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






    
  
    