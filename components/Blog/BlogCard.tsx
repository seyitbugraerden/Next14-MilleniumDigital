import Image from "next/image";
import React from "react";

function BlogCard() {
  return (
    <div>
      <Image
        src="https://picsum.photos/1920/1080"
        alt="blog image"
        width={500}
        height={500}
        className="w-100 rounded-t-2xl"
      />
      <div className="p-4 bg-[#e3e3e3] rounded-b-2xl">
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-2 py-1 text-white text-[10px]">
          Technology
        </span>
        <h2 className="mt-4 font-bold text-2xl">What's New</h2>
        <p className="text-black leading-7 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut
          iure maiores voluptatem iste accusamus dignissimos quidem consequatur
          aliquam architecto.
        </p>
        <div className="flex flex-row items-center gap-3" >
          <div>
            <Image
              src="https://picsum.photos/500/500"
              alt="blog image"
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <div className="flex-col inline-flex">
            <h2 className="font-semibold text-sm">Jane Doe</h2>
            <p className="leading-3 text-[10px] pt-1 pb-0 mb-0">21 Temmuz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
