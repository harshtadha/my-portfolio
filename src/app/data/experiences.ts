export type Experience = {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  section: 'Work' | 'Mentorship';
};

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer - React Native/React',
    company: 'Nisum Canada Inc.',
    period: 'May 2024 - Jaly 2025',
    section: 'Work',
    description: [
      'Directed end-to-end web and mobile development, including architecture design, feature implementation, and maintenance.',
      'Led migration efforts from legacy native modules to a unified React Native 0.71+ architecture, reducing code duplication and improving release velocity by 30%.',
      'Developed and optimized mobile applications, with full responsibility from feature planning to App Store and Google Play deployment, Used Jest and React Testing Library for unit and integration testing to ensure accuracy and long-term maintainability, also Created Custom libraries using Typescript.',
      'Utilized Xcode and Android Studio for native configuration, builds, and performance diagnostics.',
    ]
  },
  {
    title: 'Mobile Application Developer - React Native',
    company: 'SCIKEY Infotech',
    period: 'Dec 2020 - Dec 2023',
    section: 'Work',
    description: [
      'Developed robust client-facing applications using React, React native, Next.js, and TypeScript, JavaScript with seamless authentication/authorization implementations.',
      'Collaborated closely with product and QA teams to define and analyze client requirements and deliver scalable mobile apps across iOS and Android.',
      'Created and maintained CI/CD pipelines, managing automatic deployment processes and code versioning via Git.',
      'Implemented responsive UIs based on UI/UX best practices, integrating RESTful APIs with loading state handling.',
      'Set up push notifications, deep linking, and Redux-based flows for dynamic content delivery.',
    ]
  },
  {
    title: 'Software Developer - React Native',
    company: 'WEBITO Pvt Ltd',
    period: 'Oct 2018 - Nov 2020',
    section: 'Work',
    description: [
      'Contributed to full-stack development of mobile and web apps using React, React Native, Redux, and Node.js.',
      'Assisted in building and maintaining cross-platform mobile apps using React Native, JavaScript, and TypeScript.',
      'Participated in app deployment for Android and iOS using Android Studio and Xcode.',
      'Helped implement push notifications, deep linking, and optimized app performance.',
    ]
  },
  {
    title: 'Technical Mentor - Mobile & Web Development',
    company: 'SCIKEY Infotech',
    period: 'Feb 2022 –  March 2025',
    section: 'Mentorship',
    description: [
      'Delivered technical training and mentorship to junior and mid-level developers on Mobile and Web platforms. ',
      'Led hands-on workshops covering topics such as mobile app architecture, CI/CD integration, debugging, and deployment workflows. ',
      'Supported project teams with real-time guidance on architectural decisions, code reviews, and development challenges.'
    ]
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'Laurentian University',
    location: 'Sudbury, Canada',
    period: 'Jan 2024 – Jan 2025',
    section: 'Mentorship',
    description: [
      'Assisted in Machine Learning, Python, Artificial Intelligence, SDLC and Mobile Software Architecture, guiding students in programming, custom library development, and best practices.',
      'Research and Development in software development and Mobile Architecture with implementing AI features.'
    ]
  }
];
