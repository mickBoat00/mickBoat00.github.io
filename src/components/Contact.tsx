const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
            I’m currently open to new opportunities and collaborations. 
            My inbox is always open, whether you have a question, a project idea, 
            or just want to connect. I’ll get back to you shortly.
        </p>
        <a href="mailto:m.boateng0000@gmail.com" className="outline-button">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
