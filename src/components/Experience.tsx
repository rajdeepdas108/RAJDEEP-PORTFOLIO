import React from 'react';
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior software Engineer',
      company: 'Google',
      location: 'Bangolore, India',
      period: ' 2030- Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    
    {
      title: 'Full-Stack Developer',
      company: 'Microsoft',
      location: 'Remote',
      period: '2027 - 2028',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced development time by 30%',
        'Implemented automated testing'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2024 - 2025',
      description: 'Focused on creating intuitive user interfaces and optimizing user experience. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Improved user engagement by 25%',
        'Created reusable component library',
        'Optimized loading times by 50%'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Netaji Subhash Engineering College (NSEC)',
      location: 'Kolkata',
      period: '2024 - Present',
      description: 'Currently pursuing a B.Tech in Computer Science and Engineering.',
      achievements: [
        'Studying core subjects such as Data Structures, Algorithms, Operating Systems, Computer Networks, and Programming (C, Python)',
        'Working on real-world projects involving AI/NLP, blockchain, and web development',
        'Actively participating in hackathons, coding contests, and collaborative projects'
      ]
    },
    {
      degree: 'Higher Secondary (Class 12)',
      school: 'Kalupur Panchpota High School',
      location: 'Bongaon',
      period: '2023 - 2024',
      grade: 'Grade: A+',
      description: 'Specialized in Physics, Chemistry, Mathematics, and Biology.',
      achievements: [
        'School Topper in Class 12 board exams',
        'Honored with 7 academic prizes for exceptional academic performance',
        'Demonstrated excellence in both theoretical understanding and practical application'
      ]
    },
    {
      degree: 'Secondary Education (Class 10)',
      school: 'Kalupur Panchpota High School',
      location: 'Bongaon',
      period: '2021 - 2022',
      grade: 'Grade: A+',
      description: 'Built a strong academic foundation leading to success in competitive exams.',
      achievements: [
        'Secured A+ grade with top scores in Mathematics and Science',
        'Built a strong academic foundation leading to success in competitive exams like WBJEE (rank under 10,000)',
        'Actively engaged in academic competitions and extracurricular learning'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-space-deep/30">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-cyan to-space-blue mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-space-cyan">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-space-medium/50 hover:border-space-cyan/50 transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-space-cyan rounded-full border-4 border-space-dark"></div>
                  
                  <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30">
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-space-cyan font-medium">{exp.company}</span>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-400 flex items-start">
                          <span className="text-space-cyan mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-space-pink">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-space-medium/50 hover:border-space-purple/50 transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-space-pink/50 rounded-full border-4 border-space-dark"></div>
                  
                  <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-space-pink font-medium">{edu.school}</span>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    {edu.grade && <p className="text-space-cyan text-sm mb-2">{edu.grade}</p>}
                    <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-400 flex items-start">
                          <span className="text-space-purple mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;