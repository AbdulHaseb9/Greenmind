import { useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [respnav, setrespnav] = useState(false);

  return (
    <>
      <header className="px-5 md:px-12 flex items-center py-7 justify-between">
        <div className="flex items-center">
          <section>
            <img src={logo} alt="Greekmindlogo" />
          </section>
          <section className="ml-8 hidden sm:block">
            <nav>
              <a
                href="#"
                className="text-sm text-[#9E9E9E] px-4 hover:text-black hover:font-semibold transition-all duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-[#9E9E9E] px-4 hover:text-black hover:font-semibold transition-all duration-200"
              >
                Products
              </a>
              <a
                href="#"
                className="text-sm text-[#9E9E9E] px-4 hover:text-black hover:font-semibold transition-all duration-200"
              >
                Contacts
              </a>
            </nav>
          </section>
        </div>
        <div>
          <a href="#" className="mx-3 px-1 hidden sm:inline">
            <i className="fa fa-shopping-cart"></i>
          </a>
          <a href="#" className="mx-3 px-1 hidden sm:inline">
            <i className="fa fa-user"></i>
          </a>
          <a href="#" className="mx-3 px-1 hidden sm:inline">
            |
          </a>
          <a
            href="#"
            className="mx-3 px-1 md:hidden"
            onClick={() => setrespnav(!respnav)}
          >
            <i class="fa-solid fa-bars-staggered"></i>
          </a>
          <a
            href="#"
            className="mx-3 px-1 hidden sm:inline"
          >
            <i class="fa-solid fa-bars-staggered"></i>
          </a>
        </div>
      </header>
      {respnav ? (
        <section className="w-full flex justify-center flex-col items-center sm:hidden mb-9">
          <nav className="text-center">
            <ul>
              <li className="my-3">
                <a
                  href="#"
                  className="text-sm text-[#9E9E9E] px-4 hover:text-black hover:font-semibold transition-all duration-200 my-3"
                >
                  Home
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="text-sm text-[#9E9E9E] px-4 hover:text-black hover:font-semibold transition-all duration-200 my-3"
                >
                  Products
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="text-sm text-[#9E9E9E] px-4 hover:text-black hover:font-semibold transition-all duration-200 my-3"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a
              href="#"
              className="mx-5 px-1 hover:border-b-2 pb-1 hover:border-black"
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
            <a
              href="#"
              className="mx-5 px-1 hover:border-b-2 pb-1 hover:border-black"
            >
              <i className="fa fa-user"></i>
            </a>
          </div>
        </section>
      ) : null}
    </>
  );
};
