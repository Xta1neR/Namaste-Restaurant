import React from 'react'

const Quote = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 h-[80vh] overflow-hidden">
          <div className="text-center max-w-2xl mx-auto">
            <div
              className="text-[#b37e3c] text-9xl font-thin mb-6"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              &#8221;
            </div>
            <p
              className="text-white italic text-2xl leading-relaxed mb-6"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              The discovery of a new dish does more for the happiness of
              <br />
              mankind than the discovery of a star.
            </p>
            <p
              className="text-[#b37e3c] uppercase text-xl tracking-widest mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Anthelme Brillat-Savarin
            </p>
            <div
              className="flex items-center justify-center space-x-4 text-[#b37e3c] text-sm font-thin"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <span className="inline-block border-b border-[#b37e3c] w-12"></span>
              <i className=""></i>
              <span className="inline-block border-b border-[#b37e3c] w-12"></span>
            </div>
          </div>
        </div>
  )
}

export default Quote
