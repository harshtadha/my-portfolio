export type Project = {
  title: string;
  description: string;
  details: string;
  screenshots: string[];
  tech: string[];
  github?: string;
  demo?: string;
  playstore?: string;
  appstore?: string;
};

export const projects: Project[] = [
  {
    title: "Fintech App",
    description: "This React Native FinTech clone is inspired by the Revolut app, delivering a seamless and modern mobile banking experience with secure OTP-based authentication powered by Clerk. Built using Expo Router for file-based navigation and API routes, the app ensures an intuitive and scalable structure for feature-rich financial operations.",
    details: "This website features a projects gallery, about section, and contact form. Deployed on Firebase Hosting with CI/CD.",
    screenshots: [
            "/fintech/charts.gif", 
      "/fintech/lockscreen.gif", 
      "/fintech/login.gif", 
      "/fintech/state.gif", 
      "/fintech/1.png",
      "/fintech/2.png",
      "/fintech/3.png",
      "/fintech/4.png",
      "/fintech/5.png",
      "/fintech/6.png",
      "/fintech/8.png",
      "/fintech/9.png",
      "/fintech/10.png", 
      "/fintech/11.png", 
    ],
    tech: ["React Native", "TypeScript", "JavaScript", 'GraphQL',"TailwindCSS", "Firebase"],
    // playstore: "https://play.google.com/store/apps/details?id=com.wpeventmanager&hl=en_IN",
    // appstore: "https://apps.apple.com/in/app/wp-event-manager/id1554422731",
    github: "https://github.com/harshtadha/fintech",

  },
  {
    title: "Cliq App",
    description: "This is a Ecommerce app build over react native runs over android & ios. This app has a lot of similarties with Tata Cliq App and sample data collected for educational purposes only.",
    details: "This website features a projects gallery, about section, and contact form. Deployed on Firebase Hosting with CI/CD.",
    screenshots: [
      "/cliq/1.jpg",
      "/cliq/2.jpg",
      "/cliq/3.jpg",
      "/cliq/4.jpg",
      "/cliq/5.jpg",
      "/cliq/6.jpg",
      "/cliq/7.jpg",
      "/cliq/8.jpg",
      "/cliq/9.png",
    ],
    tech: ["React Native",'expo', "TypeScript", "JavaScript", 'GraphQL',"TailwindCSS",'zustand'],
    // playstore: "https://play.google.com/store/apps/details?id=com.wpeventmanager&hl=en_IN",
    // appstore: "https://apps.apple.com/in/app/wp-event-manager/id1554422731",
    github: "https://github.com/harshtadha/cliq",

  },
  {
    title: "Deal-Mart ( Web and Mobile App )",
    description: "Deal Mart is a modern marketplace web application built with React, featuring a complete authentication flow (login, signup, resend code, logout) and seamless API integration for real-time data. It includes a dynamic home page displaying marketplace listings, a personalized user dashboard showing account information and activities, and a support page explaining the platform. The project demonstrates strong frontend development skills with secure authentication, state management, and clean UI design.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [ 
      "/dealmart/1.png",
      "/dealmart/2.png",
      "/dealmart/3.png",
   
      "/dealmart/5.png",
    
      "/dealmart/7.png",
         "/dealmart/4.png",
           "/dealmart/6.png",
      "/dealmart/8.png",
      "/dealmart/9.png", 
      "/dealmart/10.png", 
      "/dealmart/11.png", 
    ],
    tech: ["React Native",'React',"Next.js", "TypeScript", "JavaScript (ES6)", "Tailwind CSS","CSS"],
    // playstore: "https://play.google.com/store/apps/details?id=com.aoe2companion",
    // appstore: "https://apps.apple.com/us/app/aoe-ii-companion/id1518463195",
    github:'https://github.com/harshtadha/Deal-Mart'
  },
  {
    title: "AoE II Companion",
    description: "This app is a complete companion for strategy game players, helping you track performance, explore data, and improve gameplay. You can follow other players to see their recent matches and stats, or enter your Steam/Xbox username to view your profile with ratings, match history, and insights into your most played civilizations, maps, and allies. The app includes player search, detailed leaderboards. It also offers in-depth sections for Civilizations, Units, and Techs, providing details on bonuses, stats, upgrades, and counters. Everything you need to analyze progress and refine your strategy—all in one place.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [ 
      "/aoe/1.png",
      "/aoe/2.jpg",
      "/aoe/3.jpg",
      "/aoe/4.jpg",
      "/aoe/5.jpg",
      "/aoe/6.jpg",
      "/aoe/7.jpg",
      "/aoe/8.jpg",
      "/aoe/9.jpg", 
      "/aoe/10.jpg", 
    ],
    tech: ["React Native",'expo', "TypeScript", "JavaScript", "Firebase", "tailwindcss","Next.js", 'MongoDB', 'Express.js'],
    playstore: "https://play.google.com/store/apps/details?id=com.aoe2companion",
    appstore: "https://apps.apple.com/us/app/aoe-ii-companion/id1518463195",
    github:'https://github.com/harshtadha/aoe2companion'
  },
  {
    title: "Wellbeing - Health App",
    description: "The AI Health Assistant is an intelligent healthcare platform that simplifies access to medical care through AI-powered symptom analysis and seamless doctor connectivity. It helps users understand potential conditions, discover certified healthcare professionals, and book appointments effortlessly. With integrated video consultations and offline-first messaging, patients can receive expert care anytime, anywhere. Built with modern technologies like React Native, Node.js, MongoDB, and TensorFlow, it bridges the gap between patients and doctors through smart automation and an intuitive user experience.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [ 
      "/wellbeing/1.png",
      "/wellbeing/2.png",
      "/wellbeing/3.png",
      "/wellbeing/4.png",
      "/wellbeing/5.png",
      "/wellbeing/6.png",
    ],
    tech: ["React Native",'expo', "Redux Saga",'Firestore',"TypeScript", "JavaScript","Node.js" ,"Express" , "MongoDB" ,"TensorFlow", "WebRTC","Redux","AWS", 'GraphQL'],
    github:'https://github.com/harshtadha/wellbeing'
  },
  {
    title: "Wellbeing - Doctor",
    description: "The Wellbeing-Doctor Coordination App is a comprehensive platform designed to simplify healthcare management for doctors. It allows professionals to efficiently schedule and coordinate patient appointments, track earnings with detailed financial insights, and maintain seamless communication through secure messaging and video calls. By combining convenience, transparency, and connectivity, the app empowers doctors to deliver better patient care while managing their workflow effortlessly.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [ 
      "/wellbeing-doctor/1.png",
      "/wellbeing-doctor/2.png",
      "/wellbeing-doctor/3.png",
      "/wellbeing-doctor/4.png",
      // "/wellbeing-doctor/5.png",
    ],
    tech: ["React Native",'Redux',"TypeScript", "JavaScript", "Firebase",'GraphQL','Watermelondb','MMKV','WebRTC','Firestore'],
    github:'https://github.com/harshtadha/wellbeing-doctorcon'
  },
  {
    title: "Yum Meals",
    description: "YumMeals is an online food ordering app inspired by modern delivery platforms like Uber Eats and DoorDash but built with a simpler, more streamlined design. Users can search for restaurants by city, view available options nearby, and enjoy core features like user registration/login, customizable profiles with avatars, and the ability to save favorite restaurants. The app includes a full ordering and checkout experience powered by the Stripe API, allowing users to add items to their cart and make secure test payments using Stripe’s provided sample card details.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [ 
      "/yummeals/1.gif",
      "/yummeals/2.gif",
      "/yummeals/3.gif",
      "/yummeals/4.png",
      "/yummeals/5.png",
      "/yummeals/6.png",
    ],
    tech: ["React Native",'expo', "TypeScript", "JavaScript", "Firebase", "styled-components"],
    // playstore: "https://play.google.com/store/apps/details?id=com.aoe2companion",
    // appstore: "https://apps.apple.com/us/app/aoe-ii-companion/id1518463195",
    github:'https://github.com/harshtadha/YumMeals'
  },
  {
    title: "SRK.One E-Commerce App",
    description: "A full-featured e-commerce mobile app built with React Native, TypeScript, and Firebase. Includes authentication, cart, payments, and push notifications.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [
      "/srkone/1.png",
      "/srkone/2.png",
      "/srkone/3.png",
       "/srkone/4.png",
      "/srkone/5.png",
      "/srkone/6.png",
      "/srkone/7.png",
      "/srkone/8.png",
            "/srkone/9.png",
      "/srkone/10.png",

      "/srkone/11.png",
      "/srkone/12.png",
      "/srkone/13.png",
      "/srkone/14.png",
            "/srkone/15.png",
      "/srkone/16.png",
      "/srkone/17.png",
      "/srkone/18.png",
    ],
    tech: ["React Native", "React",'Redux toolkit', "TypeScript", "JavaScript", "Firebase", "Node.js","Next.js", 'MongoDB', 'Express.js'],
    playstore: "https://play.google.com/store/apps/details?id=com.srk&pcampaignid=web_share",
    appstore: "https://apps.apple.com/ca/app/srkone/id486732739"
  },
  // {
  //   title: "PureGo Diamond ",
  //   description: "A modern SaaS dashboard for analytics and user management, built with Next.js, Node.js, Express.js, and GraphQL.",
  //   details: "The dashboard features real-time analytics, user roles, and a responsive UI. Backend is powered by Node.js, Express.js, and GraphQL APIs, with authentication and cloud deployment on GCP.",
  //   screenshots: [
  //     "/purego/4.png",
  //     "/purego/5.png",
  //     "/purego/11.png",
  //     "/purego/12.png",
  //     "/purego/13.png",
  //     "/purego/14.png",
  //     "/purego/16.png",
  //     "/purego/17.png",
  //   ],
  //   tech: ["React Native", "Next.js", "React", "PostgreSQL", "GraphQL", "GCP", 'Firebase'],
  //   github: "https://github.com/example/nextjs-saas-dashboard",
  //   demo: "https://saas-dashboard.example.com/"
  // },
  // {
  //   title: "HCIS-(Human Capital Information System)",
  //   description: "HCIS is a mobile Application that is part of a HR-Management System, Where all Employees can get new announcements, Important messages, surveys, feedback form from the management their respective teamleads and also can feel that form.",
  //   details: "This website features a projects gallery, about section, and contact form. Deployed on Firebase Hosting with CI/CD.",
  //   screenshots: [
  //     "/purego/6.png",
  //     "/purego/7.png",
  //     "/purego/11.png",
  //     "/purego/12.png",
  //     "/purego/13.png",
  //     "/purego/14.png",
  //     "/purego/16.png",
  //     "/purego/17.png",
  //   ],
  //   tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
  //   playstore: "https://play.google.com/store/apps/details?id=com.hcisapp.prod&pcampaignid=web_sharem",
  //   appstore: "https://apps.apple.com/in/app/pure-hcis/id1665509381"
  // },
  // {
  //   title: "XtendedSpace (Co-Working Space Booking App)",
  //   description: "A responsive portfolio website to showcase projects, skills, and experience. Built with React, TypeScript, and TailwindCSS.",
  //   details: "XtendedSpace is a mobile application where user can search for property and rent property for business as well as for housing purposes. user can list their property for rent out their property. Razorpay payment is integrated for billing and payment purposes.",
  //   screenshots: [
  //     "/purego/8.png",
  //     "/purego/9.png",
  //     "/purego/11.png",
  //     "/purego/12.png",
  //     "/purego/13.png",
  //     "/purego/14.png",
  //     "/purego/16.png",
  //     "/purego/17.png",
  //   ],
  //   tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
  //   playstore: "https://play.google.com/store/apps/details?id=com.xtendedspaceapp&hl=en_IN",
  //   appstore: "https://apps.apple.com/in/app/xtended-space/id1671530684"
  // },
  // {
  //   title: "Event Manager App - WP Event Manager",
  //   description: "A React-Native mobile app that streamlines event management with easy attendee check-ins, QR code scanning, real-time tracking, offline support, customisable themes, and multi-language options for a seamless user experience.",
  //   details: "This website features a projects gallery, about section, and contact form. Deployed on Firebase Hosting with CI/CD.",
  //   screenshots: [
  //     "/purego/10.png",
  //     "/purego/11.png",
  //     "/purego/11.png",
  //     "/purego/12.png",
  //     "/purego/13.png",
  //     "/purego/14.png",
  //     "/purego/16.png",
  //     "/purego/17.png",
  //   ],
  //   tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
  //   playstore: "https://play.google.com/store/apps/details?id=com.wpeventmanager&hl=en_IN",
  //   appstore: "https://apps.apple.com/in/app/wp-event-manager/id1554422731"
  // }
];
