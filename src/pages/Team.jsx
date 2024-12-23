
const Team = () => {
    const theteam = [
      {
        image: "https://via.placeholder.com/150", 
        name: "Anna",
        title: "CEO"
      },
      {
        image: "https://via.placeholder.com/150", 
        name: "John",
        title: "CTO"
      },
      {
        image: "https://via.placeholder.com/150",
        name: "Sarah",
        title: "CFO"
      },
      {
        image: "https://via.placeholder.com/150", 
        name: "David",
        title: "COO"
      }
    ];
  
    return (
      <section className="md:py-20 md:px-8 p-6 bg-[#f7f9fe] animate-fadeIn">
        <div className="container mx-auto text-center md:px-20 px-7">
          <h1 className="md:text-4xl text-3xl font-[Metrophobic] font-bold text-[#020511] mb-12 animate-slideInUp">Meet the Team</h1> 
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {theteam.map((member, index) => (
              <div
                key={index}
                className="bg-white md:p-6 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-cardSlideUp"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-[#d57eef] transition-all duration-300 transform hover:scale-110"
                />
                <h3 className="md:text-xl text-md font-[Metrophobic] font-semibold text-[#020511]">{member.name}</h3> 
                <p className="text-[#254ce5] mt-2 md:text-base text-sm">{member.title}</p> 
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  