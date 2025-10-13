"use client"

// Shared CSS variable style for cards and skills
const cardVars = {
  '--font-sans': 'ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  '--font-mono': 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  '--color-black': '#000',
  '--color-white': '#ebe1e1ff',
  '--spacing': '.25rem',
  '--container-md': '28rem',
  '--container-2xl': '42rem',
  '--container-4xl': '56rem',
  '--container-6xl': '72rem',
  '--text-xs': '.75rem',
  '--text-xs--line-height': 'calc(1/.75)',
  '--text-sm': '.875rem',
  '--text-sm--line-height': 'calc(1.25/.875)',
  '--text-lg': '1.125rem',
  '--text-lg--line-height': 'calc(1.75/1.125)',
  '--text-xl': '1.25rem',
  '--text-xl--line-height': 'calc(1.75/1.25)',
  '--text-2xl': '1.5rem',
  '--text-2xl--line-height': 'calc(2/1.5)',
  '--text-3xl': '1.875rem',
  '--text-3xl--line-height': 'calc(2.25/1.875)',
  '--text-4xl': '2.25rem',
  '--text-4xl--line-height': 'calc(2.5/2.25)',
  '--text-5xl': '3rem',
  '--text-5xl--line-height': '1',
  '--text-6xl': '3.75rem',
  '--text-6xl--line-height': '1',
  '--text-7xl': '4.5rem',
  '--text-7xl--line-height': '1',
  '--font-weight-medium': '500',
  '--font-weight-semibold': '600',
  '--font-weight-bold': '700',
  '--leading-tight': '1.25',
  '--leading-relaxed': '1.625',
  '--radius-md': '.375rem',
  '--radius-lg': '.5rem',
  '--radius-xl': '.75rem',
  '--radius-2xl': '1rem',
  '--ease-out': 'cubic-bezier(0,0,.2,1)',
  '--ease-in-out': 'cubic-bezier(.4,0,.2,1)',
  '--blur-md': '12px',
  '--blur-xl': '24px',
  '--blur-2xl': '40px',
  '--default-transition-duration': '.15s',
  '--default-transition-timing-function': 'cubic-bezier(.4,0,.2,1)',
  '--default-font-family': 'var(--font-sans)',
  '--default-mono-font-family': 'var(--font-mono)',
  '--background': '222.2 84% 4.9%',
  '--foreground': '210 40% 98%',
  '--card': '222.2 84% 4.9%',
  '--card-foreground': '210 40% 98%',
  '--popover': '222.2 84% 4.9%',
  '--popover-foreground': '210 40% 98%',
  '--primary': '262.1 83.3% 57.8%',
  '--primary-foreground': '210 40% 98%',
  '--secondary': '217.2 32.6% 17.5%',
  '--secondary-foreground': '210 40% 98%',
  '--muted': '217.2 32.6% 17.5%',
  '--muted-foreground': '215 20.2% 65.1%',
  '--accent': '217.2 32.6% 17.5%',
  '--accent-foreground': '210 40% 98%',
  '--destructive': '0 62.8% 30.6%',
  '--destructive-foreground': '210 40% 98%',
  '--border': '217.2 32.6% 17.5%',
  '--input': '217.2 32.6% 17.5%',
  '--ring': '262.1 83.3% 57.8%',
  '--radius': '.75rem',
  fontFamily: 'var(--font-sans)',
  background: 'hsl(var(--card))',
  border: '1px solid hsl(var(--border))',
  borderRadius: 'var(--radius)',
  padding: '1rem',
  color: 'white',
  transition: 'all .3s',
  transform: 'translateY(-4px)',
  // fontColor: 'white',
  boxShadow: '0 20px 25px -5px rgba(0,0,0,.3),0 10px 10px -5px rgba(0,0,0,.1)',
};
import { experiences, type Experience } from "./data/experiences";
import { projects, type Project } from "./data/projects";
import summary from "./data/ProfessionalSummary";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import EducationSection from "./components/EducationSection";

