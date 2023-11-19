import Image from "next/image";
import Link from "next/link";
import google from "@/public/Homepic.jpeg";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function Login() {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [serverErrors, setServerErrors] = useState("");

  // if (session) {
  //   router.replace("/");
  //   return null;
  // }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    try {
      const response = await signIn("credentials", {
        email: form.get("email") as string,
        password: form.get("password") as string,
        redirect: false, // Set this to true if you want to redirect after successful login
      });

      if (response?.status === 401) {
        setServerErrors("Invalid Password or Email Does Not Exist");
      }
      if (response?.ok) {
        toast.success("login successfully");
      }

      if (response?.error) {
        // Handle login error
        console.error(response.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  //google handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "/" });
  }

  return (
    <div className="flex min-h-full bg-blue-400 gap-16 py-10 mb-0 md:h-full md:pb-20">
      <div className="  bg-slate-50 m-auto  h-3/4 rounded-md mx-auto p-6  max-w-md w-full  mt-10  mb-40">
        {/* Login form */}
        <div className=" flex flex-col text-center gap-10 h-full rounded-md">
          <div className="m-auto px-4 py-4">
            <div>
              <h1 className="font-bold text-4xl text-gray-800 font-montserrat py-4">
                {" "}
                Login
              </h1>
            </div>
            {serverErrors && (
              <div
                className="mb-4 rounded-lg border border-red-600 bg-red-50 p-4 text-sm text-red-800"
                role="alert"
              >
                {serverErrors}
              </div>
            )}
            <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
              <div className="flex border border-gray-400  rounded-md relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none "
                />
                <span className="icon flex items-center px-4 ">
                  <HiAtSymbol className="h-[25px] w-[25px]" />
                </span>
              </div>
              <div className="flex border border-gray-400  rounded-md relative ">
                <input
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none"
                />
                <span
                  className="icon flex items-center px-4  "
                  onClick={() => setShow(!show)}
                >
                  <HiFingerPrint className="h-[25px] w-[25px]" />
                </span>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 rounded-md to-indigo-500 py-3 text-gray-50 text-lg
                            hover:bg-gradient-to-r  hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700 hover:border"
                >
                  Login
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="w-full py-3 border flex justify-between items-center gap-4  rounded-lg hover:bg-gray-300"
                >
                  <p className="text-montserrat ml-2">Sign in with Google</p>
                  <Image
                    src={google}
                    height={30}
                    width={30}
                    alt="google"
                    className="rounded-full"
                  />
                </button>
              </div>
            </form>
            <p>
              Not yet Registered
              <Link
                legacyBehavior
                href={"/register"}
                className="text-center text-gray-400"
              >
                <a className="text-blue-700"> Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
