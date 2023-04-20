import { gdscSocial } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="relative h-[50vh] flex flex-col text-white font-bold justify-center items-center px-10 sm:px-0">
      <Image
        src="/assets/background/FooterBG.png"
        alt="Footer BG"
        fill
        className="absolute -z-10 left-0 top-0 object-cover"
      />

      <div className="space-y-4 flex flex-col justify-center text-center items-center">
        <h1 className="text-2xl sm:text-4xl">WOC 3.0</h1>
        <p className="text-lg sm:text-xl">Brought to you by</p>
        <h2 className="text-xl sm:text-2xl uppercase">
          GOOGLE DEVELOPER STUDENT CLUB IIIT KALYANIw
        </h2>
      </div>

      <div className="flex space-x-0 sm:space-x-4 py-2">
        {gdscSocial.map((social, idx) => {
          return (
            <SocialIcon
              url={social}
              key={idx}
              bgColor="transparent"
              fgColor="white"
            />
          );
        })}
      </div>
      <p className="absolute bottom-4">
        © GDSC IIIT Kalyani {new Date().getFullYear() - 1}-
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
