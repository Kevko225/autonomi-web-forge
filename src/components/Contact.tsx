
import { Mail, Github, Link } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your project or learn more about my services? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need custom application development, infrastructure consulting, or PA equipment rental, 
                I'm here to help. I approach every project with attention to detail and commitment to quality.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">contact@yourname.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    <Github className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-gray-300">github.com/yourusername</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    <Link className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">64 Network (PA Rental)</h4>
                    <p className="text-gray-300">Professional audio equipment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-800 text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-300">
            © 2024 Your Name. Built with privacy and autonomy in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
