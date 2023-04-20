import About from '@/components/About';
import CommunityPatners from '@/components/CommunityPatners';
import FAQ from '@/components/FAQ';
import HomeHero from '@/components/HomeHero';
import Organizations from '@/components/Organizations';
import Patners from '@/components/Patners';
import Project from '@/components/Project';
import Timeline from '@/components/Timeline';
import Image from 'next/image';

export default function Home({ date }: { date: Date }) {
  return (
    <main className="relative">
      <Image
        src="/assets/background/bgMobile.jpg"
        alt="Home Background"
        width={1280}
        height={6840}
        className="absolute -z-10 sm:hidden"
      />

      <HomeHero />
      <About />
      <Timeline date={date} />
      <Organizations />
      <Project />
      <Patners />
      <CommunityPatners />
      <FAQ />
    </main>
  );
}

export async function getServerSideProps() {
  const date = new Date();

  return {
    props: {
      date: JSON.parse(JSON.stringify(date)),
    }, // will be passed to the page component as props
  };
}
