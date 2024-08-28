// src/hooks/get.js
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../api/course';
import { fetchMe } from '../api/me'; // Đảm bảo đường dẫn đúng
import { fetchProvinces } from '../api/province';

export const useCourses = (params = {}) => {
  return useQuery({
    queryKey: ['courses', params],
    queryFn: () => fetchCourses(params),
    enabled: true, // Luôn kích hoạt query
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe, // Hàm fetchMe đã cập nhật với token
    enabled: true, // Luôn kích hoạt query
  });
};
export const useProvinces = () => {
  return useQuery({
    queryKey: ['provinces'],
    queryFn: fetchProvinces, // Hàm fetchProvinces đã cập nhật với token
    enabled: true, // Luôn kích hoạt query
  });
};
