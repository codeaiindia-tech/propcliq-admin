import axios from 'axios';

const Auth_Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQyMjVkMTFmNzRlODJlZmRmODRmYmMiLCJpYXQiOjE3MDkyMzE5ODcsImV4cCI6MTcwOTIzNTU4N30.I_OuXmBXdtnP8fTSly7p4vdZ2OkzHIi4YchRSDY8I7U';

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



    
  
    