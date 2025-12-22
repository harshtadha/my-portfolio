import React from "react";

export default function EducationSection() {
  return (
    <section id="education" className="animate-fade-in-up py-16    px-4 sm:px-8 bg-[#18181b] border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">EDUCATION</h2>
        <div className="relative flex flex-col gap-8 sm:gap-12">
          {/* Single Timeline vertical line for Education */}
          {/* <div className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-green-900 z-0 rounded-full"
            style={{
              minHeight: '100%',
              left: '3.5rem',
              transform: 'translateX(-50%)'
            }}
          ></div> */}
          <div className="relative group flex items-start">
            <div className="z-10 flex flex-col items-center mr-3 sm:mr-5">
              <div className="flex-shrink-0 w-13 h-13 rounded-full flex items-center justify-center border-2 border-zinc-600 shadow-lg mb-2" style={{ background: 'linear-gradient(135deg, #0b0b13ff 0%, #18181b 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-8 h-8" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#23233a] via-[#1e293b] to-[#0f172a] rounded-xl shadow-2xl p-4 sm:p-6 mb-2 border border-zinc-900 relative z-20" style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(0,0,0,0.25)' }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg font-bold text-white mr-0 sm:mr-2">Master of Science ( Msc ) - Computational Science</span>
                    <span className="text-xs sm:text-sm text-zinc-400 font-semibold">Laurentian University, Canada</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold px-2 py-1 rounded bg-blue-900/40 text-blue-200 border border-blue-800 mt-1 sm:mt-0 whitespace-nowrap">
                  </span>
                </div>
                <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  Relevant Courses: SDLC, Machine Learning, Python, AI, Cloud Computing, Mobile Software Architecture, Data Engineering
                </div>
              </div>
            </div>
          </div>
          <div className="relative group flex items-start">
             <div className="z-10 flex flex-col items-center mr-3 sm:mr-5">
              <div className="flex-shrink-0 w-13 h-13 rounded-full flex items-center justify-center border-2 border-zinc-600 shadow-lg mb-2" style={{ background: 'linear-gradient(135deg, #0b0b13ff 0%, #18181b 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-8 h-8" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#23233a] via-[#1e293b] to-[#0f172a] rounded-xl shadow-2xl p-4 sm:p-6 mb-2 border border-zinc-900 relative z-20" style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(0,0,0,0.25)' }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg font-bold text-white mr-0 sm:mr-2">Bachelor’s Degree in Computer Science</span>
                    <span className="text-xs sm:text-sm text-zinc-400 font-semibold">Gujarat Technological University</span>
                  </div>
                    <span className="text-xs sm:text-sm font-semibold px-2 py-1 rounded bg-blue-900/40 text-blue-200 border border-blue-800 mt-1 sm:mt-0 whitespace-nowrap">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
