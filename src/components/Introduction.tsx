const Introduction = () => {
  return (
      <div className="flex py-32 flex-col justify-center items-center text-white p-6 space-y-6">
          <h1 className="text-violet-500 capitalize font-medium">HELLO ,</h1>
          <h1 className="text-4xl font-bold">I'm Mosh Hamedani.</h1>
          <p className="text-slate-300 text-[1.3rem] leading-8 text-center lg:w-[60%]">
              Are you feeling stuck or overwhelmed in your coding journey? Don't
              worry, I've got your back! Together, we'll work to level up your
              skills, increase your earning potential, and build a brighter
              future.
          </p>
          <video className="lg:w-[60%] rounded" controls loop src="https://res.cloudinary.com/codewithmosh/video/upload/v1685377456/promo-videos/website-intro.mp4"></video>
      </div>
  );
}

export default Introduction