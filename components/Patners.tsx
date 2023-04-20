import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import sponsorsData from '@/lib/sponsors';
type Props = {};

const Patners = (props: Props) => {
  const { diamond, gold, platinum, silver } = sponsorsData;
  return (
    <main
      id="sponsors"
      className="w-full text-white sm:h-[200vh] relative p-10 sm:p-40"
    >
      <Image
        src="/assets/background/PatnerBG.gif"
        className="-z-20"
        alt="Patners BG"
        fill
      />
      <Image
        src="/assets/background/elements.png"
        className="-z-10 object-cover"
        alt="Patners BG"
        fill
      />

      <motion.h1
        whileInView={{ y: [50, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        Our Partners
      </motion.h1>

      <div className="py-10 sm:py-28">
        <motion.h3
          whileInView={{ y: [50, 0] }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-left text-lg font-semibolds space-x-2"
        >
          <span>
            Our love for Open Source drove us to impact the community through
            Winter of Code 3.0.
          </span>
          <Link
            href="https://drive.google.com/file/d/1XTh4_kt9-sxeD1b2NMJYY1Izpi6gzIXP/view"
            className="link"
            target="_blank"
            rel="noreffer"
          >
            Want to Sponsor us?
          </Link>
        </motion.h3>

        <div className="space-y-10 py-10">
          <div className="platinum-sponsors px-4 py-6">
            <h3 className="uppercase px-8 text-lg text-teal-400 font-bold font-mono">
              PLATINUM SPONSORS
            </h3>

            <div className="flex items-center justify-evenly flex-wrap space-y-8 py-10 sm:space-y-0 sm:py-0 sm:flex-nowrap">
              {platinum.map((sponsor, idx) => {
                const { image, link, title } = sponsor;
                return (
                  <div className="" key={idx}>
                    <Link href={link} target="_blank" rel="noreffer">
                      <Image src={image} alt={title} width={200} height={50} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="diamond-sponsors px-4 py-6">
            <h3 className="uppercase px-8 text-lg text-pink-500 font-bold font-mono">
              Diamond Sponsor
            </h3>

            <div className="flex items-center justify-evenly flex-wrap space-y-8 py-10 sm:space-y-0 sm:py-0 sm:flex-nowrap">
              {diamond.map((sponsor, idx) => {
                const { image, link, title } = sponsor;
                return (
                  <div className="" key={idx}>
                    <Link href={link} target="_blank" rel="noreffer">
                      <Image src={image} alt={title} width={200} height={50} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="gold-sponsors px-4 py-6">
            <h3 className="uppercase px-8 text-lg text-yellow-500 font-bold font-mono">
              Gold Sponsor
            </h3>

            <div className="flex items-center justify-evenly flex-wrap space-y-8 py-10 sm:space-y-0 sm:py-0 sm:flex-nowrap">
              {gold.map((sponsor, idx) => {
                const { image, link, title } = sponsor;
                return (
                  <div className="" key={idx}>
                    <Link href={link} target="_blank" rel="noreffer">
                      <Image src={image} alt={title} width={100} height={50} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="silver-sponsors px-4 py-6">
            <h3 className="uppercase px-8 text-lg text-gray-300 font-bold font-mono">
              SILVER PARTNERS
            </h3>

            <div className="flex items-center justify-evenly flex-wrap space-y-8 py-10 sm:space-y-0 sm:py-0 sm:flex-nowrap">
              {silver.map((sponsor, idx) => {
                const { image, link, title } = sponsor;
                return (
                  <div className="" key={idx}>
                    <Link href={link} target="_blank" rel="noreffer">
                      <Image src={image} alt={title} width={100} height={50} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Patners;
