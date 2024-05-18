"use client"; // if you use app dir, don't forget this line
import React from "react";
import dynamic from "next/dynamic";
import { color } from "framer-motion";
const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => "Loading...",
});

const RadialBar = ({speed}) => {
  const option = {
    chart: {
      height: 330,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#E8E8E8",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 0,
            opacity: 0,
          },
        },
        track: {
          background: "#E8E8E8",
          strokeWidth: "70%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 0,
            opacity: 0.4,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: 20,
            show: true,
            color: "#888",
            fontSize: "12px",
          },
          value: {
            formatter: function (val) {
              return speed[0];
            },
            color: "#888",
            fontSize: "18px",
            show: true,
            offsetY: -10,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#FFA200"],
    labels: ["Mbps"],
  };

  return (
    <>
      <ApexChart type="radialBar" options={option} series={[speed[1]]} width="50%" height={330} />
    </>
  );
};

export default RadialBar;
