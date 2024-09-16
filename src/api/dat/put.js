// api/dat/put.js
import { BASE_URL } from '../baseUrl';

// Hàm cập nhật thông tin của thiết bị
export const updateTrackingDevice = async (id, updatedData) => {
  // Log dữ liệu trước khi gửi yêu cầu PUT
  console.log('ID:', id);
  console.log('Dữ liệu được truyền vào API:', updatedData);

  const response = await fetch(`${BASE_URL}/tracking_devices/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Nếu cần token
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update the tracking device');
  }

  return await response.json();
};
