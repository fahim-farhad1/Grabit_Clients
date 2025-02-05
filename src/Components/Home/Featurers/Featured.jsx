import freeSheping from '../../../assets/icons/truck-moving.png';
import support from '../../../assets/icons/hand-holding-seeding.png';
import returnProducts from '../../../assets/icons/badge-percent.png';
import payments from '../../../assets/icons/donate.png';

const Featured = () => {
  return (
    <div className="flex  gap-8 my-10">
      <div className="p-5 border flex flex-col items-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
      <img className='h-12 w-12' src={freeSheping} alt="" />
        <p className="text-lg text-secondary font-semibold">Free Shipping</p>
        <p className="text-center">Free shipping on order above 990+ TK</p>
      </div>
      <div className="p-5 border flex flex-col items-center rounded hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
      <img className='h-12 w-12' src={support} alt="" />
        <p className="text-lg text-secondary font-semibold">24X7 Support</p>
        <p className="text-center">Contact us 24 hours a day, 7 days a week</p>
      </div>
      <div className="p-5 border flex flex-col items-center rounded hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
      <img className='h-12 w-12' src={returnProducts} alt="" />
        <p className="text-lg text-secondary font-semibold">30 Days Return</p>
        <p className="text-center">Simply return it within 30 days for an exchange</p>
      </div>
      <div className="p-5 border flex flex-col items-center rounded hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
      <img className='h-12 w-12' src={payments} alt="" />
        <p className="text-lg text-secondary font-semibold">Payment Secure</p>
        <p className="text-center">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
  );
};

export default Featured;
