import React, { useEffect, useState } from 'react';

const Journey = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("journey-section");
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="journey"
      className="bg-[#f7f9fe] text-[#020511] py-16 opacity-0 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: inView ? 1 : 0 }} 
    >
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4">
          <div className="mb-8">
            <div className="text-center sm:text-left mb-8 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#254ce5]">
              <h3 className="text-3xl font-semibold mb-4 font-[Metrophobic] transition-transform duration-500 transform hover:scale-105">
                The Journey of EdenisConsulting
              </h3>
              <span className="text-sm font-bold tracking-wider uppercase text-[#254ce5] mb-6 block">
                Our Growth Story
              </span>
              <p className="text-md text-[#020511] md:text-lg">
                EdenisConsulting is driven by a strong belief in mentorship and knowledge sharing. Our mission is to
                bridge the gap in generational businesses in Africa, empowering individuals, brands, and businesses with
                legacy-driven coaching programs and actionable solutions.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <div className="space-y-16 relative px-4 space-y-12 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-[#d57eef]">
              {/* Timeline Milestones */}
              {[
                {
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
                  title: "Now EdenisConsulting",
                  year: "2024",
                  description: "Expansion of target market segments and customer diversification."
                }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#254ce5] transition-all duration-700 transform opacity-0 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }} 
                >
                  <h3 className="text-lg font-semibold tracking-wide mb-2 font-[Metrophobic] transition-transform duration-500 transform hover:scale-105 md:text-xl">
                    {milestone.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-[#254ce5] mb-3">{milestone.year}</time>
                  <p className="text-sm text-[#020511] md:text-lg">{milestone.description}</p>
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
