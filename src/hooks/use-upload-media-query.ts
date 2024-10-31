import { apiUrl } from "@/constants/apiUrl";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const uploadMedia = async (formData: FormData) => {
  const res = await axios({
    url: `${apiUrl}/api/v1/media`,
    method: "POST",
    data: formData,
  });

  return res.data;
};

export const useMediaQuery = () => {
  return useMutation({
    mutationFn: uploadMedia,
    onSuccess: (data) => {},
    onError: (error) => {},
  });
};
