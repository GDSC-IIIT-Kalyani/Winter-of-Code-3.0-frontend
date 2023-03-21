import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import MobileDropdown from './MobileDropdown';
import { UIContext } from '@/contexts/UIContext';
import { navLinks } from '@/lib/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { handleScroll } from '@/lib/utilityFunctions';
import { useRouter } from 'next/router';

type Props = {};

const Navbar = (props: Props) => {
  const { dispatch } = useContext(UIContext);
  const handleOpen = () => {
    dispatch({ type: 'OPEN_DRAWER' });
  };

  const router = useRouter();

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   setLoaded(true);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <nav className="fixed left-[50%] -translate-x-[50%] z-50 flex items-center justify-between w-full backdrop-blur-sm bg-white/20 px-4 py-2 sm:w-11/12 sm:rounded-3xl sm:my-8 ">
      <Image
        className="w-10 sm:hidden"
        src="/assets/logo.png"
        height={1080}
        width={1080}
        alt="WOC Logo"
      />
      <Bars3Icon
        onClick={handleOpen}
        className="w-8 h-8 text-white sm:hidden"
      />

      <MobileDropdown />

      <div className="hidden sm:flex w-full items-center px-4 py-1.5 text-white justify-between">
        <h1 className="text-2xl xl:text-3xl">WOC.</h1>
        <div className="flex text-md xl:text-xl space-x-4 xl:space-x-8 justify-center items-center">
          {navLinks.map((navLink, idx) => {
            const { href, name, scrollTo } = navLink;
            return scrollTo ? (
              <button
                key={idx}
                onClick={() => {
                  if (router.pathname !== '/') {
                    router.push('/').then(() => {
                      handleScroll(scrollTo);
                    });
                  }
                  router.pathname === '/' && handleScroll(scrollTo);
                }}
              >
                {name}
              </button>
            ) : (
              <Link href={href!} key={idx}>
                {name}
              </Link>
            );
          })}
        </div>
        <div
          className="apply-button"
          data-hackathon-slug="winter-of-code"
          data-button-theme="light"
        />
      </div>
    </nav>
  );
};

export default Navbar;
