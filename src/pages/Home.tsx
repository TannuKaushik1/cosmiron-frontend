import { Link } from 'react-router-dom';
import { Brain, Code, Cog, Lightbulb, TrendingUp, Shield, Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Home() {
  const domains = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions and machine learning models for next-generation applications.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Cutting-edge software development with modern architectures and best practices.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cog,
      title: 'Automation',
      description: 'Intelligent automation systems that streamline processes and boost efficiency.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Experimental research facilities pushing the boundaries of technology.',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const values = [
    {
      icon: TrendingUp,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with breakthrough research and forward-thinking solutions.',
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'Complete transparency and ethical practices in everything we deliver.',
    },
    {
      icon: Target,
      title: 'Excellence Driven',
      description: 'Uncompromising quality standards in research, development, and execution.',
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Working closely with clients to transform visionary ideas into reality.',
    },
  ];

  const portfolioPreview = [
    {
      title: 'AI-Powered Analytics Platform',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaHxlbnwxfHx8fDE3NjU1NTMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Enterprise Automation Suite',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1649829726631-fcd218631ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY1NTUzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cloud-Native Architecture',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjU0NDI3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Research Innovation Hub',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjU1NTMwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const stats = [
    { value: '15+', label: 'Years in R&D' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '50+', label: 'Clients Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/50 to-slate-950"></div>
          <img
            src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2NTQ1ODM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Technology background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400">Innovating Talent, Empowering Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Empowering Solutions Through Technology & R&D
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            As the technology and R&D arm of Arora Innovation, Cosmiron builds innovative platforms, automation tools, and AI-driven solutions like Jobmagica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              More About Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Research Domains</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Pioneering innovation across multiple cutting-edge technology sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all`}>
                  <domain.icon size={28} />
                </div>
                <h3 className="text-xl mb-3">{domain.title}</h3>
                <p className="text-slate-400">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cosmiron */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose Cosmiron</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <value.icon size={28} className="text-purple-400" />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      {/* 
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A glimpse into our innovative research and development work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioPreview.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block w-fit px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 transition-all"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950/50 to-purple-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's collaborate to bring your vision to life with cutting-edge R&D solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
