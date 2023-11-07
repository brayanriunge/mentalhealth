import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

interface NavbarProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
}

export default function Nav({ isLoggedIn, onSignOut }: NavbarProps) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1></h1>
          <button
            onClick={onSignOut}
            className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500"
          >
            Sign Out
          </button>
          <Link href={"/dashboard"}>
            <CgProfile className="h-[64px] w-[64px]" />
          </Link>
        </>
      ) : (
        <Link href={"/register"}>
          <button className="rounded-md text-montserrat px-8 p-2 bg-primary-gray-500">
            Sign Up
          </button>
        </Link>
      )}
    </>
  );
}
