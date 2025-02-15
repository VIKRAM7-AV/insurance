import Image from "next/image";
import life from "@/public/life_health.png";
import option from "@/public/icons/banner.png";
import boost from "@/public/icons/boost.png";

export default function Home_first() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto items-center px-6 py-10">
      
      <div className="flex flex-col text-center lg:text-left ">
        <p className="text-3xl lg:text-4xl mt-3 font-poppins font-thin text-slate-700 lg:ml-20">
          Let’s Find Your
        </p>
        <span className="text-3xl lg:text-4xl text-slate-700 font-poppins font-extrabold lg:ml-20">
          Perfect Protection
        </span>
        
        <div className="mt-4 max-w-lg mx-auto lg:mx-0 lg:ml-20">
          <p className="text-sm">
            Explore personalized plans that safeguard what matters most—your health, home, car, and future.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
          <div className="flex items-center">
            <Image src={option} alt="Option" width={50} height={50} />
            <p className="ml-4 text-blue-800">
              <span className="font-poppins font-bold">50</span> insurers offering <br /> lowest prices
            </p>
          </div>
          
          <div className="flex items-center">
            <Image src={boost} alt="Boost" width={50} height={50} />
            <p className="ml-4 text-orange-700">
              Quick, easy & <br /> hassle-free
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end py-10">
        <Image src={life} alt="banner" width={500} height={500} className=" w-full max-w-4xl sm:max-w-xl lg:max-w-2xl" />
      </div>

    </div>
  );
}
