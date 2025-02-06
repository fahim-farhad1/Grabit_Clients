import email from "../../assets/icons/mail.png";
import contact from "../../assets/icons/support.png";
import location from "../../assets/icons/location.png";

const ContactInfo = () => {
  return (
    <div className="flex my-10 justify-between gap-10">
      <div className="p-5 border flex flex-col items-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl w-full">
        <img className="h-12 w-12" src={email} alt="" />
        <p className="text-lg text-secondary font-semibold">E-mail</p>
        <a className="text-center">support@grabit.com</a>
        <a className="text-center">help@grabit.com</a>
      </div>
      <div className="p-5 border flex flex-col items-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl w-full">
        <img className="h-12 w-12" src={contact} alt="" />
        <p className="text-lg text-secondary font-semibold">Contact Number</p>
        <a className="text-center">(+880)18224-23585</a>
        <a className="text-center">(+880)1797170723</a>
      </div>
      <div className="p-5 border flex flex-col items-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl w-full">
        <img className="h-12 w-12" src={location} alt="" />
        <p className="text-lg text-secondary font-semibold">Address</p>
        <a className="text-center">House 15, Sher_E Bangla Road, Katashur, Mohammadpur, Dhaka-1207</a>
      </div>
    </div>
  );
};

export default ContactInfo;
