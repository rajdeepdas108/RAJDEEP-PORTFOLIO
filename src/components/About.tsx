import React from 'react';
import { Code, Rocket, Star, Award, BookOpen, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-cyan to-space-purple mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm <strong>Rajdeep Das</strong>, a dedicated and enthusiastic <strong>Computer Science and Engineering</strong> student at <strong>Netaji Subhash Engineering College (NSEC)</strong>, Kolkata. I have a deep passion for technology, problem-solving, and continuous learning.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Throughout my academic journey, I've consistently strived for excellence—<strong>topping my school in Class 12</strong> and earning <strong>7 prizes for academic achievement</strong>. I enjoy diving deep into core subjects and sharing my knowledge with others, which is why I also teach <strong>mathematics</strong> in a way that makes learning fun and intuitive.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am always curious to learn how technology can solve real-world problems. I believe in learning by building and often engage in project-based learning and hackathons. My goal is to use tech to make meaningful impact—whether through <strong>AI</strong>, <strong>cybersecurity</strong>, <strong>blockchain</strong>, or <strong>entrepreneurship</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 text-center group hover:border-space-cyan/50 transition-all duration-300">
              <Code className="mx-auto mb-4 text-space-cyan group-hover:animate-float" size={40} />
              <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
              <p className="text-sm text-gray-400">Writing maintainable and efficient code</p>
            </div>
            
            <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 text-center group hover:border-space-purple/50 transition-all duration-300">
              <Rocket className="mx-auto mb-4 text-space-purple group-hover:animate-float" size={40} />
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-400">Embracing cutting-edge technologies</p>
            </div>
            
            <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 text-center group hover:border-space-pink/50 transition-all duration-300">
              <Star className="mx-auto mb-4 text-space-pink group-hover:animate-float" size={40} />
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm text-gray-400">Delivering stellar user experiences</p>
            </div>
          </div>
        </div>

        {/* Academic Highlights Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-space-cyan">🎓 Academic Highlights</h3>
          <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Award className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span><strong>School Topper</strong> in Class 12 Board Exams</span>
              </li>
              <li className="flex items-start">
                <Award className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Recipient of <strong>7 Academic Prizes</strong> for excellence</span>
              </li>
              <li className="flex items-start">
                <Award className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Qualified <strong>WBJEE</strong> with a rank under <strong>10,000</strong></span>
              </li>
              <li className="flex items-start">
                <BookOpen className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Currently pursuing <strong>B.Tech in CSE</strong> at NSEC</span>
              </li>
              <li className="flex items-start">
                <Star className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Consistent top performer in college exams and technical evaluations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-space-purple">💡 Projects I've Worked On</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30 hover:border-space-purple/50 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-space-purple">🔐 Blockchain-Based Supply Chain Verification</h4>
              <p className="text-gray-300">A hackathon project that ensures transparency and traceability in supply chains using blockchain technology.</p>
            </div>
            <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30 hover:border-space-purple/50 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-space-purple">🧠 LinkedIn Job Scam Detector (Chrome Extension)</h4>
              <p className="text-gray-300">A tool that uses <strong>AI and NLP</strong> to detect scam job listings and recruiter messages on LinkedIn.</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-space-blue"></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           
            <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30">
              <h4 className="font-bold text-lg mb-3 text-space-pink">Tools & Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Git & GitHub</li>
                <li>• Chrome Extension Development</li>
                <li>• Visual Studio Code</li>
                <li>• Basics of Blockchain (Ethereum concepts)</li>
                <li>• NLP (using NLTK, spaCy)</li>
              </ul>
            </div>
            <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30">
              <h4 className="font-bold text-lg mb-3 text-space-pink">Academic Strengths</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Data Structures & Algorithms</li>
                <li>• Competitive Programming (beginner level)</li>
                <li>• Technical Report Writing</li>
                <li>• Conceptual Math Teaching</li>
              </ul>
            </div>
            <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30">
              <h4 className="font-bold text-lg mb-3 text-space-pink">Soft Skills</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Effective Communication</li>
                <li>• Time Management</li>
                <li>• Leadership & Teamwork</li>
                <li>• Self-learning & Adaptability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-space-cyan">🚀 My Goals</h3>
          <div className="bg-space-deep/30 p-6 rounded-lg border border-space-medium/30">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Rocket className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Build real-world products that solve actual problems</span>
              </li>
              <li className="flex items-start">
                <Cpu className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Explore opportunities in <strong>AI, cybersecurity, and blockchain</strong></span>
              </li>
              <li className="flex items-start">
                <Code className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Contribute to <strong>open-source projects</strong> and tech communities</span>
              </li>
              <li className="flex items-start">
                <Star className="text-space-cyan mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Possibly start my own <strong>tech venture</strong> or pursue higher studies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;