
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'; // Assuming shadcn card
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

// Placeholder projects
const projects = [
  {
    title: 'Cloud-Native Application Suite',
    description: 'A suite of microservices deployed on Kubernetes, showcasing scalable and resilient architecture.',
    tech: ['Kubernetes', 'Docker', 'Go', 'gRPC'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Serverless Data Processing Pipeline',
    description: 'An event-driven pipeline using AWS Lambda and SQS for efficient data ingestion and transformation.',
    tech: ['AWS Lambda', 'SQS', 'S3', 'Python'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Infrastructure as Code Framework',
    description: 'Developed a reusable Terraform module library for provisioning cloud resources across multiple environments.',
    tech: ['Terraform', 'AWS', 'CI/CD'],
    link: '#',
    repo: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center text-slate-800">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-lavender mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-heading text-slate-800">{project.title}</CardTitle>
                <CardDescription className="text-slate-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-slate-500 mb-2">Technologies used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="bg-lavender/20 text-lavender-dark text-xs font-medium px-2.5 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                {project.link !== '#' && (
                  <Button variant="outline" size="sm" asChild className="border-lavender text-lavender hover:bg-lavender hover:text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Demo</a>
                  </Button>
                )}
                {project.repo !== '#' && (
                  <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-lavender">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Source
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-600">More projects coming soon! Feel free to update this section.</p>
      </div>
    </section>
  );
};

export default ProjectsSection;
