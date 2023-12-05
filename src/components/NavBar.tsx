import Logo from "./Logo";
const NavBar = () => {
    const List = new Array(5).fill("Subscribe");
    return (
        <div className="lg:flex  space-x-2 h-16 justify-between items-center w-full">
            <Logo />
                <ul className="flex items-center space-x-5">
                      {
                            List.map((e) => (
                                  <li className="text-slate-300 cursor-pointer font-semibold"><a href="#">{e}</a></li>
                            ))
                      }

                      <button className="bg-violet-600 px-3 font-semibold p-2 rounded-full text-white">Member Area</button>
            </ul>
        </div>
    );
};

export default NavBar;
