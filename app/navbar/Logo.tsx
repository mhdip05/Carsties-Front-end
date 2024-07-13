"use client";

import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { useParamsStore } from "../hooks/useParamsStore";

export default function Logo() {
  const reset = useParamsStore((state) => state.reset);

  return (
    <div
      className="cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500"
      onClick={reset}
    >
      <AiOutlineCar size={34} />
      <div>Carsties Auctions</div>
    </div>
  );
}
