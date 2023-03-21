import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const About = (props: Props) => {
  return (
    <main id="about" className="w-full sm:h-screen relative p-10 sm:p-40">
      <Image
        src="/assets/background/bgClean2.png"
        alt="Home Background 2"
        fill
        className="absolute -z-10 left-0 top-0 hidden sm:block"
      />

      <Image
        src="/assets/creatures/wave.png"
        alt="Wave"
        width={1920}
        height={1440}
        className="absolute z-20 left-0 opacity-80 -bottom-20 hidden sm:block"
      />

      <div className="flex flex-col justify-center sm:absolute z-30 text-white space-y-8 sm:space-y-20">
        <motion.h1
          whileInView={{ y: [50, 0] }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          viewport={{ once: true }}
          className="heading"
        >
          ABOUT WOC
        </motion.h1>
        <motion.div
          whileInView={{ y: [50, 0] }}
          transition={{
            delay: 0.2,
            ease: 'easeInOut',
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-xl space-x-2 text-justify sm:w-3/4 sm:text-2xl sm:text-left"
        >
          <span>
            GDSC IIIT Kalyani brings to you, yet again, its open-source program
            Winter of Code 3.0 with collaborative efforts from 30+ Google
            Developer Student Clubs. The program will last for a period of 45
            days and is based on the lines of GSoC. Student applicants are
            required to send their proposals to organizations to work on their
            open-source projects while their mentor evaluate them over a course
            of the event. If you dont have a resume here is a template that you
            may use:
          </span>
          <Link
            className="text-blue-400"
            href="https://docs.google.com/document/d/1AsopS8xBI1QAAjJpsdConQvZSLT62ZfrqhIGcPgxAUw/edit?usp=sharing"
            rel="noreffer"
            target="_blank"
          >
            Resume Template
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
