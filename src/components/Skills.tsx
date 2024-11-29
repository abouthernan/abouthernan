import React from 'react';
import { Server, Layout, Database, Rocket } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="text-purple-500" size={24} />,
    items: ["React", "Next.js", "TypeScript", "JavaScript"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Server className="text-purple-500" size={24} />,
    items: ["Redux", "React Query", "Tailwind CSS", "Material UI"]
  },
  {
    category: "Testing",
    icon: <Database className="text-purple-500" size={24} />,
    items: ["Jest", "React Testing Library", "Cypress", "Playwright"]
  },
  {
    category: "Otros",
    icon: <Rocket className="text-purple-500" size={24} />,
    items: ["Git", "GitHub", "Scrum", "Jira"]
  }
];

export function Skills() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Habilidades Técnicas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all">
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="text-gray-400">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}