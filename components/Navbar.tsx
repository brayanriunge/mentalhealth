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
              className="font-bold text-2xl"
              style={{ fontFamily: "Bungee Spice, cursive" }}
            >
              eMental {""}
            </h2>

            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full`}>
                <div
                  className={`${flexStyles} text-sm text-primary-gray-500  gap-8`}>
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/" ? "text-gray-20" : ""
                      }`}>
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/Assessment"}>
                    <a
                      className={`${
                        router.pathname === "/Assessment" ? "text-gray-20" : ""
                      }`}>
                     Assessment 
                    </a>
                  </Link>
                 <Link legacyBehavior href="/#contactus">
                  <a className=" text-gray-20">
                   Contact Us
                  </a>
                 </Link>
                 <Link legacyBehavior href="/#contactus">
                   <a  className=" text-gray-20">
                     Community
                   </a>
                 </Link>
                </div>
               {/** left side */}
               <button
                className="rounded-md  px-8 p-2 bg-primary-gray-500"
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
              <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-green-400 fixed right-0 bottom-0 h-full w-[300px] z-40 drop-shadow-xl">
                {/**close icon */}
                <div className="p-4 flex justify-end ">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6 text-gray-20 " />
                  </button>
                </div>
                {/**menu items */}
                <div className=" flex flex-col gap-10 text-2xl ml-[33%]">
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/" ? "text-primary-gray-500" : ""
                      } hover:text-primary-gray-500`}>
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/subdivision"}>
                    <a
                      className={`${
                        router.pathname === "/subdivision"
                          ? "text-primary-gray"
                          : ""
                      } hover:text-primary-gray-500`}>
                      Land Subdivision
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/title"}>
                    <a
                      className={`${
                        router.pathname === "/title" ? "text-primary-gray" : ""
                      } hover:text-primary-gray-500`}>
                      Title Processing
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/buying"}>
                    <a
                      className={`${
                        router.pathname === "/buying" ? "text-primary-gray" : ""
                      } hover:text-primary-gray-500`}>
                      Land Buying and Selling
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/demarcation"}>
                    <a
                      className={`${
                        router.pathname === "/demarcation"
                          ? "text-primary-gray"
                          : ""
                      } hover:text-primary-gray-500`}>
                      Plot Demarcation
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/topographical"}>
                    <a
                      className={`${
                        router.pathname === "/topographical"
                          ? "text-primary-gray"
                          : ""
                      } hover:text-primary-gray-500`}>
                      Topographical Survey
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
