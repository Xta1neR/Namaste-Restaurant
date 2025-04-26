import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#0f0b08] text-[#e0b172] min-h-screen flex items-center justify-center p-6">
        <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* <!-- Left side --> */}
          <section className="space-y-8 max-w-lg">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="block w-8 border-t border-[#e0b172]"></span>
                <p className="text-xs tracking-widest font-semibold">
                  KEEP CLOSE
                </p>
              </div>
              <h1 className="text-white text-5xl font-extrabold leading-tight">
                Get In Touch
              </h1>
            </div>
            <p className="text-[#e0b172] text-base leading-relaxed">
              Experience the perfect blend of ambiance and culinary delight.
              Reserve your table now and indulge in a memorable dining
              experience at our restaurant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex gap-4 items-start">
                <i className="fas fa-map fa-lg text-[#e0b172] mt-1"></i>
                <p className="text-[#e0b172] text-sm leading-relaxed">
                  Namaste Authentic Indian Cuisine 200 Trans Canada Highway SW
                  Salmon Arm, B.C. V1E 4H7
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <i className="fas fa-phone-alt fa-lg text-[#e0b172] mt-1"></i>
                <div className="text-[#e0b172] text-sm leading-relaxed space-y-1">
                  <p>+1 778-489-5044</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <i className="fas fa-envelope fa-lg text-[#e0b172] mt-1"></i>
                <div className="text-[#e0b172] text-sm leading-relaxed space-y-1">
                  <p>Reservation@sovy.com</p>
                  <p>Books@sovy.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <i className="far fa-clock fa-lg text-[#e0b172] mt-1"></i>
                <div className="text-[#e0b172] text-sm leading-relaxed space-y-1">
                  <p>
                    Open 11:00 am Wednesday to Monday Closes 09:00 pm Wednesday
                    to Monday Closed on Tuesdays
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-t border-[#3a2e1f]" />

          </section>

          {/* <!-- Right side --> */}
          <section className="max-w-lg">
            <h2 className="text-white text-3xl font-extrabold mb-2">
              Your Details
            </h2>
            <p className="text-[#e0b172] mb-8">
              Let us know how to get back to you.
            </p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest font-semibold mb-2"
                  >
                    NAME<span className="text-[#e0b172]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John"
                    className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest font-semibold mb-2"
                  >
                    EMAIL ADDRESS<span className="text-[#e0b172]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@gmail.com"
                    className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-widest font-semibold mb-2"
                >
                  SUBJECT<span className="text-[#e0b172]">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-xs tracking-widest font-semibold mb-2"
                >
                  COMMENTS / QUESTIONS<span className="text-[#e0b172]">*</span>
                </label>
                <textarea
                  id="comments"
                  rows={6}
                  placeholder="Question"
                  className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 resize-y focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#e0b172] text-black tracking-widest px-10 py-3 text-sm font-medium hover:bg-[#c99a5a] transition-colors"
                >
                  CONTACT US
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
