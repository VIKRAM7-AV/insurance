"use client"
import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { category } from "../contants/contants"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"

interface CategoryItem {
  image: string;
  head: string;
  heads: string;
  discription: string;
  url: any;
}

export default function Insurance_options() {
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null); 
  const swiperRef = useRef<SwiperRef | null>(null); 

  const openDialog = (item: any) => {
    setSelectedItem(item); 
  };

  useEffect(() => {
    if (swiperRef.current) {
      if (selectedItem) {
        swiperRef.current.swiper.autoplay.stop(); 
      } else {
        swiperRef.current.swiper.autoplay.start(); 
      }
    }
  }, [selectedItem]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        className="justify-between mx-auto max-w-[1970px] px-4"
        slidesPerView={1.2} 
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        loop={true}
      >
        {category.map((item, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => openDialog(item)} className="cursor-pointer">
              <Image
                src={item.image}
                alt="SliderImages"
                width={359}
                height={100}
                className="rounded-3xl shadow-lg"
              />
              <h1 className="absolute mt-10 ml-8 mr-8 inset-0 text-white text-2xl font-semibold">
                {item.head}
              </h1>
              <h1 className="absolute mt-6 ml-8 mr-8 inset-0 text-white text-xxs font-medium">
                {item.heads}
              </h1>
              <p className="absolute mt-20 ml-8 mr-32 inset-0 text-white text-xs font-medium">
                {item.discription}
              </p>
              <p className="absolute mt-40 ml-8 mr-32 inset-0 bg-white text-sm font-semibold text-gray-900 hover:text-blue-700 duration-200 border-0 rounded-full flex items-center justify-center w-32 h-8">
                View Products
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className={`${selectedItem?.url?.length > 4 ? "w-full md:max-w-[800px]" : ""} w-[77%] rounded-lg`}>
          <DialogHeader>
            <DialogTitle>{selectedItem?.head || "Default Title"}</DialogTitle>
            <DialogDescription>
              {selectedItem?.discription}
            </DialogDescription>
          </DialogHeader>
          {selectedItem?.url && Array.isArray(selectedItem.url) && selectedItem.url.length > 0 ? (
            <DialogTrigger className={`grid gap-5 outline-none focus:ring-0 mt-5 mb-5 
              ${selectedItem.url.length > 4 ? "md:grid-cols-3 gap-3" : "md:grid-cols-2"} 
              sm:grid-cols-1 overflow-y-auto max-h-[400px]`}>
              {selectedItem.url.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 cursor-pointer 
                    ${selectedItem.url.length % (selectedItem.url.length > 4 ? 3 : 2) !== 0 &&
                    index === selectedItem.url.length - 1
                      ? "col-span-full md:justify-center justify-start"
                      : ""}`}>
                  <Image src={item.image} alt={item.head} width={55} height={55} className="rounded" />
                  <span className="font-semibold">{item.head}<p className="text-xs font-medium">{item.discription}</p></span>
                </div>
              ))}
            </DialogTrigger>
          ) : (
            <p className="text-gray-500">No additional details available.</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
