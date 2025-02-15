import Alsoplans from "./screens/alsoplans";
import Home_first from "./screens/header";
import Insurance_options from "./screens/insurence_option";

export default function Home() {
  return (
    <>
      <div className="h-96 font-Poppins ">
        <Home_first />
      </div>
      <div className="h-72 mt-72 sm:mt-80 md:mt-90 lg:mt-36 w-[94%] ml-4 sm:ml-10 md:ml-14 flex font-Poppins">
        <Insurance_options />
      </div>
      <div className="h-64 mt-8 flex">
        <Alsoplans />
      </div>
      <div className="h-64 mt-8 flex">
        
      </div>
    </>

  );
}
