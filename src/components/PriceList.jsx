import React from "react";
import { FaCheckCircle } from "react-icons/fa";

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
  },
];

const PriceList = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Price.map((item, idx) => {
          return (
            <div
              key={idx}
              className="p-6 rounded-lg shadow-lg border-t-4 border-red-900"
            >
              <div className="flex flex-col">
                <h1 className="text-xl text-red-700 uppercase font-bold">
                  {item.name}
                </h1>
                <div className="flex justify-center font-extrabold items-end gap-1 py-6">
                  <div className=" flex text-4xl items-start gap-1">
                    <p className="text-red-700 text-lg">Rp</p>
                    <h1>{item.price}</h1>
                  </div>
                  <div>
                    <p className="text-red-700 mb-1">000</p>
                  </div>
                </div>
                {/* <h1>{item.price}</h1> */}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceList;
