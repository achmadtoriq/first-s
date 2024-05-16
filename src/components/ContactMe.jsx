import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <Link href={`#`} target="blank" className="fixed bottom-0 right-0 m-5 lg:m-10 p-3 text-4xl rounded-full bg-green-500 text-white">
        <FaWhatsapp />
      </Link>
    </>
  );
};

export default ContactMe;
