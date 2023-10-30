import { motion } from "framer-motion"
import Link from "next/link";

const childVariant={
 hidden: {opacity:0, scale:0.9},
 visible: {opacity:1, scale:1}
}
  
type Props = {
 icon: JSX.Element;
 title: string;
 description:string;
}
export default function Cards({icon, title, description}:Props){
    return(
    <motion.div
     variants={childVariant}
     className='mt-5 rounded-md border-2 border-gray-100 py-16 px-5 text-center'
    >
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <Link legacyBehavior href="/#contactus">
            <a className=" text-gray-20">
            <p>Learn More</p>
             </a>
        </Link>
                
        
    </motion.div>
    )
}