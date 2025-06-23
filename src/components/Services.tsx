
import { Code, Settings, Monitor } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Application Development",
      description: "Full-stack web applications and desktop tools tailored to your specific needs using Python, Flask, PyQt, and modern web technologies.",
      icon: Code,
      features: [
        "Web application development",
        "Desktop application creation",
        "Database design & optimization",
        "API development & integration",
        "UI/UX design & implementation"
      ],
      links: []
    },
    {
      title: "Infrastructure Consulting",
      description: "Expert guidance on building and maintaining self-hosted infrastructure with focus on privacy, security, and autonomy.",
      icon: Settings,
      features: [
        "Self-hosted email setup",
        "DNS server configuration",
        "Network security auditing",
        "Backup & disaster recovery",
        "Server optimization"
      ],
      links: [
        { name: "Cloud Mail Service", url: "https://mail.yourdomain.com" },
        { name: "File Storage (Nextcloud)", url: "https://cloud.yourdomain.com" },
        { name: "Identity Management", url: "https://auth.yourdomain.com" }
      ]
    },
    {
      title: "PA Equipment Rental",
      description: "Professional audio equipment rental services under '64 Network' for events, presentations, and gatherings.",
      icon: Monitor,
      features: [
        "Sound system rentals",
        "Microphone & mixing equipment",
        "Event audio setup",
        "Technical support included",
        "Competitive pricing"
      ],
      links: [
        { name: "64 Network Rentals", url: "https://64network.com" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional IT services focused on privacy, autonomy, and technical excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors border border-gray-700">
                <div className="text-center mb-6">
                  <div className="bg-blue-900 p-4 rounded-full inline-block mb-4">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.links.length > 0 && (
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Available Services:</h4>
                    <div className="space-y-2">
                      {service.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Interested in working together? Let's discuss your project requirements.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
