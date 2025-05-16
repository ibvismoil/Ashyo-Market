"use client";
import React, { useEffect, useState } from "react";
import { IMG_API } from "@/hooks/getEnv";
import useUserLikes from "@/service/getWishlist";
import { useRouter } from "next/navigation";
import getLikeApiHooks from "@/service/getLike"; // предполагается, что есть
import { WishlistIcon } from "@/assets/icons";
import { toast } from "sonner";

const WishlistApi = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();
  const likeMutation = getLikeApiHooks();
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.id) {
          setUserId(parsedUser.id);
        }
      } catch (err) {
        console.error("Ошибка при разборе user из localStorage", err);
      }
    }
  }, []);

  const { data: likedProducts, isLoading, error } = useUserLikes(userId ?? 0);

  useEffect(() => {
    if (likedProducts) {
      const map = likedProducts.reduce((acc, prod) => {
        acc[prod.id] = prod.is_liked || false;
        return acc;
      }, {} as Record<number, boolean>);
      setLikedMap(map);
    }
  }, [likedProducts]);

  const handleWishlistToggle = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || !user.id) {
      toast.error("Вы не авторизованы");
      return;
    }
    likeMutation.mutate(
      { productId, userId: user.id },
      {
        onSuccess: (res: any) => {
          setLikedMap((prev) => {
            const newLiked = !prev[productId];
            toast.success(res?.message || (newLiked ? "Добавлено в избранное" : "Удалено из избранного"));
            return {
              ...prev,
              [productId]: newLiked,
            };
          });
        },
        onError: () => {
          toast.error("Что-то пошло не так");
        },
      }
    );
  };

  if (!userId) return <p>Загрузка пользователя...</p>;
  if (isLoading) return <p>Загрузка избранного...</p>;
  if (error) return <p>Ошибка при загрузке избранного.</p>;

  const handleClick = (id: number) => {
    router.push(`/product_details/${id}`);
  };

  return (
    <div className="grid containers grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {likedProducts?.length === 0 ? (
        <p className="mt-5 font-medium text-[20px]">Список избранного пуст.</p>
      ) : (
        likedProducts.map((product) => {
          const monthlyPayment = Math.ceil(product.price / 12);
          const liked = likedMap[product.id] || false;
          return (
            <div key={product.id} onClick={() => handleClick(product.id)} className="rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer relative">
              <div className="relative bg-[#ebeff3] py-[43px] rounded-[6px] flex items-center justify-center mb-[16px]">
                <img src={`${IMG_API}/${product.image}`} alt={product.name} className="w-full h-40 object-contain" />
                {product.is_aksiya && (
                  <span className="absolute font-semibold top-[15px] left-[15px] text-[14px] text-[#E81504] bg-white py-[7px] px-[10px] rounded-[6px]">
                    Акция
                  </span>
                )}
                <div onClick={(e) => handleWishlistToggle(e, product.id)} className="absolute top-[21px] right-[25px] cursor-pointer transition-transform hover:scale-110">
                  <WishlistIcon className={liked ? "text-[#F02C96]" : "text-[#333]"} />
                </div>
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="line-clamp-2 text-sm text-gray-500 mb-[28px]">{product.summary}</p>
              <div className="flex justify-between items-end">
                <strong className="font-black text-[15px] text-[#0A1729]">
                  {product.price.toLocaleString()} сум
                </strong>
                <p className="bg-[#F02C961A] text-[#F02C96] py-[7px] px-[10px] text-[10px] rounded-[3px]">
                  {product.nasiya} / {monthlyPayment.toLocaleString()} сум
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WishlistApi;
