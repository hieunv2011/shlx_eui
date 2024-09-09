import { getFromBaseUrl } from './baseUrl';

export const fetchTrainnes = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${getFromBaseUrl()}trainees`, {
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
