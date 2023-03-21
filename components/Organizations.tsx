import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import organizations from '@/lib/organizations';

type Props = {};

const Organizations = (props: Props) => {
  return (
    <main
      id="organizations"
      className="w-full h-screen sm:h-[120vh] flex relative px-10"
    >
      <Image
        src="/assets/background/OrganizationBG.gif"
        className="-z-10 block"
        alt="Organizations BG"
        fill
      />

      <div className="flex w-full text-white justify-center sm:justify-between">
        <div className="sm:w-1/2 flex flex-col space-y-10 items-center justify-center">
          <motion.h1
            whileInView={{ y: [50, 0] }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
            }}
            viewport={{ once: true }}
            className="heading text-center"
          >
            Organizations
          </motion.h1>

          <div className="font-semibold text-xl sm:px-10 space-x-2 text-center sm:text-left">
            <span className="">
              Our love for Open Source drove us to impact the community through
              Winter of Code 3.0.
            </span>
            <Link
              href="https://drive.google.com/file/d/1MfoVIZaS_Wd53HmsxJ0ziKZRBEjbjA6I/view"
              target="_blank"
              rel="noreffer"
              className="link"
            >
              Participate in Winter of Code 3.0 as an organisation?
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-y-8 gap-x-16">
            {organizations.map((organization, idx) => {
              const { name, image } = organization;
              return (
                <motion.div
                  whileInView={{ y: [50, 0] }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  key={idx}
                  className=""
                >
                  <Image
                    className="hover:scale-110 transition-all duration-500 ease-in-out"
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 flex-col items-center justify-center hidden sm:flex">
          <Image
            src="/assets/creatures/fish.png"
            alt="Fish"
            className="absolute animate-up-down-fish z-30"
            height={743}
            width={643}
          />
          <Image
            src="/assets/creatures/fishBgLeafs.png"
            alt="Fish Leafs"
            className="absolute z-20"
            height={743}
            width={643}
          />
        </div>
      </div>
    </main>
  );
};

export default Organizations;
