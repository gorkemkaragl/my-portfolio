import React from "react";

const About = ({ dict }) => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="gradient-text">{dict.about.title}</span>
        </h2>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {dict.about.description1}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {dict.about.description2}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {dict.about.description3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
