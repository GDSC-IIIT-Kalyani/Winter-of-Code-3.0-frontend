import mojaGlobal from "../../assets/org-logos/moja-global.png"
import openEMR from "../../assets/org-logos/openemr.png"
import gitaInit from "../../assets/org-logos/gitaInit.png"
import gDevelop from "../../assets/org-logos/GDevelop.png"
import clueless from "../../assets/org-logos/orgA.png"
import aSyncAPI from "../../assets/org-logos/asyncAPI4.png"
import openCodeyard from "../../assets/org-logos/openCodeyard.png"
import alphaDev from "../../assets/Community Partners/alpha.jpeg"
import samagra from "../../assets/org-logos/SamagraX.jpg"
import polyaxon from "../../assets/org-logos/polyaxon.png"
import gdsc from "../../assets/org-logos/gdsc.png"
import terra from "../../assets/org-logos/terra.png"
import c4gt from "../../assets/org-logos/c4gt.png"
import devscript from "../../assets/org-logos/devscript.png"
import shorto from "../../assets/org-logos/shorto.png"
import codeFamily from "../../assets/org-logos/codeFamily.png"

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

  // Alpha.Dev's Projects
  {
    org_name: "Alpha.Dev",
    title: "Templates for Genletter",
    Ideas: ["Genletter is a react web app where a user can generate any type of letter whether it can be an offer letter, internship letter,application letter etc. by filing the details in the input field. It is also flexible in the sense that all the input fields are not required while generating the pdf so that it can be done as per the needs. Currently only one template is there for the letter. We want an user to create a provision to choose a template among many choices. Apart from that, users can add any features suitable to the application. Any kind of innovativeness will always be accepted."],
    mentors: [{name: "Jaydip Dey", link: "mailto:jaydipdey2807@gmail.com"},
              {name: "Archan Banerjee", link: "mailto:archanbanerjee89@gmail.com"}],
    repo_link: "https://github.com/jaydip1235/Genletter",
    org_img: alphaDev,
    tags: "all web react",
    org_tag: "all alpha"
  },
  {
    org_name: "Alpha.Dev",
    title: "Add features to Org-Bazar",
    Ideas: ["It's a MERN stack application with socket.io. All the features that are currently present are mentioned in the README.md file of the repository. A contributor can add more features of their choice relevant to the web app."],
    mentors: [{name: "Jaydip Dey", link: "mailto:jaydipdey2807@gmail.com"},
              {name: "Archan Banerjee", link: "mailto:archanbanerjee89@gmail.com"}],
    repo_link: "https://github.com/ArchanJS/org-bazar",
    org_img: alphaDev,
    tags: "all web mern",
    org_tag: "all alpha"
  },
  {
    org_name: "Alpha.Dev",
    title: "Add features to Github Search",
    Ideas: ["It's a React based github search application.  A contributor can add more features in the frontend using the github api and and improve the UI."],
    mentors: [{name: "Jaydip Dey", link: "mailto:jaydipdey2807@gmail.com"}],
    repo_link: "https://github.com/jaydip1235/Github-Search-React",
    org_img: alphaDev,
    tags: "all web react",
    org_tag: "all alpha"
  },
  {
    org_name: "Alpha.Dev",
    title: "To-Do List",
    Ideas: ["A MERN based to-do web app. All the things are mentioned in the README.md of the repository"],
    mentors: [{name: "Agniv Ghosh", link: "mailto:agnivg157@gmail.com"}],
    repo_link: "https://github.com/agnivg/To-do-list",
    org_img: alphaDev,
    tags: "all",
    org_tag: "all alpha"
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
    mentors: [{name: "Shatanik Mahanty", email: "mailto:shatanikmahanty@gmail.com"}],
    repo_link: "https://github.com/OpenCodeyard/ocyclient",
    org_img: openCodeyard,
    tags: "all flutter app",
    org_tag: "all openCodeyard"
  },
  {
    org_name: "Open Codeyard",
    title: "Official Client Side App",
    Ideas: [""],
    mentors: [{name: "Shatanik Mahanty", email: "mailto:shatanikmahanty@gmail.com"}],
    repo_link: "https://github.com/OpenCodeyard/Classroom",
    org_img: openCodeyard,
    tags: "all flutter app",
    org_tag: "all openCodeyard"
  },

  // Samagra's Projects
  {
    org_name: "Samagra",
    title: "X-Admin Generator",
    Ideas: ["A general purpose Admin based on REST or GraphQL" , "An Admin for Sunbird-RC's generated CRUD APIs.", "With the help of contributions amount of code to be written for generating the entire code should remain less."],
    mentors: [{name: "Harshil Jani", link: "https://github.com/Harshil-Jani"},],
    repo_link: "https://github.com/Samagra-Development/generator-create-rc-admin",
    org_img: samagra,
    tags: "all web",
    org_tag: "all SamagraX"
  },
  {
    org_name: "Samagra",
    title: "Integrating ra-data-samagra with admin-ts",
    Ideas: ["The task here would be to replace the lines in admin-ts using the ra-data-samagra npm package and reduce the lines of codes along with developing and testing the npm package","Integrating the ra-data-samagra npm package inside admin-ts and making admin-ts cleaner"],
    mentors: [{name: " Harshil Jani", link: "https://github.com/Harshil-Jani"},],
    repo_link: "https://github.com/Samarth-HP/admin-ts",
    org_img: samagra,
    tags: "all web",
    org_tag: "all SamagraX"
  },
  {
    org_name: "Samagra",
    title: "Accessibility of websites across Samagra",
    Ideas: ["For the specially abled people, It is very much important to design and develop the sites that they are accessible for all", "The contributor has to think more of such features and implement them across the sites in Samagra."],
    mentors: [{name: "Harshil Jani", link: "https://github.com/Harshil-Jani"},],
    repo_link: "https://github.com/Code4GovTech/C4GT/wiki/Samagra-:-WoC-3.0-Project-Ideas",
    org_img: samagra,
    tags: "all web",
    org_tag: "all SamagraX"
  },

  // Polyaxon's Projects
  {
    org_name: "Polyaxon",
    title: "MLOps Tools For Machine Learning",
    Ideas: [" Polyaxon, a platform for building, training, and monitoring large scale deep learning applications. We are making a system to solve reproducibility, automation, and scalability for machine learning applications.", "Polyaxon makes it faster, easier, and more efficient to develop deep learning applications by managing workloads with smart container and node management"],
    mentors: [{name: " Bastian Erhardt", link: "mailto:bastian@polyaxon.com"},],
    repo_link: "https://github.com/polyaxon/polyaxon/",
    org_img: polyaxon,
    tags: "all python",
    org_tag: "all polyaxon"
  },
  {
    org_name: "Polyaxon",
    title: "MLOps tutorials and examples using Polyaxon",
    Ideas: ["This repository contains examples of using Polyaxon with all major Machine Learning and Deep Learning libraries"],
    mentors: [{name: "Bastian Erhardt", link: "mailto:bastian@polyaxon.com"},],
    repo_link: "https://github.com/polyaxon/polyaxon-examples/",
    org_img: polyaxon,
    tags: "all python",
    org_tag: "all polyaxon"
  },

  // TerraForge3D
  {
    org_name: "TerraForge3D",
    title: "Terrain generation and texturing tool",
    Ideas: ["TerraForge3D has got a series of features like gou powered generation, node based workflows, custom shading and texturing, exports for other applications" , "TerraForge3D can not only be used as a standalone tool but also a library. It's got an API that can be used to add features to TerraForge3D through modules."],
    mentors: [{name: "Jaysmito Mukherjee", link: "mailto:jaysmito101@gmail.com"},],
    repo_link: "https://github.com/Jaysmito101/TerraForge3D",
    org_img: terra,
    tags: "all",
    org_tag: "all terraforge"
  },


  {
    org_name: "GDSC",
    title: "TASKIFY",
    Ideas: ["It is a task management system for everyone. It is designed to help you manage your tasks and projects from ideation to delivery. This task manager helps to bring in only the necessary parts – without all the annoying clutter."],
    mentors: [{name: "Sudip Maiti", link: "mailto:maitisudip2002@gmail.com"},{name: "Rupam Matabbar", link:"mailto:rupammatabber04@gmail.com"}],
    repo_link: "https://github.com/DSCKGEC/Taskify",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC",
    title: "HEALTH-TRACKER",
    Ideas: ["A health tracker is an application used to record and manage healthy living statistics and measure progress, keep a track of your day to day medications and notify you at regular intervals", "It also serves as a safe vault to keep your helath related documents in one place in an organized way.", "The idea is to integrate the Flutter App with SQLite Backend where we will store all the user's data in a secured and organized way."],
    mentors: [{name: "Saptarshi Mandal", link: "mailto:saptarshim125@gmail.com"}],
    repo_link: "https://github.com/DSCKGEC/Health-Tracker-App",
    org_img: gdsc,
    tags: "all app flutter",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC",
    title: "LIBRARYLY",
    Ideas: ["A software solution to handle the primary functions of a library, which include managing books as well as members", "Manage and maintain the catalogue of books with a scalable and reliable Library Management System", "Our project presents an e-platform to libraries of all sizes, which help maintain the data of books, being added or issued"],
    mentors: [{name: "Soumyajit Dutta", link:"mailto:soumyajitdatta123@gmail.com"}],
    repo_link: "https://github.com/DSCKGEC/Libraryly",
    org_img: gdsc,
    tags: "all web",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC",
    title: "RESUMIE",
    Ideas: ["Most of us often forget to carry our CV and portfolio along with us. It becomes really useful if we have an app that can generate our resume within few minutes and we don't miss any opportunity coming in our way!", "The app is based on the idea of using simple fragments with layouts and rendering the input data by users to a PDF Document created in a different activity."],
    mentors: [{name: "Adrishyantee Maiti", link: "mailto:adrishyantee@gmail.com"},{name: "Subhankar Das", link:"mailto:shubhankardas.kgec@gmail.com"}],
    repo_link: "https://github.com/DSCKGEC/Resumie",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC",
    title: "KITKAT-VIRUS",
    Ideas: ["We often forget what we type in our day to day lives, it maybe the last password you used to login into your bank account", "Keystroke logging, often referred to as keyboard capturing, is the action of recording the keys struck on a keyboard, typically covertly, so that a person using the keyboard is unaware that their actions are being monitored. Data can then be retrieved by the person operating the logging program."],
    mentors: [],
    repo_link: "https://github.com/DSCKGEC/kitkat.v1rus",
    org_img: gdsc,
    tags: "all python",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC",
    title: "CSGO PROFESSIONALS",
    Ideas: ["Counter-Strike: Global Offensive is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment", "Scrape the Dataset from this Website", "Perform Feature Engineering to create insightful columns", "Perform Exploratory Data Analysis to create insights and meaningful dashboards"],
    mentors: [{name: "Arya Chakraborty", link: "mailto:aryachakraborty2002@gmail.com"},{name: "Saptarshi Bhattacharya", link:"mailto:bhattacharyasaptarshi2001@gmail.com"}],
    repo_link: "https://github.com/DSCKGEC/CS-GO-Professionals",
    org_img: gdsc,
    tags: "all python",
    org_tag: "all gdsc"
  },
  {
    org_name: "GDSC",
    title: "GDSC ZHCET Android App",
    Ideas: ["COntribute to the Android App counterpart for the GDSC ZHCET website"],
    mentors: [{name: "Sumir Vats", link: "mailto:sumirvats003@gmail.com"},{name: "Ahmad Bilal Zaidi", link:"mailto:ahmadbilal.199822@gmail.com"},{name: "Sadaf Zehra", link:"mailto:sadafzehra2001@gmail.com"},{name: "Siddique Ahmad", link:"mailto:ahmadsiddique7073@gmail.com"}],
    repo_link: "https://github.com/GDSC-ZHCET/GDSC-ZHCET-AndroidApp",
    org_img: gdsc,
    tags: "all app",
    org_tag: "all gdsc"
  },

  // Code4GovTech Projects
  {
    org_name: "C4GT",
    title: "Hinglish Transformer",
    Ideas: ["Create corpus of Hinglish- English sentence pairs",
            "Create pipeline for training transformer on corpus",
            "Create model finetuning pipeline for pre-trained model",
            "Create deployment setup"],
    mentors: [
      { name: "Gautam Rajeev", link: "https://github.com/GautamR-Samagra" },
    ],
    repo_link: "https://github.com/Code4GovTech/C4GT/wiki/WoC:-Hinglish-transformer",
    org_img: c4gt,
    tags: "all python ml",
    org_tag: "all c4gt"
  },
  {
    org_name: "C4GT",
    title: "Packing and implementing Samagra Data",
    Ideas: ["Testing ra-data-samagra module to check if it works as expected.",
            "Make the package more robust and release a version which contains fixes.",
            "Implement the latest version release in Samarth-Admin "],
    mentors: [
      { name: "Harshil Jani", link: "https://github.com/Harshil-Jani" },
    ],
    repo_link: "https://github.com/Code4GovTech/C4GT/wiki/WoC:-Packing-and-implementing-%60ra-data-samagra%60",
    org_img: c4gt,
    tags: "all web",
    org_tag: "all c4gt"
  },
  {
    org_name: "C4GT",
    title: "Access Control Auth",
    Ideas: ["We are trying to provide an easy way for developers to use FusionAuth for authentication and access control for their projects. With the help of contributions, we should be able to use this project on top of other projects. We should be able to use Single Sign On (SSO) to log in once, then get access to any standards-based application. We should also work on creating detailed documentation for the installation and usage of the Access Control project. This will help developers quickly set up and use the project."],
    mentors: [
      { name: "Khushboo Agarwal", link: "https://github.com/khushbooag4" },
    ],
    repo_link: "https://github.com/Code4GovTech/C4GT/wiki/WoC:-Access-Control-Auth",
    org_img: c4gt,
    tags: "all docker docs oauth",
    org_tag: "all c4gt"
  },

  // Devscript's Projects
  {
    org_name: "DevScript",
    title: "Code Khata",
    Ideas: ["A database of coding algorithms, patterns and guides to help beginners start easily."],
    mentors: [
      { name: "Mursal Furqan", link: "mailto:mursalfurqan@gmail.com" },
      { name: "Vedant Khairnar", link: "mailto:vedron007@gmail.com" }
    ],
    repo_link: "https://github.com/DevScript/Code-Khata",
    org_img: devscript,
    tags: "all docs",
    org_tag: "all devscript"
  },

  {
    org_name: "Shorto",
    title: "URL Shorter",
    Ideas: ["Shorto is a open source chrome extension which shortens the long URLs and is based on vanilla js which is a feature packed chrome extension"],
    mentors: [
      { name: "Vinyas Hegde", link: "mailto:vinyasvasanthegde7@gmail.com" },
      { name: "Savio Dias ", link: "mailto:diassavio629@gmail.com" }
    ],
    repo_link: "https://github.com/vinyashegde/shorto_url_shorter",
    org_img: shorto,
    tags: "all web",
    org_tag: "all shorto"
  },

  // Code Family's Projects
  {
    org_name: "Code Family",
    title: "Official Website",
    Ideas: ["This is the official CodeFamily website! Here you will find the latest updates and events, inspiring blogs, and resources to help you make the most of being part of the CodeFamily community. We are currently in the process of upgrading the website to make navigation more intuitive and user-friendly while addng new information and content to help you on your journey. We hope you enjoy the new and improved experience!"],
    mentors: [
      { name: "Nikita Wani", link: "mailto:kbtug20353@kbtcoe.org" },
    ],
    repo_link: "https://github.com/Codefamily-developer/Codefamily_Website",
    org_img: codeFamily,
    tags: "all web react",
    org_tag: "all codeFamily"
  },

  {
    org_name: "Code Family",
    title: "Digital Library",
    Ideas: ["A digital library website is a web-based platform that provies access to a variety of digital resources such as books, magazines, audio and video recordings, images, and other multimedia materials. The digital library website provides users with an easy and convenient way to access information and resources from anywhere in the world."],
    mentors: [
      { name: "Anurag Wagh", link: "mailto:kbtug20319@kbtcoe.org" },
    ],
    repo_link: "https://github.com/Codefamily-developer/Digital-Libray",
    org_img: codeFamily,
    tags: "all web python",
    org_tag: "all codeFamily"
  },

];

export default SliderData;
