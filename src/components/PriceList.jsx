"use client";
import React, { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import Price from "@/data/paket.json";
import BoxPaket from "./BoxPaket";

const PriceList = () => {
  const [selectedIndex, setSelectedIndex] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setchoice] = useState(0);

  const [inetOnly, setInetOnly] = useState([]);
  const [inetTV, setInetTV] = useState([]);

  const handleTabClick = (id, index) => {
    setSelectedIndex((prevState) => ({
      ...prevState,
      [id]: index,
    }));
  };

  useEffect(() => {
    let dataInetOnly = [];
    let dataInetTV = [];
    Price.map((item) => {
      if (item.istvkabel === true) {
        dataInetTV.push(item);
      } else {
        dataInetOnly.push(item);
      }
    });

    setInetOnly(dataInetOnly);
    setInetTV(dataInetTV);
  }, [Price]);

  return (
    <>
      <div className="p-10">
        <div className="flex flex-col items-start justify-start mb-10 gap-5">
          <h1 className="text-2xl font-bold">Paket Internet Only</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BoxPaket
              dataPrice={inetOnly}
              handleTabClick={handleTabClick}
              selectedIndex={selectedIndex}
              setIsOpen={setIsOpen}
              setchoice={setchoice}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start my-5 gap-5">
          <h1 className="text-2xl font-bold">Paket Internet TV</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <BoxPaket
              dataPrice={inetTV}
              handleTabClick={handleTabClick}
              selectedIndex={selectedIndex}
              setIsOpen={setIsOpen}
              setchoice={setchoice}
            />
          </div>
        </div>
      </div>

      <DialogBox
        isOpen={isOpen}
        choice={choice}
        Price={Price}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default PriceList;
