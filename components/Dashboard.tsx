import { motion } from "framer-motion";
import Image from "next/image";
import Home from "@/public/home.jpeg";

export default function Dashboard() {
  return (
    <section className="gap-16 bg-gradient-to-r from-blue-400 via-blue-600 to-green-400 py-10 md:h-full min-h-full mt-8 md:pb-0">
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/**Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/**headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1
              className="font-bold text-3xl"
              style={{ fontFamily: "Bungee Spice, cursive" }}
            >
              eMental
            </h1>
            <p className="mt-8 text-montserrat  text-justify">
              Welcome to Our Safe Space for Mental Wellness You're not alone on
              this journey. At eMental, we understand that taking care of your
              mental health is a courageous and vital step towards a brighter
              tomorrow. Whether you're seeking support, information, or simply a
              place to be heard, you've come to the right place. Feel free to
              explore the resources, articles, and services we offer. Remember,
              your well-being is our priority, and we're honored to be a part of
              your journey.
            </p>
          </motion.div>
          {/** Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="rounded-md mb-4 bg-primary-gray-500 px-10 py-2  hover:text-white ">
              Get started
            </button>
          </motion.div>
        </div>
        {/** IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end"
        >
          <Image src={Home} alt="logo" className="shadow rounded-md mb-4" />
        </div>
      </motion.div>
    </section>
  );
}
