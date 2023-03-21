import Image from 'next/image';
import React from 'react';

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <main className="w-full h-96 sm:h-screen relative" id="home">
      <Image
        src="/assets/background/bgClean.png"
        alt="Home Background"
        fill
        className="absolute -z-10 hidden sm:block"
      />

      <Image
        src="/assets/creatures/iceburg.png"
        alt="Ice Burg"
        width={630}
        height={974}
        className="absolute z-10 left-[50%] -translate-x-[50%] top-[50%] hidden sm:block"
      />

      <Image
        src="/assets/creatures/left_berg.png"
        alt="Left Ice Burg"
        width={122}
        height={360}
        className="absolute z-10 left-0  translate-y-full bottom-0 hidden sm:block"
      />

      <Image
        src="/assets/creatures/right_berg.png"
        alt="Right Ice Burg"
        width={122}
        height={360}
        className="absolute z-10 right-0 translate-y-full bottom-0 hidden sm:block"
      />

      <Image
        src="/assets/creatures/winterofcode.png"
        alt="Winter Of Code"
        width={1373}
        height={182}
        className="absolute z-10 left-[50%] -translate-x-[50%] top-[50%] w-1/2"
      />

      <Image
        src="/assets/creatures/cloud (4).png"
        alt="Clouds 4"
        width={285}
        height={117}
        className="absolute -z-10 left-0 bottom-24 hidden sm:block"
      />

      <Image
        src="/assets/creatures/cloud (1).png"
        alt="Clouds 1"
        width={391}
        height={107}
        className="absolute -z-10 right-0 top-52 hidden sm:block"
      />

      <Image
        src="/assets/creatures/cloud (2).png"
        alt="Clouds 2"
        width={163}
        height={68}
        className="absolute w-60 -z-10 left-[62%] -translate-x-[50%] top-[70%] hidden sm:block"
      />

      <Image
        src="/assets/creatures/moon.png"
        alt="Moon"
        width={168}
        height={168}
        className="absolute w-32 -z-10 left-32 top-40 animate-pulse hidden sm:block"
      />

      <Image
        src="/assets/creatures/birds (2).png"
        alt="Birds 2"
        width={128}
        height={40}
        className="absolute w-28 -z-10 left-16 animate-up-down duration-500 top-64 hidden sm:block"
      />

      <Image
        src="/assets/creatures/birds (1).png"
        alt="Birds 1"
        width={188}
        height={101}
        className="absolute -z-10 right-16 animate-up-down duration-500 bottom-10 w-34 hidden sm:block"
      />
    </main>
  );
};

export default HomeHero;
