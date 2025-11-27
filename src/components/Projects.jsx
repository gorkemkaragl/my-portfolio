import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Kişisel Portfolyo Sitesi",
    description:
      "Modern ve kullanıcı dostu bir e-ticaret web uygulaması. React ve TypeScript ile geliştirildi.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    url: "https://github.com/gorkemkaragl/",
  },
  {
    title: "Ford Otosan Staj Projesi",
    description:
      "Takımlar için gerçek zamanlı görev takibi ve proje yönetimi platformu.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Python"],
    url: "https://github.com/gorkemkaragl/FordOtosan_Internship",
  },
  {
    title: "React Staj Mini Projeleri",
    description:
      "Modern web teknolojileri (React, Next.js, Supabase, Redux, TailwindCSS, TypeScript) ile geliştirilmiş staj projeleri.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/gorkemkaragl/React-Staj",
  },
  {
    title: "Serender Nut House E-Ticaret Sitesi",
    description:
      "Serender Nut House, kendimi geliştirmek için React kullanarak sıfırdan geliştirdiğim bir mini e-ticaret uygulamasıdır. Bu proje sayesinde hem front-end mimarisi üzerine pratik yapıyorum hem de gerçek bir e-ticaret akışını adım adım oluşturarak deneyim kazanıyorum.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["React", "Next.js", "MDX"],
    url: "https://github.com/gorkemkaragl/serender-nut-house",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projeler</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-border hover-glow transition-all group animate-fade-in pt-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Kod
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
