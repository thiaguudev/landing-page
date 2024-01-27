import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

type TestimonalItemProps = {
  name: string;
  job: string;
  children: React.ReactNode;
  pictureSrc: string;
};

export default function TestimonalItem({
  name,
  job,
  pictureSrc,
  children,
}: TestimonalItemProps) {
  return (
    <div className="flex items-start justify-center gap-2  w-[450px] rounded-[20px] py-7 px-9 bg-white">
      <Image
        src={pictureSrc}
        alt="Profile testimonial"
        width={57}
        height={57}
      />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <strong className="text-2xl">{name}</strong>
            <div className="flex gap-1">
              {Array.from(new Array(5)).map((item, index) => (
                <Star key={index} color="#009379" fill="#009379" />
              ))}
            </div>
          </div>
          <span className="text-[#B9B9B9]">{job}</span>
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
}
