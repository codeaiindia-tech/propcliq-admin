const API_URL = import.meta.env.VITE_APP_API_URL;
const Auth_Token = JSON.parse(JSON.stringify(localStorage.getItem("Auth_Token")));

export const sendOtp = async (data: any): Promise<any> => {
  try {
    const url = `${API_URL}/auth/login`;
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    console.log('reponse', jsonResponse)
    return jsonResponse
  } catch (error) {
    throw error;
  }
};


export const verifyOtp = async (data: any): Promise<any> => {
  try {
    const url = `${API_URL}/verify-otp/login`;
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    console.log('reponse', jsonResponse)
    return jsonResponse
  } catch (error) {
    throw error;
  }
};

export const verifyOtpOnPhone = async (data: any): Promise<any> => {
  try {
    const url = `${API_URL}/verify-otp/login-with-phone`;
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

export const sendOtpToPhone = async (data: any): Promise<any> => {
  try {
    const url = `${API_URL}/auth/login-with-phone`;
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    console.log('reponse', jsonResponse)
    return jsonResponse
  } catch (error) {
    throw error;
  }
};


export const verifyToken = async (): Promise<any> => {
  const token = localStorage.getItem('Auth_Token');

  if (!token) {
    return { success: false };
  }

  const response = await fetch(`${API_URL}/auth/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return { success: false };
  }

  return await response.json();
};

export const loginWithVerifiedPhone = async (data: any): Promise<any> => {
  try {
    const url = `${API_URL}/auth/login-with-phone-complete`;
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, reqOpts);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const userRegister = async (data: any): Promise<any> => {
  try {
    const url = `${API_URL}/auth/register`;
    const reqOpts: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, reqOpts);
    const jsonResponse = await response.json();
    console.log('reponse', jsonResponse)
    return jsonResponse
  } catch (error) {
    throw error;
  }
};
