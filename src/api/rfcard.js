import { getFromBaseUrl } from './baseUrl';

const COURSE_API_URL = `${getFromBaseUrl()}rfcards`;

export const fetchCard = async (params) => {
  const token = localStorage.getItem('token'); 

  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${COURSE_API_URL}?${query}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tracking devices');
  }
  return response.json();
};