function ExperienceSection() {
  return (
    <section className="max-w-6xl mx-auto py-6 animate-fade-in-up px-2 sm:px-0">
  <h2 className="text-lg sm:text-3xl font-bold text-white mb-6 sm:mb-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-sans">WORK EXPERIENCE</h2>
      <div className="relative flex flex-col gap-8 sm:gap-12">
        {/* Single Timeline vertical line for Work Experience */}
        {/* <div className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-blue-900 z-0 rounded-full"
          style={{
            minHeight: '100%',
            left: '3.5rem', // Center of the icon (mr-3 = 0.75rem + icon 4rem/2 = 2rem, so 2rem + 1.5rem)
            // For sm:mr-5 (1.25rem) + icon 4rem/2 = 2rem, so 2rem + 2.5rem = 4.5rem, but we use 3.5rem for best fit
            transform: 'translateX(-50%)'
          }}
        ></div> */}
        {experiences.filter(e => e.section === 'Work').map((exp, idx, arr) => (
          <div key={exp.title + exp.period} className="relative group flex items-start">
            {/* Briefcase icon for work experience */}
            <div className="z-10 flex flex-col items-center mr-1 sm:mr-5" >
              <div className="flex-shrink-0 w-13 h-13 rounded-full flex items-center justify-center border-2 border-zinc-600 shadow-lg mb-2" style={{ background: 'linear-gradient(135deg, #0b0b13ff 0%, #18181b 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-8 h-8" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
              </div>
              {/* Line below icon except for last item */}
              {/* {idx !== arr.length - 1 && (
                <span className="w-0.5 sm:w-1 bg-blue-900 flex-1 mt-0.5 mb-0.5 rounded-full" style={{ minHeight: '32px' }}></span>
              )} */}
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#23233a] via-[#1e293b] to-[#0f172a] rounded-xl shadow-2xl p-4 sm:p-6 mb-2 border border-zinc-900 relative z-20" style={cardVars}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg font-bold text-white mr-0 sm:mr-2 font-sans">{exp.title}</span>
                    <span className="text-xs sm:text-base text-zinc-400 font-semibold font-sans">@ {exp.company}{exp.location ? `, ${exp.location}` : ''}</span>
                  </div>
                  {/* Time frame visually highlighted */}
                  <span className="text-xs sm:text-base font-semibold px-2 py-1 rounded bg-blue-900/40 text-blue-200 border border-blue-800 mt-1 sm:mt-0 whitespace-nowrap font-sans">
                    {exp.period}
                  </span>
                </div>
                <div className="text-zinc-500 text-sm sm:text-base leading-relaxed font-sans">
                  {exp.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  <h2 className="text-lg sm:text-3xl font-bold text-white mb-6 sm:mb-12 mt-12 sm:mt-24 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-sans">TECHNICAL MENTORSHIP</h2>
      <div className="relative flex flex-col gap-8 sm:gap-12">
        {/* Single Timeline vertical line for Technical Mentorship */}
        {/* <div className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-purple-900 z-0 rounded-full"
          style={{
            minHeight: '100%',
            left: '3.5rem',
            transform: 'translateX(-50%)'
          }}
        ></div> */}
        {experiences.filter(e => e.section === 'Mentorship').map((exp, idx, arr) => (
            <div key={exp.title + exp.period} className="relative group flex items-start">
              {/* Briefcase icon for work experience */}
            <div className="z-10 flex flex-col items-center mr-3 sm:mr-5">
              <div className="flex-shrink-0 w-13 h-13 rounded-full flex items-center justify-center border-2 border-zinc-600 shadow-lg mb-2" style={{ background: 'linear-gradient(135deg, #0b0b13ff 0%, #18181b 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-8 h-8" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
              </div>
              {/* Line below icon except for last item */}
              {/* {idx !== arr.length - 1 && (
                <span className="w-0.5 sm:w-1 bg-blue-900 flex-1 mt-0.5 mb-0.5 rounded-full" style={{ minHeight: '32px' }}></span>
              )} */}
            </div>
              <div className="flex-1">
              <div className="bg-gradient-to-br from-[#23233a] via-[#1e293b] to-[#0f172a] rounded-xl shadow-2xl p-4 sm:p-6 mb-2 border border-zinc-900 relative z-20" style={cardVars}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-base sm:text-lg font-bold text-white mr-0 sm:mr-2 font-sans">{exp.title}</span>
                      <span className="text-xs sm:text-base text-zinc-400 font-semibold font-sans">@ {exp.company}{exp.location ? `, ${exp.location}` : ''}</span>
                    </div>
                    {/* Time frame visually highlighted */}
                    <span className="text-xs sm:text-base font-semibold px-2 py-1 rounded bg-blue-900/40 text-blue-200 border border-blue-800 mt-1 sm:mt-0 whitespace-nowrap font-sans">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-zinc-500 text-sm sm:text-base leading-relaxed font-sans" style={{ whiteSpace: 'pre-line', color: 'coolgray'}}>
                    {exp.description}
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




const techFilters = [
  "React",
  "React Native",
  "Redux Toolkit",
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "GCP",
  "Firebase",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
  "Git",
  "Docker",
  "Jest",
  "Cypress",
  "Agile",
  "Scrum",
  "CI/CD",
  "UI/UX Design",
  'Android studio',
  'Xcode',
  'Jira',
  'Slack',
  'VS Code',
  'Postman',
  'AWS',
];



type CardProps = {
  project: Project;
};




type ImageModalProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};
function ImageModal({ images, initialIndex, onClose }: ImageModalProps) {
  const [current, setCurrent] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent(c => (c > 0 ? c - 1 : c));
      if (e.key === "ArrowRight") setCurrent(c => (c < images.length - 1 ? c + 1 : c));
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, images.length]);
  if (!images.length) return null;
  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm focus:outline-none"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="max-h-[80vh] max-w-[90vw] rounded-xl border-4 border-zinc-700 shadow-2xl animate-fade-in-up bg-[#18181b]"
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl bg-zinc-900/80 rounded-full px-3 py-1 hover:bg-zinc-800 transition-colors shadow-lg border border-zinc-700"
              onClick={() => setCurrent(c => (c > 0 ? c - 1 : c))}
              aria-label="Previous image"
              style={{ left: '-2.5rem' }}
              disabled={current === 0}
            >
              &#8592;
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl bg-zinc-900/80 rounded-full px-3 py-1 hover:bg-zinc-800 transition-colors shadow-lg border border-zinc-700"
              onClick={() => setCurrent(c => (c < images.length - 1 ? c + 1 : c))}
              aria-label="Next image"
              style={{ right: '-2.5rem' }}
              disabled={current === images.length - 1}
            >
              &#8594;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === current ? 'bg-blue-400' : 'bg-zinc-600'}`}></span>
              ))}
            </div>
          </>
        )}
        <button
          className="absolute -top-6 right-0 text-white text-3xl font-bold bg-zinc-900/90 rounded-full px-4 py-1 hover:bg-zinc-800 transition-colors shadow-lg border border-zinc-700"
          onClick={onClose}
          aria-label="Close zoomed image"
          autoFocus
        >
          &times;
        </button>
      </div>
    </div>
  );
}

function Card({ project, onImageClick }: { project: Project; onImageClick: (images: string[], idx: number) => void }) {
  const hasMultiple = project.screenshots.length > 1;
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const cardVars = {
    '--font-sans': 'ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    '--font-mono': 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    '--color-black': '#000',
    '--color-white': '#fff',
    '--spacing': '.25rem',
    '--container-md': '28rem',
    '--container-2xl': '42rem',
    '--container-4xl': '56rem',
    '--container-6xl': '72rem',
    '--text-xs': '.75rem',
    '--text-xs--line-height': 'calc(1/.75)',
    '--text-sm': '.875rem',
    '--text-sm--line-height': 'calc(1.25/.875)',
    '--text-lg': '1.125rem',
    '--text-lg--line-height': 'calc(1.75/1.125)',
    '--text-xl': '1.25rem',
    '--text-xl--line-height': 'calc(1.75/1.25)',
    '--text-2xl': '1.5rem',
    '--text-2xl--line-height': 'calc(2/1.5)',
    '--text-3xl': '1.875rem',
    '--text-3xl--line-height': 'calc(2.25/1.875)',
    '--text-4xl': '2.25rem',
    '--text-4xl--line-height': 'calc(2.5/2.25)',
    '--text-5xl': '3rem',
    '--text-5xl--line-height': '1',
    '--text-6xl': '3.75rem',
    '--text-6xl--line-height': '1',
    '--text-7xl': '4.5rem',
    '--text-7xl--line-height': '1',
    '--font-weight-medium': '500',
    '--font-weight-semibold': '600',
    '--font-weight-bold': '700',
    '--leading-tight': '1.25',
    '--leading-relaxed': '1.625',
    '--radius-md': '.375rem',
    '--radius-lg': '.5rem',
    '--radius-xl': '.75rem',
    '--radius-2xl': '1rem',
    '--ease-out': 'cubic-bezier(0,0,.2,1)',
    '--ease-in-out': 'cubic-bezier(.4,0,.2,1)',
    '--blur-md': '12px',
    '--blur-xl': '24px',
    '--blur-2xl': '40px',
    '--default-transition-duration': '.15s',
    '--default-transition-timing-function': 'cubic-bezier(.4,0,.2,1)',
    '--default-font-family': 'var(--font-sans)',
    '--default-mono-font-family': 'var(--font-mono)',
    '--background': '222.2 84% 4.9%',
    '--foreground': '210 40% 98%',
    '--card': '222.2 84% 4.9%',
    '--card-foreground': '210 40% 98%',
    '--popover': '222.2 84% 4.9%',
    '--popover-foreground': '210 40% 98%',
    '--primary': '262.1 83.3% 57.8%',
    '--primary-foreground': '210 40% 98%',
    '--secondary': '217.2 32.6% 17.5%',
    '--secondary-foreground': '210 40% 98%',
    '--muted': '217.2 32.6% 17.5%',
    '--muted-foreground': '215 20.2% 65.1%',
    '--accent': '217.2 32.6% 17.5%',
    '--accent-foreground': '210 40% 98%',
    '--destructive': '0 62.8% 30.6%',
    '--destructive-foreground': '210 40% 98%',
    '--border': '217.2 32.6% 17.5%',
    '--input': '217.2 32.6% 17.5%',
    '--ring': '262.1 83.3% 57.8%',
    '--radius': '.75rem',
    'fontFamily': 'var(--font-sans)',
    'background': 'hsl(var(--card))',
    'border': '1px solid hsl(var(--border))',
    'borderRadius': 'var(--radius)',
    'padding': '1.5rem',
    'transition': 'all .3s',
    'transform': 'translateY(-4px)',
    'boxShadow': '0 20px 25px -5px rgba(0,0,0,.3),0 10px 10px -5px rgba(0,0,0,.1)',
  };
  return (
    <div
      className="w-full flex flex-col overflow-hidden mb-8 relative z-[3] transition-transform duration-300 group"
      style={cardVars}
      tabIndex={0}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:scale-[1.03] group-hover:shadow-[0_12px_40px_0_rgba(0,255,255,0.25),0_2px_16px_0_#0ff_inset] transition-transform transition-shadow duration-300 z-[-1]" />
      <div className="w-full">
        <div className="flex gap-2 overflow-x-auto py-2 px-2">
          {project.screenshots.map((src, i) => (
            <img
              key={i}
              src={src || "https://placehold.co/300x200/23233a/fff?text=App+Screenshot"}
              alt={project.title + ' screenshot ' + (i + 1)}
              className="object-cover h-36 w-56 rounded-lg border border-zinc-800 cursor-zoom-in hover:scale-105 transition-transform"
              loading="lazy"
              onClick={() => { onImageClick(project.screenshots, i); setActiveScreenshot(i); }}
              onMouseEnter={() => setActiveScreenshot(i)}
              onMouseLeave={() => setActiveScreenshot(0)}
              onError={e => { e.currentTarget.src = "https://placehold.co/300x200/23233a/fff?text=App+Screenshot"; }}
            />
          ))}
        </div>
        {hasMultiple && (
          <div className="flex justify-center mt-2 gap-2">
            {project.screenshots.map((_, i) => (
              <span
                key={i}
                className={`inline-block w-3 h-3 rounded-full border-2 border-zinc-800 shadow-md transition-colors duration-200 ${activeScreenshot === i ? 'bg-blue-400 scale-110' : 'bg-zinc-600'}`}
              ></span>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col px-2 py-2">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-zinc-700 text-xs font-medium px-2 py-1 rounded-full text-zinc-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-zinc-400 mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-blue-400 font-medium transition-colors"
            >
              <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline font-medium"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5z"/></svg>
              Live Demo
            </a>
          )}
          {project.playstore && (
            <a
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-gray-900 font-semibold shadow-md border border-gray-300 transition-colors text-base"
              style={{ minWidth: '120px', justifyContent: 'center' }}
            >
              {/* Google Play Store icon SVG */}
              <svg width="20" height="20" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0,0h40v40H0V0z"></path><g><path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path><path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path><path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path></g></svg>
              Play Store
            </a>
          )}
          {project.appstore && (
            <a
              href={project.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-zinc-800 text-white font-semibold shadow-md border border-zinc-700 transition-colors text-base"
              style={{ minWidth: '120px', justifyContent: 'center' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M17.564 13.307c-.02-2.14 1.75-3.163 1.83-3.213-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.67.7 2.81.68 1.16-.02 1.89-1.06 2.6-2.1.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.28-3.45zm-2.13-6.32c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.65-1.03 1.7-.85 2.7.99.08 1.97-.5 2.46-1.23z"/></svg>
              App Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const profile = {
  name: "HARSH TADHA",
  title: "FULL-STACK SOFTWARE DEVELOPER | MOBILE - WEB DEVELOPER",
  tech:'React Native | React.js | Next.Js ',
  email: "harshht2005@gmail.com",
  phone: "+1-705-669-9376",
  location: "CANADA",
  techstack: "React, React Native, Next.js",
  avatar: "/profile.jpg", // Demo avatar image
  description: "Passionate about building scalable web and mobile applications with modern tech stacks."
};

function ProfileSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-gradient-to-r from-[#18181b] via-[#23233a] to-[#18181b] py-10 px-4 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Responsive Navbar */}
        <nav className="w-full">
          {/* Desktop Navbar */}
<div className="hidden md:flex justify-center gap-12 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#18181b] via-[#23233a] to-[#18181b] bg-opacity-95 backdrop-blur border-b border-zinc-800 py-3 animate-fade-in-down shadow-lg">
  <Link href="#about" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors">ABOUT</Link>
            <Link href="#skills" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors">SKILLS</Link>
            <Link href="#projects" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors">PROJECTS</Link>
            <Link href="#experiences" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors">EXPERIENCE</Link>
            <Link href="#education" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors">EDUCATION</Link>
            <Link href="#contact" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors">CONTACT</Link>
          </div>
          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center w-full mb-4">
            <span className="text-white font-bold text-lg"></span>
            <button onClick={() => setMenuOpen(m => !m)} className="text-zinc-300 hover:text-blue-400 focus:outline-none text-3xl">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-4 bg-[#23233a] rounded-xl shadow-lg p-6 absolute left-1/2 -translate-x-1/2 top-20 w-6/12 z-50 border border-zinc-700 animate-fade-in-down" style={{ backgroundColor: 'black', right: '1rem',alignSelf: 'flex-end' }}>
              <Link href="#about" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors text-lg" onClick={() => setMenuOpen(false)}>ABOUT</Link>
              <Link href="#skills" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors text-lg" onClick={() => setMenuOpen(false)}>SKILLS</Link>
              <Link href="#projects" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors text-lg" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
              <Link href="#experiences" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors text-lg" onClick={() => setMenuOpen(false)}>EXPERIENCE</Link>
              <Link href="#education" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors text-lg" onClick={() => setMenuOpen(false)}>EDUCATION</Link>
              <Link href="#contact" className="text-zinc-300 hover:text-blue-400 font-semibold transition-colors text-lg" onClick={() => setMenuOpen(false)}>CONTACT</Link>
            </div>
          )}
        </nav>
        <div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full max-w-7xl mx-auto lg:my-4 p-4">
  {/* Profile Section */}
  <div className="flex-0.4 w-full lg:w-1/3 rounded-2xl p-6 text-center">
    <div className="relative lg:w-50 lg:h-50 w-40 h-40 mx-auto mb-6 mt-6">
      <div className="absolute inset-0 bg-black rounded-full"></div>
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl z-10">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0"
          style={{ color: "transparent", background: "black" }}
        />
      </div>
    </div>
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{profile.name}</h1>
    <h2 className="text-base md:text-lg lg:text-xl text-purple-200 mb-4 font-medium">
      {profile.title}
    </h2>

              {/* Social links */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://www.linkedin.com/in/harshtadha" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl" aria-label="LinkedIn">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="28" height="28" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>            </a>
            <a href="https://github.com/harshtadha" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white text-2xl" aria-label="GitHub">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>
            <a href="https://wa.me/17056699376" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 text-2xl" aria-label="WhatsApp">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            </a>
            <a href="tel:+17056699376" className="text-blue-400 hover:text-blue-600 text-2xl" aria-label="Phone">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 22 2 13.93 2 4.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.35.26 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/></svg>
            </a>
            <a href="mailto:harshht2005@gmail.com" className="text-orange-500 hover:text-red-600 text-2xl" aria-label="Gmail">
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
<path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11.543c0-1.933-1.567-3.5-3.5-3.5h-37	c-1.933,0-3.5,1.567-3.5,3.5V37C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M44.482,12.759L24,27.763L3.518,12.758c0,0-0.095-0.066-0.236-0.182L26,40.5h16.5 c1.933,0,3.5-1.567,3.5-3.5V11.441c0-0.102-0.021-0.197-0.03-0.296C45.816,12.262,44.482,12.759,44.482,12.759z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M3.603,12.759c0,0-1.334-0.938-1.488-2.055c-0.008,0.099-0.03,0.195-0.03,0.296 L2,11.473v17.799V37c0,1.933,1.567,3.5,3.5,3.5H7V15.247L3.603,12.759z"></path><path fill="#ca3737" d="M45.97,11.145c-0.154,1.117-1.488,1.614-1.488,1.614L41,15.31V40.5h1.5 c1.933,0,3.5-1.567,3.5-3.5v-7.729v-17.83C46,11.34,45.979,11.244,45.97,11.145z"></path><path fill="#bcbcbc" d="M3.42,13.31l20.623,14.973L44.665,13.31c0,0,0.937-0.661,1.335-1.531v-0.228	c-0.012-1.996-1.569-3.51-3.5-3.5h-37c-1.933,0-3.5,1.567-3.5,3.5v0.009C2.323,12.536,3.42,13.31,3.42,13.31z"></path><g><path fill="#f5f5f5" d="M42.5,8H24H5.5C3.567,8,2,9.536,2,11.5c0,1.206,1.518,2.258,1.518,2.258L24,28.256 l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.536,44.433,8,42.5,8z"></path><path fill="#e84f4b" d="M43.246,8.082L24,21.5L4.754,8.082C3.18,8.419,2,9.797,2,11.5 c0,1.206,1.518,2.258,1.518,2.258L24,28.256l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.797,44.82,8.419,43.246,8.082z"></path></g>
</svg>
            </a>
          </div>
        </div>
  </div>

  {/* Professional Summary Section */}
  <div className="flex-1 w-full lg:w-2/3 card bg-[#23233a] rounded-2xl shadow-2xl border border-zinc-800 p-6">
    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{summary.title}</h3>
    {summary.paragraphs.map((text, idx) => (
      <p
        key={idx}
        className={`text-zinc-400 text-sm sm:text-base leading-relaxed ${
          idx === summary.paragraphs.length - 1
            ? "mb-4 sm:mb-8"
            : "mb-3 sm:mb-6"
        }`}
      >
        {text}
      </p>
    ))}
  </div>
</div>

      
        </div>



      </div>
    </header>
  );
}

export default function Home() {
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const handleImageClick = (images: string[], idx: number) => {
    setModalImages(images);
    setModalIndex(idx);
  };

  const handleModalClose = () => {
    setModalImages(null);
  };

  return (
    <>
      {/* About Section */}
      <section id="about" className="animate-fade-in-up">
        <ProfileSection />
      </section>
      <main>
        {/* Skills Section */}
        <section id="skills" className="animate-fade-in-up">
          <div
            className="min-h-[300px] py-4 px-4 sm:px-8 animate-fade-in-up"
            style={{
              backgroundColor: '#18181b',
              backgroundImage:
                'url("/tech-bg-dark.svg"), linear-gradient(135deg, #18181b 0%, #23233a 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg sm:text-3xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up font-sans">
                SKILLS
              </h2>
              <div className="flex flex-wrap gap-2 justify-center mb-10 animate-fade-in-up">
                {techFilters.map((tech, idx) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-base font-medium rounded-full border shadow transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-900 hover:to-pink-900 opacity-0 animate-fade-in-up font-sans"
                    style={{ ...cardVars, animationDelay: `${idx * 0.05 + 0.1}s`, animationFillMode: 'forwards', color: 'gray', padding: '0.5rem 1rem' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="animate-fade-in-up">
          <div className="max-w-6xl mx-auto px-2 sm:px-8 py-8 sm:py-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
              PROJECTS
            </h2>
            <div className="flex flex-col gap-4 w-full animate-fade-in-up">
              {projects.map((project, idx) => (
                <div
                  className="opacity-0 animate-fade-in-up flex items-center gap-4 relative sm:static"
                  style={{ animationDelay: `${idx * 0.1 + 0.1}s`, animationFillMode: 'forwards', marginLeft: '0.5rem' }}
                  key={idx}
                >
                  {/* Icon column, absolutely positioned and overlapping in mobile view */}
                                      {/* React logo for all projects (desktop/tablet) */}
                  {/* <div className="hidden sm:flex flex-col min-w-[40px]">

                    <svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
      <g>
        <circle cx="16" cy="16" r="2.5" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <ellipse rx="13" ry="5.5" cx="16" cy="16"/>
          <ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(60 16 16)"/>
          <ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(120 16 16)"/>
        </g>
      </g>
    </svg>
                  </div> */}
                  {/* Mobile: absolutely position icon at top-left, overlapping card, with more precise offset and size */}
                  {/* <div className="block sm:hidden absolute -top-3 -left-3 z-10">
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 drop-shadow-lg">
      <g>
        <circle cx="16" cy="16" r="2.5" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <ellipse rx="13" ry="5.5" cx="16" cy="16"/>
          <ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(60 16 16)"/>
          <ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(120 16 16)"/>
        </g>
      </g>
    </svg>
                  </div> */}
                  <Card project={project} onImageClick={handleImageClick} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Experiences Section */}
        <section id="experiences" className="animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #18181b 0%, #23233a 60%, #1a1a2e 100%)' }}>
          <ExperienceSection />
        </section>
        {/* Education Section */}
        <section id="education" className="animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #18181b 0%, #23233a 60%, #1a1a2e 100%)' }}>
          <EducationSection />
        </section>

        
        {/* Contact Section */}
<section
  id="contact"
  className="py-16 px-4 sm:px-8 bg-black border-t border-zinc-800 animate-fade-in-up"
>
  <div className="max-w-4xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white animate-fade-in-up">
      CONTACT ME
    </h2>
    <p className="text-zinc-400 mb-8 animate-fade-in-up">
      Feel free to reach out for collaboration or opportunities!
    </p>

    {/* Two-column layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up">
      {/* Left Column */}
      <div className="flex flex-col gap-2 text-left">
        <span className="text-zinc-300">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-400 hover:underline"
          >
            {profile.email}
          </a>
        </span>
        <span className="text-zinc-300">
          <strong>Phone:</strong>{" "}
          <a
            href={`tel:${profile.phone}`}
            className="text-blue-400 hover:underline"
          >
            {profile.phone}
          </a>
        </span>
        <span className="text-zinc-300">
          <strong>Location:</strong> <span className="text-blue-400">{profile.location}</span>
        </span>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-2 text-left">
        <span className="text-zinc-300">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/harshtadha"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/harshtadha
          </a>
        </span>
        <span className="text-zinc-300">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/harshtadha"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/harshtadha
          </a>
        </span>
      </div>
    </div>
  </div>
</section>

      </main>
      {modalImages && (
        <ImageModal
          images={modalImages}
          initialIndex={modalIndex}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}

// Tailwind CSS custom animation for fade-in-up
// Add this to your global CSS (e.g., globals.css) if not already present:
// @layer utilities {
//   .animate-fade-in-up {
//     @apply opacity-0 translate-y-6;
//     animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//   }
//   @keyframes fadeInUp {
//     to {
//       opacity: 1;
//       transform: none;
//     }
//   }
// }
