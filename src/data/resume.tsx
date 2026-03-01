import { Icons } from "@/components/icons";
import { FileDown, HomeIcon, RocketIcon, Smartphone } from "lucide-react";

export const DATA = {
  name: "Pedro Reis",
  initials: "PR",
  url: "https://pedro-reis-portfolio.vercel.app",
  location: "Coimbra, Portugal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Team Lead & Senior Frontend Web & Mobile Engineer | Turning complex products into scalable, beautiful web experiences",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    // "Crazy about the music scene and all the new music releases (my fridays usually start with me checking my Spotify for the new music friday playlist).",
    "I’m a frontend engineer based in Coimbra, Portugal, currently a Senior Frontend Engineer at XING, a strategic move to master enterprise-level engineering standards and high-scale collaboration. I’m looking to move back into a management role where I can stay hands-on with tech while helping teams grow.\n\nWith over 10 years of experience building modular web and mobile apps using React, Next.js, and React Native, I create reusable component systems that enable cross-team scalability. I love solving problems creatively-every challenge usually has more than one good solution, and I enjoy finding them. I’m passionate about mentoring and leading by example, whether teaching at the Polytechnic of Coimbra or guiding interns and teammates to become amazing developers.\n\nWhen I’m not coding, you’ll probably find me geeking out over music, concerts, or bingeing a great TV show.",
  avatarUrl: "/pedro_avatar.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "SASS",
    "React-Native",
    "Expo",
    "Native Script",
    "Android",
    "Ruby on Rails",
  ],
  languages: [
    "Protuguese (Native)",
    "English (C1)",
    "Spanish (B1)",
    "Italian (A2)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/future-work", icon: RocketIcon, label: "Future work" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pmreis27@gmail.com",
    tel: "+35191506451",
    social: {
      CV: {
        name: "CV",
        url: "/Pedro-Reis-CV-Feb26.pdf",
        icon: FileDown,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pedromareis",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pedroreis95/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:pmreis27@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "XING (part of New Work SE)",
      href: "https://theloop.pt/",
      badges: [],
      location: "Porto, PT",
      title: "Senior Frontend Engineer",
      logoUrl: "/xing.png",
      start: "May 2025",
      end: null,
      description:
        "Responsible for the frontend and mobile teams as well as their work (reviews, planning and give technical support), their career progress and their satisfaction with the company and its projects. Also, responsible for defining architecture, planning and technical decisions of The Loop Co.'s frontend and mobile projects. Mentoring new members (curricular internships, summer internships, new members onboarding,…). Frontend and mobile development, mainly using JavaScript based frameworks (mostly with ReactJS, Next.JS, React Native, Expo, HTML/CSS, among others) and Ruby On Rails.",
    },
    {
      company: "The Loop Co. / LoopOS",
      href: "https://theloop.pt/",
      badges: [],
      location: "Coimbra, PT",
      title: "Head of Frontend & Mobile / Team Leader",
      logoUrl: "/loopco.jpeg",
      start: "Mar 2020",
      end: "Apr 2025",
      description:
        "Responsible for the frontend and mobile teams as well as their work (reviews, planning and give technical support), their career progress and their satisfaction with the company and its projects. Also, responsible for defining architecture, planning and technical decisions of The Loop Co.'s frontend and mobile projects. Mentoring new members (curricular internships, summer internships, new members onboarding,…). Frontend and mobile development, mainly using JavaScript based frameworks (mostly with ReactJS, Next.JS, React Native, Expo, HTML/CSS, among others) and Ruby On Rails.",
    },
    {
      company: "IPC - ISEC",
      href: "https://isec.pt/",
      badges: [],
      location: "Coimbra, PT",
      title: "Invited Assistant Professor",
      logoUrl: "/isec_logo.jpg",
      start: "Feb 2022",
      end: "Jul 2025",
      description:
        "Invited to teach the curricular unit of Scripting Languages (focused on JavaScript and ReactJS) for the bachelor's in Informatics Engineering.",
    },
    {
      company: "IPC - ESTGOH",
      badges: [],
      href: "https://estgoh.ipc.pt",
      location: "Coimbra, PT",
      title: "Invited Assistant Professor",
      logoUrl: "/estgoh.png",
      start: "Oct 2021",
      end: "Jul 2021",
      description:
        "Invited to teach the curricular units of Programming Fundamentals (in C) and Web Programming (HTML, CSS, JavaScript and ReactJS) for the specialization course in Informatics Technology (part of Deloitte's Bright Start Programm).",
    },
    {
      company: "Spotside (former Crossing Answers & Luope)",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Mobile Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQH_ERWyRwVNAw/company-logo_200_200/company-logo_200_200/0/1672343880443?e=2147483647&v=beta&t=RkuAdF_ohsCSX9_yqfeAMalDbyUxWDeCY0ofljVH0IQ",
      start: "Oct 2016",
      end: "Mar 2020",
      description:
        "Responsible for the development and deploy of Crossing Answers and Luope mobile applications, using technologies such as Java Android, NativeScript and React Native (JavaScript based frameworks for mobile development).",
    },
  ],
  education: [
    {
      school: "IPC - ISEC",
      href: "https://isec.pt",
      degree:
        "MsC in Informatics and Systems - Software Development specialization",
      logoUrl: "/isec_logo.jpg",
      start: "2021",
      end: "2017",
      description:
        "Final grade: 16 out of 20. Master thesis in 'Applying a methodology to develop usability and UX heuristics' with a final grade of 18 out of 20. 3 Published papers in international conferences related to the master thesis.",
    },
    {
      school: "IPC - ISEC",
      href: "https://isec.pt",
      degree:
        "BsC in Informatics Engineering - Application Development specialization",
      logoUrl: "/isec_logo.jpg",
      start: "2013",
      end: "2017",
      description: "Final grade: 13 out of 20",
    },
  ],
  projects: [
    {
      title: "LoopOS",
      href: "https://loop-os.com/",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "The ecosystem for the circular economy. Composed by 8 applications, that go from ReactJS to Ruby on Rails, to create fully functional and customisable circular economy flows. Here, I've been leading all the frontend aspects of the development of the ReactJS apps.",
      technologies: [
        "Next.js",
        "ReactJS",
        "TypeScript",
        "TailwindCSS",
        "SASS",
        "Storybook",
        "Ruby on Rais",
      ],
      links: [
        {
          type: "Website",
          href: "https://loop-os.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "FNAC Restart",
          href: "https://fnacrestart.loop-os.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/loopos.png",
      video: "",
    },
    {
      title: "Sonae Books",
      href: "https://livrosescolares.continente.pt/",
      dates: "May 2020 - Present",
      active: true,
      description:
        "A web platform to purchase school books for the Sonae group, the biggest retailer in Portugal, where I've lead the frontend development of it.",
      technologies: ["Next.js", "ReactJS", "TypeScript", "SASS"],
      links: [
        {
          type: "Continente",
          href: "https://livrosescolares.continente.pt/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Note!",
          href: "https://escolanote.pt/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sonae.png",
      video: "",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "CVP / ANF",
      href: "https://agendamento.farmaciasportuguesas.pt/",
      dates: "2021 - Present",
      active: true,
      description:
        "A web platform to schedule medical appointments in the Portuguese Pharmacies. I've worked on the frontend of 2 related applications (the public app and the backoffice one).",
      technologies: ["Next.js", "ReactJS", "TypeScript", "SASS", "Material UI"],
      links: [
        {
          type: "Website",
          href: "https://agendamento.farmaciasportuguesas.pt/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/anf.png",
      video: "",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "TicketLine - Access Control",
      href: "https://ticketline.sapo.pt/",
      dates: "2022-2023",
      active: true,
      description:
        "A mobile app to validate the entrace to TicketLine events made with Expo (React Native).",
      technologies: [
        "React Native",
        "Expo",
        "Android",
        "Fastlane",
        "TypeScript",
        "styled-components",
      ],
      links: [
        {
          type: "Android App (PlayStore)",
          href: "https://play.google.com/store/apps/details?id=pt.ticketline.controlodeacessos&hl=pt_PT",
          icon: <Smartphone className="size-3" />,
        },
      ],
      image: "/tl.png",
      video: "",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
