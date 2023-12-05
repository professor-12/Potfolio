import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-8 mt-[5.5rem] justify-between">
            <div className="w-[85%] lg:mt-6">
                <h1 className="text-[2.7rem] tracking-tight text-white leading-[1.2] font-bold">
                    Become the{" "}
                    <span className="text-green-400">software engineer</span>{" "}
                    that companies{" "}
                    <span className="text-pink-600">love to hire</span>
                </h1>
                <p className="text-[1.3rem] tracking-tight font-semibold mt-7 text-slate-200">
                    All the{" "}
                    <span className="text-white font-bold">coding courses</span>{" "}
                    you need to excel{" "}
                    <span className="text-white font-bold">in one place.</span>
                </p>
                <button className="p-3 px-6  flex items-center space-x-3 rounded-full mt-8 bg-gradient-to-tr text-white  from-pink-600 to-violet-600 font-semibold ">
                    <span>VIEW COURSE </span> <FaArrowRight />
                </button>
            </div>
            <div className="bg-BgCard   relative overflow-hidden rounded-xl border border-blue-950 h-[23rem]  p-5 px-8">
                <div className="flex flex-row top-0 absolute w-full">
                    <div className="h-[1px]  bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                    <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                </div>
                <div className="space-x-2 flex">
                    <div className="bg-orange-600 rounded-full p-[0.4rem]" />
                    <div className="bg-orange-400 rounded-full p-[0.4rem]" />
                    <div className="bg-teal-300 rounded-full p-[0.4rem]" />
                </div>

                <div className="text-white mt-10 font-[400] normal-case">
                    <div>
                        <span className="text-pink-600">const</span> coder{" "}
                        <span>=</span>{" "}
                        <span className="text-slate-500 text-lg font-semibold">
                            {"{"}
                        </span>
                        <span className="h-[80%]  animate-ping  ml-3  p-[2.5px] bg-white" />
                    </div>
                    <div className="pl-12">
                        name:
                        <span className="ml-4">
                            <span className="text-slate-400 text-xl">'</span>
                            <span className="text-yellow-400">
                                Master Coder
                            </span>
                        </span>
                        <span className="text-slate-400 text-xl">'</span>{" "}
                        <span className="text-slate-400 text-xl">,</span>
                    </div>
                    <div className="pl-12">
                        skills:
                        <span className="ml-4">
                            <span className="text-slate-400 text-xl">'</span>
                            <span className="text-slate-400 text-xl">
                                {" [ "}
                            </span>
                            <span className="text-yellow-400">
                                React
                                <span className="text-slate-400 text-xl">
                                    {" , "}
                                </span>
                                Node
                            </span>
                            <span className="text-slate-400 text-xl">
                                {" ] "}
                            </span>
                        </span>
                        <span className="text-slate-400 text-xl"> </span>{" "}
                        <span className="text-slate-400 text-xl">,</span>
                    </div>
                    <div className="pl-12">
                        hardWorker:       
                        <span className="text-orange-400 text-lg ml-3">true</span>
                        <span className="text-slate-400 text-xl"> ,</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
