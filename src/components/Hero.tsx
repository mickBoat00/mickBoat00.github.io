const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-24 pt-20">
      <div className="max-w-3xl">
        <p className="font-mono text-primary mb-4">Hi, my name is</p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground/50 mb-2">
          Michael Boateng.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6">
          I am a web, cloud and AI developer.
        </h2>
        <p className="text-foreground/70 max-w-xl mb-10 text-base md:text-lg leading-relaxed">
          I am a software engineer with a keen interest in backend engineering, artificial intelligence and cloud computing. 
          I love solving problems by combining cloud resources to design and build scalable, secure software.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="outline-button text-center">
            Connect with me!
          </a>
          <a href="#projects" className="outline-button text-center">
            Check out my projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
