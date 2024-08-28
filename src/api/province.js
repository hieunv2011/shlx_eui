import { getFromBaseUrl } from './baseUrl';

export const fetchProvinces = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${getFromBaseUrl()}provinces`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
