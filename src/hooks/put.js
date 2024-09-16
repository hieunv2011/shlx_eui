// hooks/put.js
import { useMutation } from '@tanstack/react-query';
import { updateTrackingDevice } from '../api/dat/put';

// Custom hook để cập nhật thông tin thiết bị
export const useUpdateTrackingDevice = () => {
  return useMutation({
    mutationFn: updateTrackingDevice,
    onSuccess: (data) => {
      // Xử lý khi cập nhật thành công
      console.log('Device updated successfully:', data);
    },
    onError: (error) => {
      // Xử lý lỗi khi cập nhật thất bại
      console.error('Failed to update the tracking device:', error);
    },
  });
};
