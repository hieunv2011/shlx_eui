import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../api/course';
import { fetchMe } from '../api/me';
import { fetchProvinces } from '../api/province';
import { fetchTrainnes } from "../api/trainees";
import { fetchOutdoor } from "../api/outdoor";
import { fetchAd } from "../api/attendance_devices";

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

export const useTrainees = (params = {}) => {
  return useQuery({
    queryKey: ['trainees', params],
    queryFn: () => fetchTrainnes(params),
    enabled: true,
  });
};

export const useOutdoor = (params = {}) => {
  return useQuery({
    queryKey: ['outdoor-session', params],
    queryFn: () => fetchOutdoor(params),
    // enabled: true,
    enabled: !!params.trainee_id
  });
};
export const useAd = (params = {}) => {
  return useQuery({
    queryKey: ['attendance_devices', params],
    queryFn: () => fetchAd(params),
    enabled: true,
    // enabled: !!params.trainee_id
  });
};
