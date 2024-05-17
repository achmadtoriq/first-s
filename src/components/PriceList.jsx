"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Price = [
  {
    name: "Happy pro",
    price: 200,
    spec: [
      "Unlimited up to 30 Mbps",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-blue-700", "text-blue-500"],
  },
  {
    name: "Happy Premium",
    price: 200,
    spec: [
      "Unlimited up to 30 Mbps",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-yellow-700", "text-yellow-500"],
  },
  {
    name: "Happy Ekonomi",
    price: 200,
    spec: [
      "Unlimited up to 30 Mbps",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-red-700", "text-red-500"],
  },
  {
    name: "Stream Pro",
    price: 200,
    spec: [
      "Unlimited up to 30 Mbps",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-green-700", "text-green-500"],
  },
  {
    name: "Gamming",
    price: 200,
    spec: [
      "Unlimited up to 30 Mbps",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-purple-700", "text-purple-500"],
  },
  {
    name: "Bisnis",
    price: 200,
    spec: [
      "Unlimited up to 30 Mbps",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-orange-700", "text-orange-500"],
  },
];

const PriceList = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Price.map((item, idx) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              key={idx}
              className={`p-6 rounded-lg shadow-lg border-t-4 ${item.class[0]} bg-gray-300/50`}
            >
              <div className="flex flex-col">
                <h1 className={`text-xl ${item.class[1]} uppercase font-bold`}>
                  {item.name}
                </h1>
                <div className="grid grid-cols-1 font-extrabold  gap-1 py-6">
                  <div className="flex justify-center items-end">
                    <div className=" flex text-4xl items-start gap-1">
                      <p className={`${item.class[1]} text-lg`}>Rp</p>
                      <h1 className={`${item.class[1]} text-5xl`}>
                        {item.price}
                      </h1>
                    </div>
                    <div>
                      <p className={`${item.class[1]} mb-1`}>000</p>
                    </div>
                  </div>
                  <p className={`text-black text-md font-medium`}>Per Bulan</p>
                </div>
                <div className="grid grid-cols-1 text-left">
                  {item.spec.map((item, idx) => {
                    return (
                      <div key={idx} className="py-1 flex items-center text-sm">
                        <FaCheckCircle className="mr-2 text-green-900" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-center pt-10">
                <button className="bg-green-900 text-white px-4 py-2 rounded-lg font-bold">
                  Daftar Sekarang
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceList;
