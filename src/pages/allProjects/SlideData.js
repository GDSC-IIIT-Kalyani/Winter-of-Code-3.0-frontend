import mojaGlobal from "../../assets/org-logos/moja-global.png"
import openEMR from "../../assets/org-logos/openemr.png"
import gitaInit from "../../assets/org-logos/gitaInit.png"
import gDevelop from "../../assets/org-logos/GDevelop.png"
import clueless from "../../assets/org-logos/orgA.png"
import aSyncAPI from "../../assets/org-logos/asyncAPI4.png"
import openCodeyard from "../../assets/org-logos/openCodeyard.png"

const SliderData = [
  // The Gita Initiative
  {
    org_name: "The Gita Initiative",
    title: "Bhagvad Gita API",
    Ideas: ["Adding new features like social webhooks and integrations",
      "Adapting for new datasets",
      "Adding AI chat using GPT-3"],
    mentors: [{ name: "Anubhav Gupta", link: "mailto:anubhavgupta2260@gmail.com" }],
    repo_link: "https://github.com/gita/bhagavad-gita-api",
    org_img: gitaInit,
    tags: "all python",
    org_tag: "all gita"
  },
  {
    org_name: "The Gita Initiative",
    title: "Bhagvad Gita App",
    Ideas: ["Implementing Auth",
      "Linking user data to Supabase",
      "Adding audio recitations",
      ["Adding AI chat bot"]],
    mentors: [{ name: "Anubhav Gupta", link: "mailto:anubhavgupta2260@gmail.com" }],
    repo_link: "https://github.com/gita/Bhagavad-Gita-App",
    org_img: gitaInit,
    tags: "all flutter",
    org_tag: "all gita"
  },
  {
    org_name: "The Gita Initiative",
    title: "Website Frontend",
    Ideas: ["Fixing UI bugs",
      "Adding bookmark/notes feature for data saving using Supabase",
      "Adding AI chat bot"],
    mentors: [{ name: "Anubhav Gupta", link: "mailto:anubhavgupta2260@gmail.com" }],
    repo_link: "https://github.com/gita/bg-frontend",
    org_img: gitaInit,
    tags: "all web",
    org_tag: "all gita"
  },
  {
    org_name: "The Gita Initiative",
    title: "Bhagvada Gita",
    Ideas: ["JSON data dump for Shri Gita",
      "Add new data and get more data using webscraping",],
    mentors: [{ name: "Anubhav Gupta", link: "mailto:anubhavgupta2260@gmail.com" }],
    repo_link: "https://github.com/gita/gita",
    org_img: gitaInit,
    tags: "all web",
    org_tag: "all gita"
  },

  // OpenEMR's Projects
  {
    org_name: "OpenEMR",
    title: "Mobile App",
    Ideas: ["This is a very flexible project to design a new mobile app that integrates with OpenEMR API to solve a focused problem.",
      "OpenEMR has an API with FHIR and SMART on FHIR support that uses OAUTH2 for authentication.",
      "So, any app stack that supports this can be used for app development."],
    mentors: [
      { name: "Brady Miller", link: "mailto:brady.g.miller@gmail.com" },
      { name: "Robert Down", link: "mailto:robertdown@live.com" },
      { name: "Stephen Waite", link: "mailto:stephen.waite@cmsvt.com" },
    ],
    repo_link: "https://github.com/openemr/openemr",
    org_img: openEMR,
    tags: "all docs",
    org_tag: "all openEMR"
  },
  {
    org_name: "OpenEMR",
    title: "Automated Testing",
    Ideas: ["OpenEMR currently has a initial framework for automated testing which uses Github Actions to run testing on all PHP versions, all MySQL versions, and all MariaDB versions. Currently there are several unit tests, api test, e2e (functional) tests. We are waiting for somebody to come along and markedly expand the automated testing."],
    mentors: [
      { name: "Brady Miller", link: "mailto:brady.g.miller@gmail.com" },
      { name: "Robert Down", link: "mailto:robertdown@live.com" },
      { name: "Stephen Waite", link: "mailto:stephen.waite@cmsvt.com" },
    ],
    repo_link: "https://github.com/openemr/openemr",
    org_img: openEMR,
    tags: "all docs",
    org_tag: "all openEMR"
  },
  {
    org_name: "OpenEMR",
    title: "Modernize Database",
    Ideas: ["The OpenEMR database has been waiting patiently for a student to modernize it. At this time, OpenEMR overrides the sql_mode settings (sets it to empty) in order to ensure compatibility with MariaDB and MySQL and issues are beginning to arise because of this. Goal would be for OpenEMR’s database to support the default sql_mode settings in MariaDB and MySQL8 (note mysql8 has more by default). Goal of this modernization is to also support it for folks that are upgrading OpenEMR from prior versions."],
    mentors: [
      { name: "Brady Miller", link: "mailto:brady.g.miller@gmail.com" },
      { name: "Robert Down", link: "mailto:robertdown@live.com" },
      { name: "Stephen Waite", link: "mailto:stephen.waite@cmsvt.com" },
    ],
    repo_link: "",
    org_img: openEMR,
    tags: "all docs",
    org_tag: "all openEMR"
  },
  {
    org_name: "OpenEMR",
    title: "Standardize PDF tools",
    Ideas: ["OpenEMR currently uses several different PDF tools and libraries, which complicates code development. Goal is to standardize all PDF output from a common PDF library."],
    mentors: [
      { name: "Brady Miller", link: "mailto:brady.g.miller@gmail.com" },
      { name: "Robert Down", link: "mailto:robertdown@live.com" },
      { name: "Stephen Waite", link: "mailto:stephen.waite@cmsvt.com" },
    ],
    repo_link: "",
    org_img: openEMR,
    tags: "all docs",
    org_tag: "all openEMR"
  },
  {
    org_name: "OpenEMR",
    title: "PACS Server Integration",
    Ideas: ["Picture Archiving and Communication System (PACS) is a system that allows storing and viewing of patient imaging, such as Xrays, CT scans, and ultrasounds. Goal is it integrate a PACS server with OpenEMR to allow the viewing and storage of patient imaging."],
    mentors: [
      { name: "Brady Miller", link: "mailto:brady.g.miller@gmail.com" },
      { name: "Robert Down", link: "mailto:robertdown@live.com" },
      { name: "Stephen Waite", link: "mailto:stephen.waite@cmsvt.com" },
    ],
    repo_link: "",
    org_img: openEMR,
    tags: "all docs",
    org_tag: "all openEMR"
  },

  // GDevelop's projects 
  {
    org_name: "GDevelop",
    title: "Integrate a basic tile map editor",
    Ideas: ["[Medium] Improve the scene editor so that users can create their own tilemaps inside GDevelop by selecting tiles and putting them on screen. Currently, they have to use an external editor like Tiled or LDtk to do it."],
    mentors: [
      { name: "Davy Hélard", link: "https://github.com/D8H" },
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Implement a global undo redo",
    Ideas: ["[Hard] Set up a global undo/redo system in the whole app, which could even be used as a basis for a real time collaboration later."],
    mentors: [
      { name: "Davy Hélard", link: "https://github.com/D8H" },
      { name: "Florian Rival", link: "https://github.com/4ian" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Refactor the game engine",
    Ideas: ["[Medium/Hard] The game engine can run in a web worker so that it can be rendering with PixiJS can be decoupled from logic or later games can run on a server for multiplayer"],
    mentors: [
      { name: "Davy Hélard", link: "https://github.com/D8H" },
      { name: "Florian Rival", link: "https://github.com/4ian" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Improve interactive tutorials",
    Ideas: ["[Easy] GDevelop has created a framework to run interactive tutorials directly inside GDevelop (you can try it in the “Getting started”). In this project, tutorials could be listed in GDevelop in the interface, and when one is chosen, it would be played. The community will be able to create new tutorials by submitting tutorials in JSON format to https://github.com/GDevelopApp/GDevelop-tutorials."],
    mentors: [
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
    ],
    repo_link: "https://github.com/GDevelopApp/GDevelop-tutorials",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Automatic testing of tutorial",
    Ideas: ["[Medium] Set up Playright (or another E2E framework) to automatically play the onboarding tutorial in GDevelop and test it continuously."],
    mentors: [
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Upgrade to latest PixiJS version",
    Ideas: ["[Easy/Medium] Upgrade to PixiJS v7 and do any improvement to the game engine for faster rendering."],
    mentors: [
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
      { name: "Davy Hélard", link: "https://github.com/D8H" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Upgrade the i18n module",
    Ideas: ["[Medium] Upgrade to js-lingui 3.0 and improve all calls to <I18n> so that it uses a hook instead. Will make translations easier to integrate across the whole app."],
    mentors: [
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Codemod the whole editor",
    Ideas: ["[Hard] Codemod the whole editor from JavaScript+Flow to TypeScript (following things done by some companies: https://labs.factorialhr.com/posts/how-we-migrated-400k-lines-of-code-from-flow-to-typescript) and use Vite instead of Create-react-app."],
    mentors: [
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Update React and Material-UI",
    Ideas: ["[Medium/Hard] Upgrade React.js and Material-UI to their latest version for better performance across the whole app."],
    mentors: [
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },
  {
    org_name: "GDevelop",
    title: "Replace Storybook by Ladle",
    Ideas: ["[Medium/Hard] Use Ladle instead of Storybook, for faster startup and development of components."],
    mentors: [
      { name: "Alexandre Sapet", link: "https://github.com/AlexandreSi" },
      { name: "Clément Pasteau", link: "https://github.com/ClementPasteau" },
    ],
    repo_link: "https://github.com/4ian/GDevelop",
    org_img: gDevelop,
    tags: "all",
    org_tag: "all GDevelop"
  },

  // AsyncAPI's projects
  {
    org_name: "AsyncAPI",
    title: "Font Loading",
    Ideas: ["Fix an issue with the fonts not loading in properly on mobile devices"],
    mentors: [{name: "Ace", link: "https://github.com/AceTheCreator"}],
    repo_link: "https://github.com/asyncapi/conference-website/issues/106",
    org_img: aSyncAPI,
    tags: "all web",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Replace Zapier with Netlify",
    Ideas: ["Use Netlify functions for link subscriptions instead of Zapier"],
    mentors: [{name: "Lukasz Gornicki", link: "https://github.com/derberg"}],
    repo_link: "https://github.com/asyncapi/website/issues/1091",
    org_img: aSyncAPI,
    tags: "all web",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Next.js caching",
    Ideas: ["Enable Next.js caching for Netlify Build"],
    mentors: [{name: "Lukasz Gornicki", link: "https://github.com/derberg"}],
    repo_link: "https://github.com/asyncapi/website/issues/843",
    org_img: aSyncAPI,
    tags: "all web",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Skip Navigation",
    Ideas: ["Add a skip link to the website header"],
    mentors: [{name: "Ace", link: "https://github.com/AceTheCreator"}],
    repo_link: "https://github.com/asyncapi/website/issues/692",
    org_img: aSyncAPI,
    tags: "all web",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Custom modals",
    Ideas: ["Use custom modals for 'url-mode' confirms"],
    mentors: [{name: "Ace", link: "https://github.com/AceTheCreator"}],
    repo_link: "https://github.com/asyncapi/studio/issues/402",
    org_img: aSyncAPI,
    tags: "all",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Update studio URL",
    Ideas: ["Fix Update URL of studio after making changes"],
    mentors: [{name: "Maciej Urbańczyk", link: "https://github.com/magicmatatjahu"}],
    repo_link: "https://github.com/asyncapi/studio/issues/463",
    org_img: aSyncAPI,
    tags: "all",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Fix data-time format",
    Ideas: ["The date-time format display is not the same as the one used by use inside AsyncAPI file"],
    mentors: [{name: "Ace", link: "https://github.com/AceTheCreator"}],
    repo_link: "https://github.com/asyncapi/asyncapi-react/issues/651",
    org_img: aSyncAPI,
    tags: "all react",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Support for different names",
    Ideas: ["Support different AsyncAPI file names: asyncapi.json and asyncapi.yml"],
    mentors: [{name: "Fran Méndez", link: "https://github.com/fmvilas"}],
    repo_link: "https://github.com/asyncapi/glee/issues/23",
    org_img: aSyncAPI,
    tags: "all",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Example for model generation",
    Ideas: ["Add example to generate all models within the same file"],
    mentors: [{name: "Jonas Lagoni", link: "https://github.com/jonaslagoni"}],
    repo_link: "https://github.com/asyncapi/modelina/issues/949",
    org_img: aSyncAPI,
    tags: "all",
    org_tag: "all async",
  },
  {
    org_name: "AsyncAPI",
    title: "Support for C++",
    Ideas: ["Add support for C++ language"],
    mentors: [{name: "Jonas Lagoni", link: "https://github.com/jonaslagoni"}],
    repo_link: "https://github.com/asyncapi/modelina/issues/953",
    org_img: aSyncAPI,
    tags: "all",
    org_tag: "all async",
  },

  // Moja Global's projects
  {
    org_name: "Moja Global",
    title: "FLINT-UI",
    Ideas: [""],
    mentors: [
      { name: "", link: "" },
    ],
    repo_link: "https://github.com/moja-global/FLINT-UI",
    org_img: mojaGlobal,
    tags: "all web",
    org_tag: "all moja"
  },
  {
    org_name: "Moja Global",
    title: "FLINT.Cloud",
    Ideas: [""],
    mentors: [
    ],
    repo_link: "https://github.com/moja-global/FLINT.cloud",
    org_img: mojaGlobal,
    tags: "all web cloud",
    org_tag: "all moja"
  },
  {
    org_name: "Moja Global",
    title: "Community Website",
    Ideas: ["Implement new features in the community website"],
    mentors: [
    ],
    repo_link: "https://github.com/moja-global/community-website",
    org_img: mojaGlobal,
    tags: "all web",
    org_tag: "all moja"
  },
  {
    org_name: "Moja Global",
    title: "Documentation",
    Ideas: ["Improve Moja Global's documentation"],
    mentors: [
    ],
    repo_link: "https://github.com/moja-global/moja_global_docs",
    org_img: mojaGlobal,
    tags: "all docs",
    org_tag: "all moja"
  },
  {
    org_name: "Moja Global",
    title: "FLINT Handbook",
    Ideas: ["Improve Moja Global's handbook"],
    mentors: [
    ],
    repo_link: "https://github.com/moja-global/Handbook",
    org_img: mojaGlobal,
    tags: "all docs",
    org_tag: "all moja"
  },

  // Clueless' projects
  {
    org_name: "Clueless",
    title: "SeamLess UI",
    Ideas: [""],
    mentors: [{name: "Rajdeep Sengupta", link: "https://github.com/Rajdip019"}],
    repo_link: "https://github.com/Clueless-Community/seamless-ui",
    org_img: clueless,
    tags: "all web",
    org_tag: "all clueless",
  },
  {
    org_name: "Clueless",
    title: "Official Website",
    Ideas: [""],
    mentors: [{name: "Debajyoti Saha", link: "https://github.com/Debajyoti14"}],
    repo_link: "https://github.com/Clueless-Community/clueless-official-website",
    org_img: clueless,
    tags: "all web",
    org_tag: "all clueless",
  },
  {
    org_name: "Clueless",
    title: "College API",
    Ideas: [""],
    mentors: [{name: "Nikhil Raj", link: "https://github.com/nikhil25803"}, 
              {name: "Subho Ghose", link: "https://github.com/ighoshsubho"}],
    repo_link: "https://github.com/Clueless-Community/collegeAPI",
    org_img: clueless,
    tags: "all python",
    org_tag: "all clueless",
  },
  {
    org_name: "Clueless",
    title: "Flutter UI Components",
    Ideas: [""],
    mentors: [{name: "Roshan Kumar", link: "https://github.com/Roshaen"}, 
              {name: "Debajyoti Saha", link: "https://github.com/Debajyoti14"}],
    repo_link: "https://github.com/Clueless-Community/flutter-ui-components",
    org_img: clueless,
    tags: "all flutter",
    org_tag: "all clueless",
  },

  // OpenCodeyard's Projects
  {
    org_name: "Open Codeyard",
    title: "Classroom Management System",
    Ideas: [""],
    mentors: [{name: "Shatanik Mahanty", email: "shatanik.m@opencodeyard.tech"}],
    repo_link: "https://github.com/OpenCodeyard/ocyclient",
    org_img: openCodeyard,
    tags: "all flutter app",
    org_tag: "all openCodeyard"
  },
  {
    org_name: "Open Codeyard",
    title: "Official Client Side App",
    Ideas: [""],
    mentors: [{name: "Shatanik Mahanty", email: "shatanik.m@opencodeyard.tech"}],
    repo_link: "https://github.com/OpenCodeyard/Classroom",
    org_img: openCodeyard,
    tags: "all flutter app",
    org_tag: "all openCodeyard"
  },
];

export default SliderData;