import { BASE_URL } from "./baseUrl";
export const login = async (credentials) => {
    const response = await fetch(`${BASE_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to login');
    }
  
    return await response.json();
  };