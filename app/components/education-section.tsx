"use client";

import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-black/15">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="font-poppins text-gray-300 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-500/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {/* BSc */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="flex-1 w-full md:w-auto text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                    BSc(Hons) in Software Engineering (Undergraduate)
                  </h3>
                  <p className="text-gray-400 mt-2">2021 - 2025</p>
                </div>

                {/* Dot - hidden on mobile */}
                <div className="hidden md:block">
                  <div
                    className="w-4 h-4 bg-blue-500 rounded-full relative z-10 
                              group-hover:scale-150 transition-all duration-300"
                  >
                    <div
                      className="absolute w-8 h-8 bg-blue-500/20 rounded-full -m-2 
                                animate-ping opacity-75"
                    />
                  </div>
                </div>

                <div className="flex-1 w-3/4 md:w-auto md:pl-8">
                  <div
                    className="p-2 md:p-4 bg-white/5 rounded-lg border border-transparent 
                          hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300"
                  >
                    <p className=" text-gray-300 text-sm md:text-justify">
                      Department of Software Engineering, Faculty of Computing,
                      Sabragamuwa University of Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              {/* A/L */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="flex-1 w-full md:w-auto text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                    GCE A/L - Physical Science
                  </h3>
                  <p className="text-gray-400 mt-2">2017 - 2019</p>
                </div>

                <div className="hidden md:block">
                  <div
                    className="w-4 h-4 bg-blue-500 rounded-full relative z-10 
                              group-hover:scale-150 transition-all duration-300"
                  >
                    <div
                      className="absolute w-8 h-8 bg-blue-500/20 rounded-full -m-2 
                                animate-ping opacity-75"
                    />
                  </div>
                </div>

                <div className="flex-1 w-3/4 md:w-auto md:pl-8">
                  <div
                    className="p-4 bg-white/5 rounded-lg border border-transparent 
                              hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300"
                  >
                    <p className="text-gray-300 text-center text-sm md:text-justify">
                      St.Servatius College, Matara
                    </p>
                  </div>
                </div>
              </div>

              {/* O/L */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="flex-1 w-full md:w-auto text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                    GCE O/L
                  </h3>
                  <p className="text-gray-400 mt-2">2011 - 2016</p>
                </div>

                <div className="hidden md:block">
                  <div
                    className="w-4 h-4 bg-blue-500 rounded-full relative z-10 
                              group-hover:scale-150 transition-all duration-300"
                  >
                    <div
                      className="absolute w-8 h-8 bg-blue-500/20 rounded-full -m-2 
                                animate-ping opacity-75"
                    />
                  </div>
                </div>

                <div className="flex-1 w-3/4 md:w-auto md:pl-8">
                  <div
                    className="p-4 bg-white/5 rounded-lg border border-transparent 
                              hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300"
                  >
                    <p className="text-gray-300 text-sm md:text-justify text-center">
                      Telijjawila Central College, Matara
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
