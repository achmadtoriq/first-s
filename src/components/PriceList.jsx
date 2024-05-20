"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import RadialBar from "./RadialBar";
import { Description, Dialog, DialogPanel, DialogTitle, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from "@headlessui/react";

const Price = [
  {
    id: 1,
    name: "Happy pro",
    price: ["239,760"],
    speed: "30 Mbps",
    istvkabel: false,
    cntchannel: "-",
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-blue-700", "text-blue-500", "data-[selected]:bg-blue-500"],
  },
  {
    id: 2,
    name: "Stream Value",
    price: ["239,760", "2.753,910"],
    speed: "50 Mbps",
    istvkabel: false,
    cntchannel: "-",
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: [
      "border-yellow-700",
      "text-yellow-500",
      "data-[selected]:bg-yellow-500",
    ],
  },
  {
    id: 3,
    name: "Stream Pro",
    price: ["239,760", "5.306,910"],
    speed: "200 Mbps",
    istvkabel: false,
    cntchannel: "-",
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-red-700", "text-red-500", "data-[selected]:bg-red-500"],
  },
  {
    id: 4,
    name: "Joy Value",
    price: ["239,760", "3.419,910"],
    speed: "100 Mbps",
    istvkabel: true,
    cntchannel: 119,
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: [
      "border-green-700",
      "text-green-500",
      "data-[selected]:bg-green-500",
    ],
  },
  {
    id: 5,
    name: "Joy Pro",
    price: ["239,760", "4.196,910"],
    speed: "150 Mbps",
    istvkabel: true,
    cntchannel: 119,
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: [
      "border-purple-700",
      "text-purple-500",
      "data-[selected]:bg-purple-500",
    ],
  },
  {
    id: 6,
    name: "Star Value",
    price: ["239,760", "9.746,910"],
    speed: "300 Mbps",
    istvkabel: true,
    cntchannel: 198,
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: [
      "border-orange-700",
      "text-orange-500",
      "data-[selected]:bg-orange-500",
    ],
  },
  {
    id: 7,
    name: "Star Pro",
    price: ["239,760", "17.738,910"],
    speed: "500 Mbps",
    istvkabel: true,
    cntchannel: 204,
    spec: [
      "Unlimited up to [SPEED]",
      "internet only",
      "Wifi Tanpa batas Kuota",
      "Harga Sudah ppn dan sewa alat",
    ],
    class: ["border-rose-700", "text-rose-500", "data-[selected]:bg-rose-500"],
  },
];

const PriceList = () => {
  const [selectedIndex, setSelectedIndex] = useState({});
  const [isOpen, setIsOpen] = useState(false)
  const [choice, setchoice] = useState(0);


  const handleTabClick = (id, index) => {
    setSelectedIndex((prevState) => ({
      ...prevState,
      [id]: index,
    }));
  };

  return (
    <>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {Price.map((item, idx) => {
            let speeds = parseInt(item.speed.replace(" Mbps", ""));
            let prosen = 0;
            switch (speeds) {
              case 30:
                prosen = 50;
                break;
              case 50:
                prosen = 60;
                break;
              case 100:
                prosen = 80;
                break;
              case 150:
                prosen = 85;
                break;
              case 200:
                prosen = 90;
                break;
              case 300:
                prosen = 95;
                break;
              case 500:
                prosen = 100;
                break;
              default:
                prosen = 0;
                break;
            }

            let gold_p = item.price[1]?.split(",");
            let stand_p = item.price[0].split(",");

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
                  <h1
                    className={`text-xl ${item.class[1]} uppercase font-bold`}
                  >
                    {item.name}
                  </h1>
                  {item.price.length > 1 ? (
                    <>
                      <TabGroup
                        className={`text-sm p-3`}
                        selectedIndex={selectedIndex[item.id] || 0}
                        onChange={(index) => handleTabClick(item.id, index)}
                      >
                        <TabList className={`flex justify-center items-center`}>
                          <Tab
                            className={`${item.class[2]} data-[selected]:text-white data-[selected]:border-none bg-white border border-gray-300  py-1 px-4 rounded-l-lg ${item.class[1]}`}
                          >
                            <p className="font-bold">STANDAR</p>
                            {/* <p>Per Bulan</p> */}
                          </Tab>
                          <Tab
                            className={`${item.class[2]} data-[selected]:text-white data-[selected]:border-none bg-white border border-gray-300  py-1 px-4 rounded-r-lg ${item.class[1]}`}
                          >
                            <p className="font-bold">GOLD</p>
                            {/* <p>12 Bulan</p> */}
                          </Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel
                            className={`grid grid-cols-1 font-extrabold  gap-1 py-6`}
                          >
                            <div className="flex justify-center items-end">
                              <div className=" flex text-4xl items-start gap-1">
                                <p className={`${item.class[1]} text-lg`}>Rp</p>
                                <h1 className={`${item.class[1]} text-5xl`}>
                                  {stand_p[0]}
                                </h1>
                              </div>
                              <div>
                                <p className={`${item.class[1]} mb-1`}>
                                  {stand_p[1]}
                                </p>
                              </div>
                            </div>
                            <p className={`text-black text-md font-medium`}>
                              Per Bulan
                            </p>
                          </TabPanel>
                          <TabPanel
                            className={`grid grid-cols-1 font-extrabold  gap-1 py-6`}
                          >
                            <div className="flex justify-center items-end">
                              <div className=" flex text-4xl items-start gap-1">
                                <p className={`${item.class[1]} text-lg`}>Rp</p>
                                <h1 className={`${item.class[1]} text-5xl`}>
                                  {gold_p[0]}
                                </h1>
                              </div>
                              <div>
                                <p className={`${item.class[1]} mb-1`}>
                                  {gold_p[1]}
                                </p>
                              </div>
                            </div>
                            <p className={`text-black text-md font-medium`}>
                              Per Tahun
                            </p>
                          </TabPanel>
                        </TabPanels>
                      </TabGroup>
                    </>
                  ) : (
                    <>
                      <div className="text-sm p-3">
                        <div
                          className={`bg-blue-500 w-[50%] mx-auto text-center text-white border-none border border-gray-300 py-1 px-4 rounded-lg`}
                        >
                          <p className="font-bold">STANDAR</p>
                          {/* <p>Per Bulan</p> */}
                        </div>
                        <div
                          className={`grid grid-cols-1 font-extrabold  gap-1 py-6`}
                        >
                          <div className="flex justify-center items-end">
                            <div className=" flex text-4xl items-start gap-1">
                              <p className={`${item.class[1]} text-lg`}>Rp</p>
                              <h1 className={`${item.class[1]} text-5xl`}>
                                {stand_p[0]}
                              </h1>
                            </div>
                            <div>
                              <p className={`${item.class[1]} mb-1`}>
                                {stand_p[1]}
                              </p>
                            </div>
                          </div>
                          <p className={`text-black text-md font-medium`}>
                            Per Bulan
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="relative mx-auto -top-5">
                    <RadialBar
                      speed={[item.speed.replace(" Mbps", ""), prosen]}
                    />
                  </div>
                  <div className="relative -top-5 grid grid-cols-1 text-left">
                    {item.spec.map((itemdet, idx) => {
                      return (
                        <div
                          key={idx}
                          className="py-1 flex items-center text-sm text-black"
                        >
                          <FaCheckCircle className="mr-2 text-green-900" />
                          <p>{itemdet.replace("[SPEED]", item.speed)}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-center">
                  {/* <Link href={`https://wa.me/6287897042408`} target="blank">
                    {" "} */}
                    <button onClick={() => {
                      setIsOpen(true)
                      setchoice(idx)
                      }} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                      Daftar Sekarang
                    </button>
                  {/* </Link> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 text-black">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-lg space-y-4 bg-white p-12"
              >
                <DialogTitle className="text-lg font-bold">Lengkapi Data</DialogTitle>
                <Description>Kami akan segera menghubungi anda sesuai data yang di inputkan</Description>
                <p>{choice} Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                <div className="flex gap-4">
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                  <button onClick={() => setIsOpen(false)}>Deactivate</button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default PriceList;
