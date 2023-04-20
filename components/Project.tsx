import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type Props = {};

const Project = (props: Props) => {
  const navigate = useRouter();
  return (
    <main className="w-full h-screen sm:h-[120vh] relative">
      <Image
        src="/assets/background/ProjectBG.gif"
        className="-z-10"
        alt="Project BG"
        fill
      />

      <div className="flex h-full items-center">
        <div className="w-1/2 relative h-full justify-between items-center hidden sm:flex">
          <div className="grid grid-cols-3 gap-4 w-3/4 -skew-y-12">
            {Array.from(Array(9).keys()).map((val) => {
              return (
                <motion.div
                  whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: val * 0.1,
                  }}
                  viewport={{ once: true }}
                  key={val}
                  className=""
                >
                  <Image
                    src={`/assets/creatures/ProjectsGrid/${val + 1}.png`}
                    alt={`Project ${val + 1}`}
                    className="rounded-2xl"
                    height={213}
                    width={213}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="sm:w-1/2 text-center sm:text-right space-y-16 px-10 sm:px-16 h-full items-center justify-center sm:items-end flex flex-col text-white">
          <h1 className="heading">Projects</h1>
          <p>
            WoC is primarily a mentoring initiative. The Projects on offer have
            excellent mentors associated with them. The mentors are devoted,
            enthusiastic individuals who want to assist WoC Contributors in
            becoming excellent open source contributors by teaching them about
            their communities. It can only make you a better, more confident
            open source developer to have the chance to learn from others who
            have been at this for several years and who are knowledgeable about
            the techniques.
          </p>

          <button
            onClick={() => {
              navigate.push('/projects');
            }}
            className="bg-white px-10 uppercase py-4 text-primary font-bold w-fit rounded-xl"
          >
            Projects
          </button>
        </div>
      </div>
    </main>
  );
};

export default Project;
