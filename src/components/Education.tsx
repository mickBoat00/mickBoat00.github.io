const Education = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Education</h2>

        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            University of Ghana, Legon
          </h3>
          <p className="text-muted-foreground">
            Bachelor of Arts in Computer Science with Mathematics,{" "}
            <span className="italic">2020</span>
          </p>

          {/* <ul className="space-y-2 mt-4">
            <li className="text-muted-foreground">
              <span className="font-semibold text-foreground">Courses:</span>{" "}
              <span className="italic">
                Linear and Vector Algebra, Calculus, Data Structure and Algorithms
              </span>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
