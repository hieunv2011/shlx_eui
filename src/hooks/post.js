// hooks/post.js
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/login';

// Custom hook để thực hiện login
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Lưu token vào localStorage hoặc xử lý khi login thành công
      localStorage.setItem('token', data.access_token);
    },
    onError: (error) => {
      // Xử lý lỗi khi login thất bại
      console.error('Login failed:', error);
    },
  });
};
