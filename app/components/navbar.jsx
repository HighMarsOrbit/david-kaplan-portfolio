// @flow strict
"use client"; // TODO remove
import Link from "next/link";
import { LuAlertTriangle } from "react-icons/lu";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="relative w-screen overflow-hidden bg-yellow-400 text-black font-bold text-center py-6 text-xl -mx-[calc(50vw-50%)] flex justify-center items-center">
        <div className="relative flex items-center justify-center">
          <LuAlertTriangle className="inline text-6xl mr-4 text-black" />
          <div className="flex flex-col mx-8">
            <p>UNDER CONSTRUCTION!</p>
            <p className="text-base font-medium">
              More projects, information, and pictures incoming. Please contact
              me at{" "}
              <Link
                href="mailto:dkaplan0901@gmail.com"
                className="underline text-blue-700"
              >
                dkaplan0901@gmail.com
              </Link>{" "}
              for more details!
            </p>
          </div>
          <LuAlertTriangle className="inline text-6xl ml-4 text-black" />
        </div>
      </div>{" "}
      {/* TODO remove this div*/}
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            DAVID KAPLAN
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                HOME
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
