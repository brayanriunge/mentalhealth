import { CardType } from "@/types/types"
import { motion } from "framer-motion"
import {FaBrain, FaHeartbeat} from "react-icons/fa"
import { FcMindMap} from "react-icons/fc"
import Cards from "./Cards"

const conditions: Array<CardType> =[
    {
        icon: <FaBrain className="h-6 w-6"/>,
        title: "Anxiety",
        description:"Anxiety is a mental health disorder characterized by excessive worry, fear, and nervousness. It can lead to physical symptoms like rapid heartbeat and sweating, and may interfere with daily activities.",
    },
    {
        icon: <FaHeartbeat className="h-6 w-6"/>,
        title: "Depression",
        description:"Depression is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a loss of interest or pleasure in activities once enjoyed. It can also lead to physical symptoms and impact daily functioning.",
    },
    {
        icon: <FcMindMap className="h-6 w-6"/>,
        title: "Bipolar Disorder",
        description:"Bipolar disorder is a mood disorder marked by extreme shifts in mood, energy, and activity levels. Individuals with bipolar disorder experience episodes of mania (elevated mood and high energy) and depression (low mood and energy).",
    },
]

const container={
    hidden:{},
    visible:{
        transition:{ staggerChildren: 0.2}
    }
}

export default function Article(){
    return(
    <section className="mx-auto min-h-full w-5/6 py-8">
            {/** HEADER */}
     <motion.div 
     className="md:my-5 md:w-3/5"
     initial="hidden"
     whileInView="visible"
     viewport={{once:true, amount: 0.5}}
     transition={{delay: 0.2, duration: 0.5}}
     variants={{
        hidden: {opacity:0, x: -50},
        visible: {opacity:1 , x:0},
     }}
    >
        <h1 className=" basis-3/5 font-montserrat text-3xl text-orange-800 font-bold">
           Articles
        </h1>
        <p className="my-5 text-sm">
         We provide articles that describe the conditions that most people have 
         and how to handle their situation
        </p>
    </motion.div>
    
    {/**Benefits */}
    
    <motion.div
     className="md:flex items-center justify-between gap-8 mt-2"
     initial = "hidden"
     whileInView="visible"
     viewport={{once:true , amount: 0.5}}
     variants={container}
    >
        {conditions.map((condition: CardType)=>(
            <Cards
             key={condition.title}
             icon={condition.icon}
             title={condition.title}
             description={condition.description}
            />
        ))}
    </motion.div>
        </section>
    )
 
}