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
    title: 'Full Stack Developer - Mobile & Web Development',
    company: 'Nisum Canada Inc.',
    period: 'April 2024 - October 2025',
    section: 'Work',
    description: [
     
    ]
  },
  {
    title: 'Full-Stack Software Engineer ( Senior React Native Developer )',
    company: 'SCIKEY Infotech',
    period: 'Dec 2020 - Dec 2023',
    section: 'Work',
    description: [
     
    ]
  },
  {
    title: 'Software Developer - Frontend / Mobile',
    company: 'WEBITO Pvt Ltd',
    period: 'June 2019 - Nov 2020',
    section: 'Work',
    description: [
     
    ]
  },
  {
    title: 'Technical Mentor - Mobile & Web Development',
    company: 'SCIKEY Infotech',
    period: 'Feb 2022 –  March 2025',
    section: 'Mentorship',
    description: [
     
    ]
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'Laurentian University',
    location: 'Sudbury, Canada',
    period: 'Jan 2024 – Jan 2025',
    section: 'Mentorship',
    description: [
    
    ]
  }
];
