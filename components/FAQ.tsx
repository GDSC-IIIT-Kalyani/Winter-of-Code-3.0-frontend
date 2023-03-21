import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import faqData from '@/lib/FAQ';

type Props = {};
type FAQ = {
  question: string;
  answer: string;
};

const FAQ = (props: Props) => {
  const FAQCard = ({
    faq,
    number,
    handleClick,
  }: {
    faq: FAQ;
    number: number;
    handleClick: () => void;
  }) => {
    const { answer, question } = faq;
    return (
      <details open={currentOpen === number} onClick={handleClick}>
        <summary className="py-2 outline-none text-xl font-bold cursor-pointer focus:underline">
          {question}
        </summary>
        <div className="px-4 pb-4">
          <p>{answer}</p>
        </div>
      </details>
    );
  };

  const [currentOpen, setCurrentOpen] = useState<number>();

  return (
    <main
      id="faqs"
      className="w-full sm:h-screen relative text-white p-10 sm:px-20"
    >
      <Image
        src="/assets/background/FAQ.gif"
        className="-z-10 object-cover"
        alt="FAQ BG"
        fill
      />

      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:w-1/2 flex flex-col sm:h-screen">
          <h1 className="heading">Frequently</h1>
          <h3 className="text-2xl sm:text-5xl">Asked Questions</h3>
        </div>

        <div className="sm:w-1/2 flex flex-col sm:h-screen py-10 sm:py-0">
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            {faqData.map((faq, idx) => {
              return (
                <FAQCard
                  faq={faq}
                  key={idx}
                  number={idx}
                  handleClick={() => {
                    setCurrentOpen(idx);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
