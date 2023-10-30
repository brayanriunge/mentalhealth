import { useForm } from "react-hook-form"
import Image from "next/image";
import Cost from "@/public/Cost.jpeg"

export default function ContactUs(){
    const inputStyles= `mb-5 w-full rounded-lg bg-secondary-300
    px-5 py-3 placeholder-black`
    const {
        register,
        trigger,
        formState:{errors}
    }= useForm();

    const onSubmit = async (e:any)=>{
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }
    return(
        <section className="mx-auto w-5/6 pt-24 pb-32"
        id="contactus">
            <div className="text-2xl font-bold text-primary-gray-500">
                <span style={{ fontFamily: "Bungee Spice, cursive" }}                >
                    Contact Us
                </span> FOR MORE ASSISTANCE
            </div>
            <p className="text-primary-gray-500 my-5">
                Fill in the form, by typing your message to contacts us through our email. Thank you.
            </p>
            <div className="mt-10 justify-between md:flex gap-8">
               <form
               target="_blank"
               onSubmit={onSubmit}
               method="POST"
               action="https://formsubmit.co/riungebrian@gmail.com"
               >
                <input className={inputStyles}
                type="text"
                placeholder="NAME"
                {... register("name",{
                    required: true,
                    maxLength: 100,
                })}
                />
                  {errors.name && (
                    <p className="mt-1">
                        {errors.name.type === "required" && "This field is required"}
                        {errors.name.type === "maxLength" && "Max length is 100 characters"}
                    </p>
                )}

             <input className={inputStyles} 
                type="text"
                placeholder="EMAIL"
               {...register("email",{
                required:true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
               })}
             />
              {errors.email && (
                    <p className="mt-1">
                        {errors.email.type === "required" && "This field is required"}
                        {errors.email.type === "pattern" && "Invalid email address"}
                    </p>
                )}

               <textarea className={inputStyles} 
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                    required:true,
                    maxLength:2000
                })}
               /> 
               {errors.message &&(
                <p className="mt-1">
                    {errors.message.type === "required" && "This field is required"}
                    {errors.message.type ==="maxLength" && "Max characters is 2000"}
                </p>
               )}

               <button type="submit"
               className="bg-secondary-gray-300 text-white mt-5 px-20 py-3 rounded-lg transition duration-500 hover:text-black"
               >
                Submit
               </button>

               </form>
                <div className="mt-16 basis-2/5 md:mt-0">
                    {/* <Image src={Cost} alt="cost" height={450} width={450} className='rounded-lg'/> */}
                </div>
            </div>

        </section>
    )
}