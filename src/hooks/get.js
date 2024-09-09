import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../api/course';
import { fetchMe } from '../api/me';
import { fetchProvinces } from '../api/province';
import { fetchTrainnes } from "../api/trainees";

export const useCourses = (params = {}) => {
  return useQuery({
    queryKey: ['courses', params],
    queryFn: () => fetchCourses(params),
    enabled: true,
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    enabled: true,
  });
};

export const useProvinces = () => {
  return useQuery({
    queryKey: ['provinces'],
    queryFn: fetchProvinces,
    enabled: true,
  });
};

export const useTrainees = () => {
  return useQuery({
    queryKey: ['trainees'],
    queryFn: fetchTrainnes,
    enabled: true,
  });
};
