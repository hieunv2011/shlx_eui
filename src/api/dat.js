import { getFromBaseUrl } from './baseUrl';

const COURSE_API_URL = `${getFromBaseUrl()}/tracking_devices`;

export const fetchDat = async (params) => {
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


export const postDat = async (data) => {
  const token = localStorage.getItem('token');

  const response = await fetch(COURSE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data), // Gửi dữ liệu dưới dạng JSON
  });

  if (!response.ok) {
    throw new Error('Failed to post tracking device');
  }
  return response.json();
};