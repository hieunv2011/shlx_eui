// hooks/post.js
import { dataTagSymbol, useMutation } from '@tanstack/react-query';
import { login } from '../api/login';
import { postDat } from '../api/dat';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem('token', data.access_token);
    },
    onError: (error) => {
      // Xử lý lỗi khi login thất bại
      console.error('Login failed:', error);
    },
  });
};

// Custom hook để thực hiện post dữ liệu mới
export const usePostDat = () => {
  return useMutation({
    mutationFn: postDat,
    onSuccess: (data) => {
      // Xử lý khi gửi thành công
      console.log('Data posted successfully:', data);
    },
    onError: (error) => {
      // Xử lý lỗi khi gửi thất bại
      console.error('Post failed:', error);
    },
  });
};
