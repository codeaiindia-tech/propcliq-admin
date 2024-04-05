const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));

export const sendOtp  = async (data: any) : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/auth/login';          
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

  
  export const verifyOtp  = async (data: any) : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/verify-otp/login';          
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

  export const verifyOtpOnPhone  = async (data:any) : Promise<any> => {
    try {
    const url = '  https://api.propcliq.com/verify-otp/login-with-phone';         
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw error;
  }
  };

  export const sendOtpToPhone  = async (data: any) : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/auth/login-with-phone';          
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


  export const verifyToken  = async () : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/auth/profile';         
    const reqOpts: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Auth_Token
      },
    };
  
    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw error;
  }
  };






  export const  userRegister= async (data: any) : Promise<any> => {
    try {
    const url = 'https://api.propcliq.com/auth/register';          
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
