"use client";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="text-center px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At Mizan Investments, we are committed to empowering communities through innovative solutions
          in <span className="font-semibold">Financing</span>, <span className="font-semibold">Construction</span>,
          <span className="font-semibold"> Real Estate</span>, and <span className="font-semibold">KVA Ride</span> — 
          our digital ride-hailing platform designed to bring safe and fast transport across the USA.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-gray-900">
          How Mizan Investments is Making an Impact
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 transition-all">
            <p className="italic text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              "Thanks to Mizan's real estate team, I finally found the perfect home at a price I could afford.
              Their support through the process made buying stress-free and transparent!"
            </p>
            <div>
              <p className="text-green-700 font-bold">Amina K.</p>
              <p className="text-sm text-gray-500">Homeowner, Texas</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 transition-all">
            <p className="italic text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              "KVA Ride has changed the way I move around. It's fast, reliable, and super easy to use.
              I book my rides in seconds, and the drivers are always professional."
            </p>
            <div>
              <p className="text-green-700 font-bold">James W.</p>
              <p className="text-sm text-gray-500">Commuter, California</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
