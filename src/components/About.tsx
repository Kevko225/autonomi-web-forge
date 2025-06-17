
import { User, Settings, Code, Monitor } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about building decentralized, privacy-focused technology solutions with complete control over infrastructure and applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Philosophy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in technological autonomy and privacy by design. My approach centers on building and maintaining complete control over digital infrastructure, from DNS and email servers to custom applications and internal tools.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every system I deploy is carefully crafted to prioritize security, privacy, and independence from third-party services. This philosophy extends to my development work, where I create robust, maintainable solutions that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Flask</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PyQt</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Linux</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Settings className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Infrastructure Management</h4>
              </div>
              <p className="text-gray-600">
                Self-hosted DNS, mail servers, Nextcloud, Keycloak, VoIP systems, and complete network infrastructure under my own domains.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Application Development</h4>
              </div>
              <p className="text-gray-600">
                Custom web applications, desktop tools, CTI systems, and maintenance dashboards built with modern technologies and best practices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Monitor className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">Decentralized Ecosystem</h4>
              </div>
              <p className="text-gray-600">
                Building a comprehensive private tech ecosystem with custom DNS zones, secure subnets, and integrated services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
