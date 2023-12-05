const Stats = () => {
  return (
      <div className="grid w-[80%] mx-auto py-10 lg:gap-4 gap-2 place-content-center  grid-flow-col flex-wrap md:grid-cols-4 lg:grid-rows-none grid-rows-2">
          <div className="bg-[#11152c] overflow-hidden relative border border-indigo-950 flex-col text-center flex justify-center items-center rounded-xl">
              <div className="bg-gradient-to-r absolute from-transparent via-violet-600 to-transparent h-[1px] top-0 w-full" />
              <h1 className="text-4xl font-bold text-violet-500">10M+</h1>
              <p className="text-slate-300 mt-1">Students taught</p>
          </div>
          <div className="bg-[#11152c] overflow-hidden relative border border-indigo-950 flex-col text-center flex justify-center items-center rounded-xl p-7">
              <div className="bg-gradient-to-r absolute from-transparent via-teal-600 to-transparent h-[1px] top-0 w-full" />
              <h1 className="text-4xl font-bold text-teal-500">3M+</h1>
              <p className="text-slate-300 mt-1">Students taught</p>
          </div>
          <div className="bg-[#11152c] overflow-hidden relative border border-indigo-950 flex-col text-center flex justify-center items-center rounded-xl p-7">
              <div className="bg-gradient-to-r absolute from-transparent via-pink-600 to-transparent h-[1px] top-0 w-full" />
              <h1 className="text-4xl font-bold text-pink-500">20+</h1>
              <p className="text-slate-300 mt-1">Students taught</p>
          </div>
          <div className="bg-[#11152c] overflow-hidden relative border border-indigo-950 flex-col text-center flex justify-center items-center rounded-xl p-7">
              <div className="bg-gradient-to-r absolute from-transparent via-orange-600 to-transparent h-[1px] top-0 w-full" />
              <h1 className="text-4xl font-bold text-orange-500">49</h1>
              <p className="text-slate-300 mt-1">Students taught</p>
          </div>
      </div>
  );
}

export default Stats