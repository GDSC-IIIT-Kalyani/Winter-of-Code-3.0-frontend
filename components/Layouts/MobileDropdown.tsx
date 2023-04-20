import React, { useContext, useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { navLinks } from '@/lib/constants';
import Link from 'next/link';
import { UIContext } from '@/contexts/UIContext';
import classNames from 'classnames';
import { handleScroll } from '@/lib/utilityFunctions';
import { useRouter } from 'next/router';

type Props = {};

const MobileDropdown = (props: Props) => {
  const { state, dispatch } = useContext(UIContext);
  const { openDrawer } = state!;

  const handleClose = () => {
    dispatch({ type: 'CLOSE_DRAWER' });
  };

  const [loaded, setLoaded] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    setLoaded(true);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={classNames(
        'bg-primary text-white transition-all ease-in-out duration-500 fixed z-10 top-0 left-0 w-full h-screen cursor-pointer sm:hidden flex flex-col items-center',
        !openDrawer ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="flex items-center font-bold justify-between w-full p-4">
        <h1 className="text-3xl">WOC3.</h1>
        <XMarkIcon onClick={handleClose} className="w-7 h-7" />
      </div>
      <div className="flex flex-col text-xl space-y-8 py-6 justify-center items-center">
        {loaded &&
          navLinks.map((navLink, idx) => {
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
              <Link href={href} key={idx}>
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
  );
};

export default MobileDropdown;
