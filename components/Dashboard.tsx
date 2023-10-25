import { motion } from "framer-motion"

export default function Dashboard (){
    return(
        <motion.div
     className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
    >
        {/**Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/**headings */}
            <motion.div
             className="md:-mt-20"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount: 0.5}}
             transition={{duration: 0.5}}
             variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1 , x:0},
             }}
             >
               <h1> eMental</h1>
                <p className="mt-8 text-sm">
                  Unrivalled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes that you dream of .. Get your dream body now.  
                </p>
            </motion.div>
            {/** Actions */}
            <motion.div 
             className="mt-8 flex items-center gap-8 "
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount: 0.5}}
             transition={{delay: 0.2, duration: 0.5}}
             variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1 , x:0},
             }}
            >
                <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white" >
                    Join Now
                </button >
              
            </motion.div>
        </div>
        {/** IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end"
        >
           image
        </div>
    </motion.div>
    )
}