
import { settings, code, monitor, grid-2x2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Self-Hosted Infrastructure",
      description: "Complete infrastructure stack including DNS servers, mail servers, Nextcloud file storage, Keycloak identity management, and VoIP systems.",
      icon: settings,
      technologies: ["Linux", "Docker", "Nginx", "Postfix", "Bind9"],
      highlights: ["99.9% uptime", "Zero third-party dependencies", "Full data control"]
    },
    {
      title: "CTI & Maintenance Systems",
      description: "Custom Computer Telephony Integration systems and maintenance dashboards for monitoring and managing infrastructure components.",
      icon: monitor,
      technologies: ["Python", "Flask", "PostgreSQL", "WebSockets"],
      highlights: ["Real-time monitoring", "Automated alerts", "Custom reporting"]
    },
    {
      title: "Web & Desktop Applications",
      description: "Full-stack web applications and desktop tools built with Python, Flask, PyQt, and modern web technologies.",
      icon: code,
      technologies: ["Python", "PyQt", "Flask", "HTML/CSS/JS", "PHP"],
      highlights: ["Cross-platform", "Modern UI/UX", "Scalable architecture"]
    },
    {
      title: "Decentralized Network",
      description: "Private technology ecosystem with custom DNS zones, secure subnets, and integrated services across multiple domains.",
      icon: grid-2x2,
      technologies: ["DNS", "VPN", "Subnetting", "SSL/TLS", "Firewalling"],
      highlights: ["Privacy-first design", "Secure communication", "Autonomous operation"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects focused on autonomy, privacy, and robust infrastructure solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
