"use client";

import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black/15">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="font-poppins text-gray-300 text-center mb-12">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500/20" />
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center group">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-400">
                    BSc(Hons) in Software Engineering (Undergraduate)
                  </h3>
                  <p className="text-gray-400">2021 - 2025</p>
                </div>

                <div
                  className="w-4 h-4 bg-blue-500 rounded-full relative z-10 
                            group-hover:scale-150 transition-transform"
                >
                  <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full -m-2" />
                </div>

                <div className="flex-1 md:pl-8">
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    {/* <img
                      src=""
                      alt=""
                      className="h-16 w-auto mb-4 mx-auto"
                    /> */}
                    <p className="text-gray-300 text-sm text-justify">
                      Department of Software Engineering, Faculty of Computing,
                      Sabragamuwa University of Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center group">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-400">
                    GCE A/L - Physical Science
                  </h3>
                  <p className="text-gray-400">2017 - 2019</p>
                </div>

                <div
                  className="w-4 h-4 bg-blue-500 rounded-full relative z-10 
                            group-hover:scale-150 transition-transform"
                >
                  <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full -m-2" />
                </div>

                <div className="flex-1 md:pl-8">
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <p className="text-gray-300 text-sm text-justify">
                      St.Servatius College, Matara
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center group">
                <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-400">
                    GCE O/L
                  </h3>
                  <p className="text-gray-400">2011 - 2016</p>
                </div>

                <div
                  className="w-4 h-4 bg-blue-500 rounded-full relative z-10 
                            group-hover:scale-150 transition-transform"
                >
                  <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full -m-2" />
                </div>

                <div className="flex-1 md:pl-8">
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <p className="text-gray-300 text-sm text-justify">
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
