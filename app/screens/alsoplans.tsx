import Link from "next/link";
import { plans } from "../contants/contants";

export default function Alsoplans() {
  return (
    <>
      <div className="w-[96%] mx-auto">
        <p className="text-sm ml-14 font-bold text-ownblue">ALSO BUY</p>
        <div className="flex flex-wrap mt-6 gap-5 ml-14 ">
            {plans.map((item,index) => (
              <Link key={index} href={item.url}>
              <div className="border-0 bg-slate-100 rounded-md min-w-max px-2 py-2 shadow-xl">
                <p key={index+2} className=" text-xxs ml-1 mt-1 font-Josefin">* {item.subtitle}</p>
                <p key={index+3} className="flex text-sm ml-2 font-medium ">{item.title}</p>
              </div></Link>
            ))}
        </div>
      </div>
    </>
  )
}