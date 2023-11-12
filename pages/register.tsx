import Image from "next/image";
import Link from "next/link";
import google from "@/public/Homepic.jpeg";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { ZodError } from "zod";
import { error } from "console";

export default function RegisterUser() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const [serverErrors, setServerErrors] = useState("");
  const [errors, setErrors] = useState<ZodError | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          password: form.get("password"),
        }),
      });

      if (response.status === 409)
        setServerErrors("Email is already registered");

      if (response.status === 500)
        setServerErrors("Server error, try again later");

      if (response.status === 201) {
        router.replace("/login");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("Form validate errors:", error.errors);
        setErrors(errors);
      }
    }
  }
  //google handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "/" });
  }

  return (
    <div className="flex  bg-blue-400 gap-16 py-10 md:h-full min-h-full  mb-0">
      <div className=" bg-slate-50 m-auto  h-3/4 rounded-md mx-auto p-6  max-w-md w-full">
        {/* Login form */}
        <div className=" flex flex-col text-center gap-10 h-full rounded-md">
          <div className="m-auto px-4 py-4">
            <div>
              <h1 className="font-bold text-4xl text-gray-800 font-montserrat py-4">
                Register
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
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none "
                />
                <span className="icon flex items-center px-4 ">
                  <HiOutlineUser className="h-[25px] w-[25px]" />
                </span>
              </div>
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
                  type={`${show.password ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none"
                />
                <span
                  className="icon flex items-center px-4  "
                  onClick={() => setShow({ ...show, password: !show.password })}
                >
                  <HiFingerPrint className="h-[25px] w-[25px]" />
                </span>
              </div>
              {errors?.errors.map((error, index) => (
                <div>
                  <p key={index}>{error.message}</p>
                </div>
              ))}
              <div className="flex border border-gray-400  rounded-md relative ">
                <input
                  type={`${show.cpassword ? "text" : "password"}`}
                  name="cpassword"
                  placeholder=" Confirm Password"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none"
                />
                <span
                  className="icon flex items-center px-4  "
                  onClick={() =>
                    setShow({ ...show, cpassword: !show.cpassword })
                  }
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
                  Register
                </button>
              </div>
              {errors && (
                <div className="text-red-500 mt-2">
                  {/* Display Zod issues messages */}
                  {errors.issues.map((issue, index) => (
                    <p key={index}>{issue.message}</p>
                  ))}
                </div>
              )}
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
              Have an account?
              <Link
                legacyBehavior
                href={"/login"}
                className="text-center text-gray-400"
              >
                <a className="text-blue-700"> Sign In</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
