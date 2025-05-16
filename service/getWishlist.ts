"use client";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/hooks/instance";
import { LikedProduct } from "@/types/LikedProduct";

const useUserLikes = (userId: number) => {
  return useQuery<LikedProduct[]>({
    queryKey: ["LikedByUser", userId],
    queryFn: () => instance().get(`/like/user/${userId}`).then(res => res.data),
  });
};

export default useUserLikes;
