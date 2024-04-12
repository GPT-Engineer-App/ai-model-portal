import { FaRocket, FaCode, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">FREE+OPEN</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out hover:underline-center">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 bg-hero bg-fixed bg-center bg-cover">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 opacity-0 translate-y-10 animate-fadeInUp">Unleash the Power of AI</h2>
            <p className="text-xl mb-8 opacity-0 translate-y-10 animate-fadeInUp animation-delay-200">FREE+OPEN provides a free, open-source API and reverse proxy for AI models.</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <FaRocket className="mr-2" />
              Get Started
            </a>
          </div>
        </section>

        <section className="py-20 bg-gray-800 fade-in">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 translate-y-10 animate-fadeInUp">
              <h3 className="text-3xl font-bold mb-4">Seamless Integration</h3>
              <p className="mb-6">Easily integrate AI capabilities into your applications with our straightforward API.</p>
              <a href="#" className="text-blue-400 hover:underline inline-flex items-center">
                <FaCode className="mr-2" />
                Explore the Docs
              </a>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY29kZSUyMGludGVncmF0aW9ufGVufDB8fHx8MTcxMjk1OTYyMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Integration" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-20 fade-in">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 opacity-0 translate-y-10 animate-fadeInUp">Open Source</h3>
            <p className="text-xl mb-8 opacity-0 translate-y-10 animate-fadeInUp animation-delay-200">FREE+OPEN is completely open-source. Contribute and help shape the future of AI accessibility.</p>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center">
              <FaGithub className="mr-2 transition duration-500 ease-in-out transform hover:rotate-360" />
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-900 text-center">
        <p>&copy; {new Date().getFullYear()} FREE+OPEN. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
