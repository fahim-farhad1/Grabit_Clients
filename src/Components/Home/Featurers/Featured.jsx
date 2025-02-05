import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Featured = () => {
  return (
    <div className="flex  gap-8 mt-10">
      <div className="p-5 border flex flex-col items-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <MdOutlineLocalShipping className="text-primary h-16 w-16" />
        <p className="text-lg text-secondary font-semibold">Free Shipping</p>
        <p className="text-center">Free shipping on order above 990+ TK</p>
      </div>
      <div className="p-5 border flex flex-col items-center rounded hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <MdOutlineSupportAgent className="text-primary h-16 w-16" />
        <p className="text-lg text-secondary font-semibold">24X7 Support</p>
        <p className="text-center">Contact us 24 hours a day, 7 days a week</p>
      </div>
      <div className="p-5 border flex flex-col items-center rounded hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <GiReturnArrow className="text-primary h-16 w-16" />
        <p className="text-lg text-secondary font-semibold">30 Days Return</p>
        <p className="text-center">Simply return it within 30 days for an exchange</p>
      </div>
      <div className="p-5 border flex flex-col items-center rounded hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <RiSecurePaymentLine className="text-primary h-16 w-16" />
        <p className="text-lg text-secondary font-semibold">Payment Secure</p>
        <p className="text-center">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
  );
};

export default Featured;
