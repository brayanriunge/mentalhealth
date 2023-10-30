import useMediaQuery from "@/hooks/userMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "@/public/Logo.jpeg";
import {HiOutlineX} from "react-icons/hi"
import {HiBars3} from "react-icons/hi2"


export default function Navbar() {
  const router = useRouter();
  const flexStyles = "flex items-center justify-between ";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  

  return (
    <nav>
      <div className={`${flexStyles} w-full top-0 z-30 fixed py-2  bg-primary-gray-200 shadow`}>
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <div className={`${flexStyles} w-full gap-10`}>
            {/**left side */}
            {/**put logo here  */}
            <Image src={Logo} alt="logo" width={90} height={20} className="rounded-full" />
            <h2
              className="font-bold text-red-500 text-3xl text-montserrat"
              
            >
              eMental {""}
            </h2>

            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full text-montserrat`}>
                <div
                  className={`${flexStyles} text-sm text-primary-gray-500  gap-8`}>
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/assessment"}>
                    <a
                      className={`${
                        router.pathname === "/assessment" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                     Assessment 
                    </a>
                  </Link>
                  <Link legacyBehavior href="/articles">
                  <a className={`${
                        router.pathname === "/articles" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                   Articles
                  </a>
                 </Link>
                 
                 <Link legacyBehavior href="/community">
                   <a className={`${
                        router.pathname === "/community" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                     Community
                   </a>
                 </Link>
                 <Link legacyBehavior href="/#contactus">
                  <a className={`${
                        router.pathname === "/#contactus" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                   Contact Us
                  </a>
                 </Link>
                </div>
               {/** left side */}
               <button
                className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500"
               >
                Sign Up
              </button>
              </div>
            ) : (
              <button
                className="rounded-full p-2 bg-secondary-gray-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <HiBars3 className="h-6 w-6 " />
              </button>
            )}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-green-400 fixed right-0 bottom-0 h-full w-[300px] z-40 p-5 text-montserrat drop-shadow-xl">
                {/**close icon */}
                <div className="p-4 flex justify-end ">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6  " />
                  </button>
                </div>
                {/**menu items */}
                <div className=" flex flex-col gap-10 items-center text-justify text-2xl ">
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/assessment"}>
                    <a
                      className={`${
                        router.pathname === "/assessment"
                          ? "text-red-800" : "text-gray-20"
                        } hover:text-red-600`}>
                       Assessment
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/articles"}>
                    <a
                      className={`${
                        router.pathname === "/articles" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                      Articles 
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/Community"}>
                    <a
                      className={`${
                        router.pathname === "/Community" ? "text-red-800" : "text-gray-20"
                      } hover:text-red-600`}>
                      Community
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/contactus"}>
                    <a
                      className={`${
                        router.pathname === "/contactus"
                          ? "text-red-800" : "text-gray-20"
                        } hover:text-red-600`}>
                       Contact Us
                    </a>
                  </Link>
                  
                  <button
                   className="rounded-md  px-8 p-2 bg-primary-gray-500"
                  >
                   Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
