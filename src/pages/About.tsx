import { Target, Lightbulb, Award, Users, Zap, Shield, TrendingUp, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new technologies and methodologies to solve complex challenges.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all our research and partnerships.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional quality through rigorous research and development.',
    },
    {
      icon: Users,
      title: 'Research Focus',
      description: 'Deep commitment to scientific inquiry and evidence-based innovation.',
    },
  ];

  const expertise = [
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Fast-track development from concept to working prototype using agile methodologies.',
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Partner with leading research institutions and industry experts worldwide.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Build technologies that grow with your needs and adapt to market demands.',
    },
    {
      icon: Target,
      title: 'Strategic Consulting',
      description: 'Guide innovation strategy with deep technical and market insights.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6">About Cosmiron</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transforming ideas into reality through cutting-edge research and development
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400">Our Story</span>
              </div>
              <h2 className="text-4xl mb-6">Innovating Technology & R&D</h2>
              <p className="text-slate-300 mb-4">
                As the technology and R&D arm of Arora Innovation LLC, Cosmiron is dedicated to building innovative platforms, automation tools, and AI-driven solutions for the modern world.
              </p>
              <p className="text-slate-300 mb-4">
                Our journey is defined by a commitment to turning visionary concepts into practical solutions. We specialize in creating cutting-edge technology that empowers organizations and individuals to thrive in a rapidly changing environment, with successful products like Jobmagica.
              </p>
              <p className="text-slate-300">
                Today, Cosmiron stands at the forefront of software engineering and automation, working alongside our sister brand Integrity Path Systems to shape the future of work and technology – one solution at a time.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjU1NTMwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation Lab"
                className="relative rounded-3xl border border-slate-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 rounded-2xl border border-blue-500/30">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Target size={28} className="text-blue-400" />
              </div>
              <h3 className="text-3xl mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To empower businesses with agile solutions that drive success. From talent to technology, we deliver with reliability and vision. At Cosmiron, we focus on building innovative platforms and AI-driven solutions that simplify complex processes.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-2xl border border-purple-500/30">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Lightbulb size={28} className="text-purple-400" />
              </div>
              <h3 className="text-3xl mb-4">Our Vision</h3>
              <p className="text-slate-300">
                To connect people with purpose and organizations with possibilities. Built on a foundation of integrity, innovation, and excellence, we envision a future where technology serves humanity's greatest aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Principles that guide our research, development, and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Approach & Technology Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our R&D Approach</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Combining scientific rigor with practical innovation
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <p className="text-lg text-slate-300 mb-6">
                  At Cosmiron, our R&D methodology integrates cutting-edge research with industry best practices. We employ a systematic approach that emphasizes experimentation, iteration, and validation to ensure our innovations are both groundbreaking and practical.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-slate-950/50 rounded-xl">
                    <h4 className="text-lg mb-2 text-blue-400">Research</h4>
                    <p className="text-slate-400">Deep investigation into emerging technologies and methodologies</p>
                  </div>
                  <div className="p-4 bg-slate-950/50 rounded-xl">
                    <h4 className="text-lg mb-2 text-purple-400">Development</h4>
                    <p className="text-slate-400">Translating research findings into working prototypes and solutions</p>
                  </div>
                  <div className="p-4 bg-slate-950/50 rounded-xl">
                    <h4 className="text-lg mb-2 text-pink-400">Deployment</h4>
                    <p className="text-slate-400">Scaling innovations for real-world impact and measurable results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Technology Expertise</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our multidisciplinary team excels across diverse technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-purple-400" />
                </div>
                <h4 className="text-lg mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
