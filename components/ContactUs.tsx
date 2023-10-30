import { useForm } from "react-hook-form"
import Image from "next/image";
import Contact from "@/public/ContactUs.jpeg"
import { motion } from "framer-motion";

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
        <section className="mx-auto w-5/6 pt-8 pb-20"
         id="contactus"
        >
            <motion.div 
             className=" basis-3/5 font-montserrat text-3xl font-bold md: w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount: 0.5}}
             transition={{duration: 0.5}}
             variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1 , x:0},
             }}
            >
                <span className="text-orange-800"                >
                    Contact Us
                </span> FOR MORE ASSISTANCE
            </motion.div>
            <p className="text-primary-gray-500 my-5">
                Fill in the form, by typing your message to contacts us through our email. Thank you.
            </p>
            <div className="mt-10 justify-between md:flex gap-8">
              <motion.div
               className="mt-10 basis-3/5 md:mt-0"
               initial="hidden"
               whileInView="visible"
               viewport={{once:true, amount: 0.5}}
               transition={{duration: 0.5}}
               variants={{
                  hidden: {opacity:0, y: 50},
                  visible: {opacity:1 , y:0},
               }}
              >
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
               className=' bg-orange-500 border-4  transition duration-500 hover:text-white hover:border-dotted  mt-5 px-20 py-3 rounded-lg  '
               >
                Submit
               </button>

               </form>
              </motion.div>
              <motion.div
               className="relative mt-16 basis-2/5 md:mt-0"
               initial="hidden"
               whileInView="visible"
               viewport={{once:true, amount: 0.5}}
               transition={{delay: 0.2, duration: 0.5}}
               variants={{
                  hidden: {opacity:0, y: 50},
                  visible: {opacity:1 , y:0},
               }}
              >
                <div className="w-full">
                    <Image src={Contact} alt="cost" height={400} className='rounded-lg'/>
                </div>
              </motion.div>
                
            </div>

        </section>
    )
}