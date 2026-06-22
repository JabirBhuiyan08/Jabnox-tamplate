import React from 'react';
import img1 from '../assets/1.1.png';
import img2 from '../assets/2.1.png';
import img3 from '../assets/3.1.png';
import pdf1 from '../assets/1.pdf';
import pdf2 from '../assets/2.pdf';
import pdf3 from '../assets/3.pdf';
import jabnox from '../assets/jabnox.jpg';

const Home = () => {
  const assets = [
    { 
      name: 'Tour Travel Guide', 
      size: '23.5 MB', 
      image: img1, 
      pdf: pdf1,
      category: 'Overseas Website',
      date: 'Jan 15, 2026',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      name: 'Overseas Website Design', 
      size: '10.5 MB', 
      image: img2, 
      pdf: pdf2,
      category: 'Overseas Website',
      date: 'Feb 3, 2026',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      name: 'Tour Travel Website', 
      size: '27.2 MB', 
      image: img3, 
      pdf: pdf3,
      category: 'Overseas Website',
      date: 'Mar 12, 2026',
      color: 'from-emerald-500/20 to-teal-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans antialiased">
      {/* Modern Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-56 sm:w-72 h-56 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-56 sm:w-72 h-56 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/70 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-slate-700 border border-white/50 shadow-sm mb-4 sm:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Knowledge Base • Updated Daily
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-3 sm:mb-4">
                Document
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Library
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
                Access, view, and manage your important documents all in one place
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <span className="text-xl sm:text-2xl">📄</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">3 Documents</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <span className="text-xl sm:text-2xl">📁</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">61.2 MB Total</span>
                </div>
              </div>
            </div>

{/* Right Logo */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-xl border border-white/50">
                  <img 
                    src={jabnox} 
                    alt="Jabnox" 
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain rounded-xl"
                  />
                </div>
              </div>
              <a 
                href="https://jabnox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group"
              >
                <span>Visit Jabnox</span>
                <svg 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 lg:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Recent Documents
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">Browse through our curated collection</p>
          </div>
          <button className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm whitespace-nowrap">
            <span>View All</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Grid Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {assets.map((asset, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${asset.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={asset.image} 
                  alt={asset.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] sm:text-xs font-semibold text-slate-700 shadow-sm border border-white/50">
                    {asset.category}
                  </span>
                </div>

                {/* PDF Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-red-500 text-white rounded-lg text-[10px] sm:text-xs font-bold shadow-lg">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
                    </svg>
                    PDF
                  </span>
                </div>

                {/* Jabnox Logo - Always Visible */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shadow-lg border border-white/50 hover:scale-110 transition-transform duration-300">
                    <img 
                      src={jabnox} 
                      alt="Jabnox" 
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                  {asset.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {asset.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {asset.date}
                  </span>
                </div>

                <a 
                  href={asset.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-900 text-white rounded-xl font-medium text-xs sm:text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  <span>View Document</span>
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats - Responsive */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/60">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Last updated: Today
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              All documents verified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Secure access
            </span>
          </div>
        </div>
      </main>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;