
const About = () => {
  const thingsIDo = [
    "tenetur dolor dolores! Fugit eos at provident tempore.",
    "Tenetur dolor dolores! Fugit eos at provident tempore..",
    "Atenetur dolor dolores! Fugit eos at provident tempore.",
    "All tenetur dolor dolores! Fugit eos at provident tempore..",
    "Music  tenetur dolor dolores! Fugit eos at provident tempore..",
  ];

  const projectsWorkingOn = [
    "helping software engineers escape tutorial Hell",
  ];

  const thingsDidPreviously = [
    "i taught some bootcamps python.",
    "i contribute to an open source django project and my pr was merged before AI existed",
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">01.</span>
          About Me
        </h2>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <p className="text-foreground/80 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium nostrum vero dicta sapiente, 
              commodi neque optio doloremque! Quam, velit. 
              Qui voluptatum recusandae sint perspiciatis quis maxime ratione ullam voluptates 
              assumenda blanditiis vero iste fugiat quas eum molestias ipsum quo cupiditate rerum, 
              tenetur dolor dolores! Fugit eos at provident tempore.
            </p>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Things I do</h3>
              <ul className="space-y-2">
                {thingsIDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Projects I'm working on</h3>
              <ul className="space-y-2">
                {projectsWorkingOn.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Things I did previously</h3>
              <ul className="space-y-2">
                {thingsDidPreviously.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-72">
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4"></div>
              {/* <img
                src={profileImage}
                alt="Ayush Anand"
                className="relative z-10 w-full h-full object-cover rounded grayscale hover:grayscale-0 transition-all"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
