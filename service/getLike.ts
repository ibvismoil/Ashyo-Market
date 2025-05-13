"use client"
import { instance } from "@/hooks/instance";
import { LikeType } from "@/types/LikeType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const getLikeApiHooks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LikeType) => instance().post("/like/toggle", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LikedByUser"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default getLikeApiHooks;