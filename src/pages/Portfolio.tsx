import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI', 'Software', 'Automation', 'Innovation'];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      category: 'AI',
      description: 'Advanced machine learning platform for real-time data analysis and predictive insights, serving Fortune 500 companies.',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaHxlbnwxfHx8fDE3NjU1NTMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Enterprise Automation Suite',
      category: 'Automation',
      description: 'Comprehensive automation framework that streamlines business processes and reduces operational costs by 40%.',
      image: 'https://images.unsplash.com/photo-1649829726631-fcd218631ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY1NTUzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cloud-Native Architecture',
      category: 'Software',
      description: 'Scalable microservices architecture designed for high-traffic applications with 99.99% uptime guarantee.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjU0NDI3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Research Innovation Hub',
      category: 'Innovation',
      description: 'Collaborative platform connecting researchers worldwide to accelerate breakthrough discoveries.',
      image: 'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjU1NTMwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Neural Network Optimization',
      category: 'AI',
      description: 'Deep learning framework that reduces training time by 60% while improving model accuracy.',
      image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjU1MjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Smart City Infrastructure',
      category: 'Innovation',
      description: 'IoT-based urban management system for traffic optimization, energy efficiency, and public safety.',
      image: 'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTUwMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Blockchain Security Protocol',
      category: 'Software',
      description: 'Next-generation blockchain infrastructure with enhanced security and transaction speed.',
      image: 'https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU0NjUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Quantum Computing Research',
      category: 'Innovation',
      description: 'Pioneering research in quantum algorithms for cryptography and complex optimization problems.',
      image: 'https://images.unsplash.com/photo-1717501217941-ea11df0605f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwdGVjaHxlbnwxfHx8fDE3NjU1NTMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Robotic Process Automation',
      category: 'Automation',
      description: 'Intelligent RPA solution automating repetitive tasks across multiple enterprise systems.',
      image: 'https://images.unsplash.com/photo-1649829726631-fcd218631ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY1NTUzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing our innovative research and development projects that drive technological advancement
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6">{project.description}</p>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn">
                    View Details
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950/30 to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's collaborate to transform your vision into a groundbreaking innovation.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
