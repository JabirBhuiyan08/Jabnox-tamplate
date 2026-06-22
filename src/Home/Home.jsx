import React from 'react';
import img1 from '../assets/1.1.png';
import img2 from '../assets/2.1.png';
import img3 from '../assets/3.1.png';
import pdf1 from '../assets/1.pdf';
import pdf2 from '../assets/2.pdf';
import pdf3 from '../assets/3.pdf';

const Home = () => {
  const assets = [
    { 
      name: 'Annual Report 2025', 
      size: '23.5 MB', 
      image: img1, 
      pdf: pdf1,
      category: 'Reports',
      date: 'Jan 15, 2026'
    },
    { 
      name: 'Product Documentation', 
      size: '10.5 MB', 
      image: img2, 
      pdf: pdf2,
      category: 'Guides',
      date: 'Feb 3, 2026'
    },
    { 
      name: 'Technical Specifications', 
      size: '27.2 MB', 
      image: img3, 
      pdf: pdf3,
      category: 'Tech Docs',
      date: 'Mar 12, 2026'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-4 sm:px-10 py-16 sm:py-20 text-center overflow-hidden isolate">
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-slate-400 text-sm font-medium tracking-wide border border-white/5 mb-6">
            📚 Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">
            Document Library
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto">
            Access and view our collection of important documents
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center text-slate-300 text-sm">
            <span className="px-5 py-2 bg-white/5 rounded-lg border border-white/5">📄 3 Documents</span>
            <span className="px-5 py-2 bg-white/5 rounded-lg border border-white/5">📁 61.2 MB Total</span>
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute w-64 h-64 sm:w-[300px] sm:h-[300px] bg-blue-400/10 rounded-full -top-20 -right-10 animate-[float_20s_ease-in-out_infinite]"></div>
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 bg-purple-400/10 rounded-full -bottom-10 -left-10 animate-[float_25s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-32 h-32 sm:w-36 sm:h-36 bg-emerald-400/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_15s_ease-in-out_infinite]"></div>
        </div>
      </header>

      {/* Assets Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Grid Header */}
    

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {assets.map((asset, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-black/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img 
                  src={asset.image} 
                  alt={asset.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wide">
                    {asset.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 flex-1">
                    {asset.name}
                  </h3>
                  <span className="inline-block bg-red-50 text-red-800 px-2.5 py-0.5 rounded text-xs font-bold uppercase flex-shrink-0">
                    PDF
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
                  <span className="text-sm text-slate-500">📄 {asset.size}</span>
                  <span className="text-sm text-slate-500">📅 {asset.date}</span>
                </div>

                <a 
                  href={asset.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-[#0f3460] transition-all duration-300 hover:translate-x-1 group/btn"
                >
                  <span>View PDF</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-rotate-45" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>



      {/* Add custom animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};

export default Home;