const API_URL = import.meta.env.VITE_APP_API_URL;

const getAuthHeaders = (): HeadersInit => {
  const token =
    localStorage.getItem('Auth_Token') ||
    localStorage.getItem('token') ||
    '';

  return {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  };
};

export const getLeadListingData = async (): Promise<any> => {
  try {
    const url = `${API_URL}/lead`;
    console.log('lead url:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    const jsonResponse = await response.json();
    console.log('response lead', jsonResponse);

    return jsonResponse?.data || [];
  } catch (error) {
    throw error;
  }
};

export const getPackageDetails = async (): Promise<any> => {
  try {
    const url = `${API_URL}/auth/profile`;
    console.log('profile url:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    const jsonResponse = await response.json();
    console.log('response package', jsonResponse);

    return jsonResponse || {};
  } catch (error) {
    throw error;
  }
};

export const getPropertyListing = async (): Promise<any> => {
  try {
    const url = `${API_URL}/property/listing`;
    console.log('property listing url:', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    const jsonResponse = await response.json();
    console.log('response property listing', jsonResponse);

    return jsonResponse?.data || [];
  } catch (error) {
    throw error;
  }
};