import React from 'react';
import { Code2, Sparkles, Coffee } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <div className="relative inline-block">
          <img
            src="/hernan.jpeg"
            alt="Hernán Estupiñan"
            className="w-32 h-32 rounded-full border-4 border-purple-500 mb-6"
          />
          <span className="absolute bottom-6 right-0 bg-purple-500 p-2 rounded-full">
            <Coffee size={20} className="text-white" />
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Hernán Estupiñán</h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code2 size={20} className="text-purple-500" />
          <p className="text-xl text-gray-300">Frontend Developer</p>
        </div>
        <div className="text-gray-400 max-w-2xl mx-auto mb-8 flex flex-col gap-0">
          <p className="mb-0">
            👊🏽 Founder at <a href="https://hazlolatam.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">hazlolatam.com</a>
          </p>
          <p className="mb-0">
            🦊 Founder at <a href="https://vehement.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">vehement.co</a>
          </p>
          <p className="mb-0">
            👨🏽‍💻 Founder at <a href="https://cuantto.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">cuantto.io</a>
          </p>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">🎸Lover of Travel, Music, Sports, Business 🔭Exploring #NoCode #OpenAI.</p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">I am a Software Engineer and marketing professional with 10+ years of experience developing and executing successful marketing strategies for B2B and B2C companies. My expertise includes lead generation, brand management, and product marketing. </p>
<p className="text-gray-400 max-w-2xl mx-auto mb-8">I am passionate about understanding customer needs and developing targeted campaigns and products that drive business growth. In addition to my marketing expertise, I am also skilled in project management, team leadership, and data analysis. I have a track record of delivering projects on time and under budget, and I enjoy mentoring and coaching team members to help them reach their full potential.</p>
       
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://github.com/abouthernan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
          >
            <Sparkles size={20} />
            Ver Proyectos
          </a>
          <a 
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 text-purple-500 hover:bg-purple-500/10 px-6 py-2 rounded-full transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}