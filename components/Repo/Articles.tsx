import { CardType } from "@/types/types";
import { motion } from "framer-motion";
import { FaBrain, FaHeartbeat } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";
import Cards from "./Cards";
import Image from "next/image";
import Assess from "@/public/Assess.jpeg";

const conditions: Array<CardType> = [
  {
    icon: <FaBrain className="h-6 w-6" />,
    title: "Anxiety",
    description:
      "Anxiety is a mental health disorder characterized by excessive worry, fear, and nervousness. It can lead to physical symptoms like rapid heartbeat and sweating, and may interfere with daily activities.",
  },
  {
    icon: <FaHeartbeat className="h-6 w-6" />,
    title: "Depression",
    description:
      "Depression is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a loss of interest or pleasure in activities once enjoyed. It can also lead to physical symptoms and impact daily functioning.",
  },
  {
    icon: <FcMindMap className="h-6 w-6" />,
    title: "Bipolar Disorder",
    description:
      "Bipolar disorder is a mood disorder marked by extreme shifts in mood, energy, and activity levels. Individuals with bipolar disorder experience episodes of mania (elevated mood and high energy) and depression (low mood and energy).",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Article() {
  return (
    <section className="mx-auto min-h-full w-5/6 mb-4 ">
      {/** HEADER */}
      <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className=" basis-3/5 font-montserrat text-3xl text-orange-800 font-bold">
          Articles
        </h1>
        <p className="my-5 text-montserrat">
          We provide articles that describe the conditions that most people have
          and how to handle their situation
        </p>
      </motion.div>

      {/**Benefits */}

      <motion.div
        className="md:flex items-center justify-between gap-8 mt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {conditions.map((condition: CardType) => (
          <Cards
            key={condition.title}
            icon={condition.icon}
            title={condition.title}
            description={condition.description}
          />
        ))}
      </motion.div>
      {/** GRAPHICAL AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between mb-4 gap-20 md:mt-28 md:flex">
        {/** GRAPHIC */}
        <Image
          className="mx-auto shadow-md mb-4 rounded-lg"
          src={Assess}
          alt="assess"
          height={450}
          width={450}
        />
        {/** DESCRIPTION */}
        <div>
          {/** title */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className=" basis-3/5 font-montserrat text-3xl text-orange-800 font-bold">
                Assessment <span className="text-gray-20">Quiz</span>
              </h1>
            </motion.div>
          </div>

          {/**  DESCRIPTION*/}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5 ">
              Discover your mental health journey with our comprehensive
              assessment quiz. This user-friendly tool delves into various
              aspects of mental well-being, providing valuable insights and
              personalized recommendations. Answer thoughtfully and gain a
              deeper understanding of your emotional landscape.
            </p>
            <p className="mb-5">
              Empower yourself today with our assessment quiz, designed to be a
              supportive starting point on your path to mental well-being. Take
              the first step towards a happier, more balanced you.
            </p>
          </motion.div>
          {/** Button*/}
        </div>
      </div>
    </section>
  );
}
