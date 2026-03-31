import { Linkedin, Mail } from 'lucide-react';

export function Leadership() {
  const leaders = [
    {
      name: 'Harshit',
      designation: 'Founder',
      image: 'https://arorainnovation.com/wp-content/uploads/2025/08/Harshit-Professional-photo-full-length_11zon-scaled-e1756623036658.jpg',
      bio: 'With a strong background in engineering, research, and entrepreneurship, Harshit has built a career at the intersection of technology and business innovation. He holds a Master’s degree in Electrical Engineering from California State University, Fullerton, and has worked with leading technology companies including Qualcomm. His early work in India included developing a breakthrough cone calorimeter system for fire safety testing, making advanced technology more accessible to industry. Today, Harshit leads Cosmiron with a vision to combine integrity with innovation, driving impact across staffing, research, and software development. He is also passionate about storytelling and creativity, which he pursues through acting and public speaking — bringing a unique perspective that blends science, technology, and art.',
      expertise: ['Engineering', 'Research', 'Entrepreneurship', 'Business Innovation'],
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Our Leadership</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cosmiron was founded to bridge innovation and integrity across industries. Our leadership team brings expertise in staffing, technology, and entrepreneurship — ensuring focused excellence.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-1">{leader.name}</h3>
                  <p className="text-blue-400 mb-4">{leader.designation}</p>
                  <p className="text-slate-300 mb-6">{leader.bio}</p>
                  <p className="text-slate-300 mb-6">To explore Harshit’s broader journey as an innovator and storyteller, visit <a href="https://realharshitarora.com" className="text-blue-400 hover:underline">realharshitarora.com</a></p>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm text-slate-400 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-6 border-t border-slate-700">
                    <a
                      href="https://www.linkedin.com/company/arora-innovation-llc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-500/20 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="mailto:operations@arorainnovation.com"
                      className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-500/20 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950/30 to-purple-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Join Our Team</h2>
          <p className="text-xl text-slate-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a
            href="mailto:operations@integritypathsystems.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
