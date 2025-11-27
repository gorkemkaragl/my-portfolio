import React from "react";
import { Card } from "./ui/card";

const skills = [
  { name: "React", level: 75 },
  { name: "Next.js", level: 75 },
  { name: "TypeScript", level: 65 },
  { name: "JavaScript", level: 75 },
  { name: "HTML/CSS", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Git", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Yetenekler</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 bg-card/50 backdrop-blur border-border hover-glow transition-all animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-[hsl(217,91%,60%)] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
