import React from 'react'
import Image from 'next/image'

const Quote2 = () => {
  return (
    <div className="hidden md:block" >
      <div className="relative">
              <Image
                src="/quoteImg.jpg"
                alt="Quality"
                width={1050}
                height={500}
                className="w-[100vw] h-[60vh] object-cover mask-auto opacity-20"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
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
              Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it&#39;s how you combine them that sets you apart
            </p>
            <p
              className="text-[#b37e3c] uppercase text-xl tracking-widest mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Wolfgang Puck
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
            </div>
    </div>
  )
}

export default Quote2
