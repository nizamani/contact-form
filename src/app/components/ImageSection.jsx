'use client';
import React from 'react';
import MapIcon from "@mui/icons-material/Map";
import DrawIcon from "@mui/icons-material/Draw";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export default function ImageSection() {
  return (
    <div className="hidden md:hidden lg:flex w-[55%] relative py-2 pl-6 pr-2">
    <div
      className="w-full h-64 md:h-auto rounded-lg bg-cover bg-center"
      style={{ backgroundImage: "url('image1.jpg')" }}
    >
      <div className="absolute bottom-10 left-6 md:left-16 text-white">
        <h2 className={`${pacifico.className} text-2xl md:text-3xl`}>
          Hire talented freelancers
        </h2>
        <h2 className={`${pacifico.className} text-2xl md:text-3xl`}>
          We are a team of top-rated talent.
        </h2>
        <div className="mt-4 flex gap-4">
          <div className="bg-gray-200/40 p-3 rounded-lg text-white text-sm flex items-center space-x-2">
            <MapIcon fontSize="large" />
            <div>Access our global talent<br /> with 100,000+ world-class developers.</div>
          </div>
          <div className="bg-gray-200/40 p-3 rounded-lg text-white text-sm flex items-center space-x-2">
            <DrawIcon fontSize="large" />
            <div>Explore projects and pick<br /> the perfect developer for you.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
