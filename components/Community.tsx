import { motion } from "framer-motion";
import Image from "next/image";
import community from "@/public/community.jpeg";
import Link from "next/link";

export default function Community() {
  return (
    <section className="gap-16  md:h-full pb-4">
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
            <h1 className="font-bold text-3xl">
              Our{" "}
              <span className="font-bold text-3xl text-orange-800">
                Community
              </span>
            </h1>
            <p className="mt-8 text-lg text-montserrat">
              Community is the bedrock of mental health. It offers
              understanding, support, and a sense of belonging. Together, we
              break down stigma, provide resources, and foster resilience for a
              brighter mental health future.
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
            <Link href={"/community"}>
              <button className="rounded-md mb-4 text-montserrat px-8 p-2 bg-primary-gray-500">
                Join Now
              </button>
            </Link>
          </motion.div>
        </div>
        {/** IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end "
        >
          <Image
            src={community}
            alt="community"
            className="shadow rounded-md mb-4"
          />
        </div>
      </motion.div>
    </section>
  );
}
