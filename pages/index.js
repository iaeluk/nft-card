import { useState } from "react";

export default function Home() {

  const [imgHover, setImgHover] = useState(false)


  return (
    <div className="w-screen h-screen text-white flex items-center justify-center">


      <div className="bg-[#14253d] w-[300px] h-[510px] rounded-xl shadow-xl">
        
        <div className='flex flex-col items-center justify-start gap-3'> 
        <div className="w-[85%] h-[45%] mb-2 rounded-lg mt-6 flex items-center justify-center">

        <img onMouseEnter={() => {setImgHover(true)}} className="rounded-lg cursor-pointer" src="/assets/image-equilibrium.jpg" alt="equilibrium image" />

        {imgHover && <div onMouseEnter={() => {setImgHover(true)}} onMouseLeave={() => {setImgHover(false)}} className="absolute cursor-pointer rounded-lg bg-[#00fff78e] w-[255px] h-[255px] flex items-center justify-center">
        <img className="cursor-pointer" src="/assets/icon-view.svg" alt="icon view"/>
        </div>}


        </div>

        <div className="w-[85%] flex flex-col gap-3 border-b border-[#74839a] pb-6">
          <h1 className="text-xl font-bold hover:text-[#00fff7] cursor-pointer">Equilibrium #3429</h1>

          <span className="text-[#74839a] text-sm">
            Our Equilibrium collection promotes balance and calm.
          </span>

          <div className="flex justify-between">
            <div className="text-[#00fff7] font-semibold flex justify-center items-center gap-2">
              <img
                className="rounded-lg"
                src="/assets/icon-ethereum.svg"
                width={12}
                height={12}
                alt="ethereum icon"
              />
              <span className="text-sm">0.041 ETH</span>
            </div>

            <div className="text-[#74839a] flex justify-center items-center gap-2">
              <img
                className="rounded-lg"
                src="/assets/icon-clock.svg"
                width={15}
                height={15}
                alt="clock icon"
              />
              <span className="text-sm">3 days left</span>
            </div>
          </div>
        </div>

        <div className='w-[85%] flex justify-start items-center m-2'>
        <img
                className="rounded-full border border-white mr-3"
                src="/assets/image-avatar.png"
                width={35}
                height={35}
                alt="avatar icon"
              />

              <p className='text-[#74839a] text-sm font-outfit'>Creation of <span className='text-white cursor-pointer hover:text-[#00fff7]'>Jules Wyvern</span></p>

        </div>

        </div>
        

      </div>
    </div>
  );
}
