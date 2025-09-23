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
    title: "SRK.One E-Commerce App",
    description: "A full-featured e-commerce mobile app built with React Native, TypeScript, and Firebase. Includes authentication, cart, payments, and push notifications.",
    details: "This application allows users to browse products, add to cart, checkout with payment integration, and track orders. Built for both Android and iOS with a scalable backend on Firebase and GCP.",
    screenshots: [
      "/purego/1.png",
      "/purego/2.png",
      "/purego/3.png",
      "/purego/11.png",
      "/purego/12.png",
      "/purego/13.png",
      "/purego/14.png",
      "/purego/16.png",
      "/purego/17.png",
    ],
    tech: ["React Native", "React",'Redux toolkit', "TypeScript", "JavaScript", "Firebase", "Node.js","Next.js", 'MongoDB', 'Express.js'],
    playstore: "https://play.google.com/store/apps/details?id=com.srk&pcampaignid=web_share",
    appstore: "https://apps.apple.com/ca/app/srkone/id486732739"
  },
  {
    title: "PureGo Diamond ",
    description: "A modern SaaS dashboard for analytics and user management, built with Next.js, Node.js, Express.js, and GraphQL.",
    details: "The dashboard features real-time analytics, user roles, and a responsive UI. Backend is powered by Node.js, Express.js, and GraphQL APIs, with authentication and cloud deployment on GCP.",
    screenshots: [
      "/purego/4.png",
      "/purego/5.png",
      "/purego/11.png",
      "/purego/12.png",
      "/purego/13.png",
      "/purego/14.png",
      "/purego/16.png",
      "/purego/17.png",
    ],
    tech: ["React Native", "Next.js", "React", "PostgreSQL", "GraphQL", "GCP", 'Firebase'],
    github: "https://github.com/example/nextjs-saas-dashboard",
    demo: "https://saas-dashboard.example.com/"
  },
  {
    title: "HCIS-(Human Capital Information System)",
    description: "HCIS is a mobile Application that is part of a HR-Management System, Where all Employees can get new announcements, Important messages, surveys, feedback form from the management their respective teamleads and also can feel that form.",
    details: "This website features a projects gallery, about section, and contact form. Deployed on Firebase Hosting with CI/CD.",
    screenshots: [
      "/purego/6.png",
      "/purego/7.png",
      "/purego/11.png",
      "/purego/12.png",
      "/purego/13.png",
      "/purego/14.png",
      "/purego/16.png",
      "/purego/17.png",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
    playstore: "https://play.google.com/store/apps/details?id=com.hcisapp.prod&pcampaignid=web_sharem",
    appstore: "https://apps.apple.com/in/app/pure-hcis/id1665509381"
  },
  {
    title: "XtendedSpace (Co-Working Space Booking App)",
    description: "A responsive portfolio website to showcase projects, skills, and experience. Built with React, TypeScript, and TailwindCSS.",
    details: "XtendedSpace is a mobile application where user can search for property and rent property for business as well as for housing purposes. user can list their property for rent out their property. Razorpay payment is integrated for billing and payment purposes.",
    screenshots: [
      "/purego/8.png",
      "/purego/9.png",
      "/purego/11.png",
      "/purego/12.png",
      "/purego/13.png",
      "/purego/14.png",
      "/purego/16.png",
      "/purego/17.png",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
    playstore: "https://play.google.com/store/apps/details?id=com.xtendedspaceapp&hl=en_IN",
    appstore: "https://apps.apple.com/in/app/xtended-space/id1671530684"
  },
  {
    title: "Event Manager App - WP Event Manager",
    description: "A React-Native mobile app that streamlines event management with easy attendee check-ins, QR code scanning, real-time tracking, offline support, customisable themes, and multi-language options for a seamless user experience.",
    details: "This website features a projects gallery, about section, and contact form. Deployed on Firebase Hosting with CI/CD.",
    screenshots: [
      "/purego/10.png",
      "/purego/11.png",
      "/purego/11.png",
      "/purego/12.png",
      "/purego/13.png",
      "/purego/14.png",
      "/purego/16.png",
      "/purego/17.png",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
    playstore: "https://play.google.com/store/apps/details?id=com.wpeventmanager&hl=en_IN",
    appstore: "https://apps.apple.com/in/app/wp-event-manager/id1554422731"
  }
];
