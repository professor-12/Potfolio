import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import NavBar from "../components/NavBar"
import Stats from "../components/Stats";

const Home = () => {
  return (
      <div className="container text-white px-4 lg:p-0  mx-auto lg:w-[75%]">
              <NavBar />
      <Hero />
      <Introduction />
      <Stats/>
      </div>
  );
}

export default Home