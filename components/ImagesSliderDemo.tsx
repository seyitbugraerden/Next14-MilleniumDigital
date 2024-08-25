"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";

export function ImagesSliderDemo() {
  const words = ["Website", "İçerik", "Reklam"];
  const images = [
    "https://cdn.mypanel.link/44f480/s4csgiysyzihw8bm.jpeg",
    "https://static.tildacdn.com/tild3738-3035-4632-b737-643563656236/banner-authors-and-p.jpg",
    "https://wallbox.ru/wallpapers/main/201445/ce3b4d4b65ea7e8.jpg",
  ];
  return (
    <ImagesSlider className="py-[30vh] object-cover" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <FlipWords words={words} /> Taleplerinize <br /> En Uygun Çözümler
        </motion.p>
        <Link href="/hizmetlerimiz">
          <button className="px-4 py-2 backdrop-blur-sm border bg-hover-300/10 border-hover text-white mx-auto text-center rounded-full relative mt-4 hover:bg-hover transition duration-500">
            <span>Hizmetlerimiz →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-hover to-transparent" />
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
