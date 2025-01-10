import React from 'react'; 

const Journey = () => {
  return (
    <section
      id="journey-section"
      className="bg-[#ffffff] text-[#000000] py-16"
    >
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[auto, 1fr] mx-4">
          <div>
            <div className="text-center sm:text-left mb-4 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-secondary">
              <h3 className="text-3xl font-semibold mb-4 font-[Metrophobic]">
                The Journey of EdenisConsulting
              </h3>
              <span className="text-sm font-bold tracking-wider uppercase text-secondary mb-4 block">
                Our Growth Story
              </span>
              <p className="text-sm text-[#000000] md:text-md w-[95%]">
                EdenisConsulting is driven by a strong belief in mentorship and knowledge sharing. Our mission is to
                bridge the gap in generational businesses in Africa, empowering individuals, brands, and businesses with
                legacy-driven coaching programs and actionable solutions.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto md:overflow-x-auto">
            <div className="space-y-8 relative px-4 py-4 flex flex-col items-center md:flex md:space-x-8 md:flex-row">
              {[{
                  title: "Began as The Teacher’s Advocate",
                  year: "2021",
                  description: "Founded by our visionary entrepreneur. Development and test running of the initial idea alongside extensive market research."
                },
                {
                  title: "Became The Teacher’s Agency",
                  year: "2022",
                  description: "Expansion into new service provision to our target audience, intended markets."
                },
                {
                  title: "Now EdenIsConsulting",
                  year: "2024",
                  description: "Expansion of target market segments and customer diversification."
                }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center w-full p-5 shadow-lg"
                >
                  <div className="w-3 h-3 bg-[#3B0B59] rounded-full relative -left-2"></div>
                  <div className="flex flex-col items-start ml-4">
                    <h3 className="text-md tracking-wide mb-2 font-[Impact] md:text-xl">
                      {milestone.title}
                    </h3>
                    <time className="text-sm tracking-wide text-secondary mb-3">{milestone.year}</time>
                    <p className="text-sm text-[#000000] md:text-md">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
