import projectsData from '@/lib/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

type Mentor = {
  name: string;
  link: string;
};

type Project = {
  Ideas: string[];
  mentors: Mentor[];
  org_name: string;
  org_tag: string;
  org_img: string;
  repo_link: string;
  tags: string;
  title: string;
};

const CategoriesOption = [
  {
    name: 'Web Development',
    category: 'web',
  },
  {
    name: 'App Development',
    category: 'app',
  },
  {
    name: 'Machine Learning',
    category: 'ml',
  },
  {
    name: 'Documentation',
    category: 'docs',
  },
  {
    name: 'Python',
    category: 'python',
  },
  {
    name: 'Testing',
    category: 'python',
  },
  {
    name: 'SQL',
    category: 'sql',
  },
  {
    name: 'JavaScript',
    category: 'javascript',
  },
  {
    name: 'GUI',
    category: 'gui',
  },
  {
    name: 'Ethical Hacking',
    category: 'ethhack',
  },
  {
    name: 'Cloud',
    category: 'cloud',
  },
  {
    name: 'Flutter',
    category: 'flutter',
  },
];

const OrgOptions = [
  {
    name: 'AsyncAPI',
    org: 'async',
  },
  {
    name: 'GDevelop',
    org: 'GDevelop',
  },
  {
    name: 'OpenEMR',
    org: 'openEMR',
  },
  {
    name: 'Styava',
    org: 'styava',
  },
  {
    name: 'Moja Global',
    org: 'moja',
  },
  {
    name: 'The Gita Initiative',
    org: 'gita',
  },
  {
    name: 'Eduhub',
    org: 'eduhub',
  },
  {
    name: 'Clueless',
    org: 'clueless',
  },
  {
    name: 'Open Codeyard',
    org: 'openCodeyard',
  },
  {
    name: 'Alpha.Dev',
    org: 'alpha',
  },
  {
    name: 'SamagraX',
    org: 'SamagraX',
  },
  {
    name: 'Polyaxon',
    org: 'polyaxon',
  },
  {
    name: 'HackForCode',
    org: 'hackForCode',
  },
  {
    name: 'TerraForge3D',
    org: 'terraforge',
  },
  {
    name: 'Shorto',
    org: 'shorto',
  },
  {
    name: 'DevScript',
    org: 'devscript',
  },
  {
    name: 'CodeFamily',
    org: 'codeFamily',
  },
  {
    name: 'GDSC',
    org: 'gdsc',
  },
];

const Projects = () => {
  const [selectedOrg, setSelectedOrg] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const checkTags = (val: Project) => {
    return (
      val.org_tag.split(' ').includes(selectedOrg) &&
      val.tags.split(' ').includes(selectedCategory)
    );
  };

  const handleCategories = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  };

  const handleOrganizations = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedOrg(e.target.value);
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    const { Ideas, mentors, org_img, org_name, repo_link, title } = project;
    const [expand, setExpand] = useState<boolean>(false);

    return (
      <div className="rounded-lg bg-white/30 px-4 py-8 transition-ease-in-out duration-500 cursor-pointer hover:-translate-y-2 text-center flex flex-col justify-center items-center">
        <h1
          className={classNames(
            'font-bold text-3xl font-sans transition-all duration-500 ease-out',
            expand ? 'opacity-0 absolute' : 'block'
          )}
        >
          {title}
        </h1>
        <button
          onClick={() => {
            setExpand(!expand);
          }}
          className={classNames(
            'flex space-x-2 items-center justify-center font-semibold text-white',
            expand ? 'my-4' : 'my-10'
          )}
        >
          <span>Check Ideas</span>{' '}
          <ChevronUpIcon
            className={classNames(
              'h-4 w-4 transition-all duration-500 ease-in-out',
              expand ? 'rotate-180' : 'rotate-0'
            )}
          />
        </button>
        <div
          className={classNames(
            'w-full relative transition-all duration-500 ease-in-out -translate-y-4',
            expand ? 'h-0 opacity-0' : 'h-64 opacity-100'
          )}
        >
          <Image
            src={org_img}
            fill
            alt={org_name}
            className="py-6 object-contain"
          />
        </div>

        <div
          className={classNames(
            'py-4 space-y-2',
            expand ? 'block transition-all duration-500 ease-in-out' : 'hidden'
          )}
        >
          <SocialIcon url={repo_link} bgColor="#FFFFFF" network="github" />
          <div className="text-white space-y-2">
            <h4>Mentors</h4>
            <div className="grid grid-cols-2 w-fit mx-auto justify-center items-center gap-1">
              {mentors.map((mentor, idx) => {
                const { name, link } = mentor;
                return (
                  <Link className="underline" href={link} key={idx}>
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <ol className="text-left px-6 py-4 space-y-2 text-white list-disc">
            {Ideas.map((idea, idx) => {
              return <li key={idx}>{idea}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  };

  return (
    <main className="relative min-h-screen">
      <Image
        src="/assets/background/bgClean.png"
        className="-z-10 object-cover"
        alt="Project BG"
        fill
      />

      <motion.h1
        whileInView={{ y: [50, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
        viewport={{ once: true }}
        className="heading text-center pt-40 text-white"
      >
        Available Projects
      </motion.h1>

      <nav className="flex font-sans flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between backdrop-blur-sm bg-white/20 px-10 py-4 w-fit rounded-lg my-8 mx-auto sm:space-x-10 ">
        <select
          onChange={handleCategories}
          className="rounded-lg px-4 cursor-pointer font-semibold py-2"
        >
          <option selected value="all">
            All Categories
          </option>
          {CategoriesOption.map((ctg, idx) => {
            const { category, name } = ctg;
            return (
              <option key={idx} value={category}>
                {name}
              </option>
            );
          })}
        </select>
        <select
          onChange={handleOrganizations}
          className="rounded-lg cursor-pointer px-4 font-semibold py-2"
        >
          <option selected value="all">
            All Organizations
          </option>
          {OrgOptions.map((organization, idx) => {
            const { org, name } = organization;
            return (
              <option key={idx} value={org}>
                {name}
              </option>
            );
          })}
        </select>
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full p-10 gap-4">
        {projectsData.filter(checkTags).map((project, idx) => {
          return <ProjectCard project={project as Project} key={idx} />;
        })}
      </section>
    </main>
  );
};

export default Projects;
