import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Target, 
  Globe, 
  GraduationCap, 
  Download, 
  Calendar,
  Check,
  ChevronDown,
  SearchX
} from 'lucide-react';

const Home = () => {
  const [counters, setCounters] = useState({ resources: 0, downloads: 0, contributors: 0, schools: 0 });
  const [openFAQ, setOpenFAQ] = useState(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        resources: 47,
        downloads: 1234,
        contributors: 28,
        schools: 15
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const Counter = ({ value, label }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [value]);
    
    return (
      <div className="text-center animate-count-up">
        <div className="text-4xl font-bold text-cyan-400 mb-2">{count}</div>
        <div className="text-gray-400">{label}</div>
      </div>
    );
  };

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Grade 11 Student',
      initials: 'AS',
      content: 'Creating problem sets for Math Mentors helped me understand calculus better than any textbook. Teaching others truly solidified my knowledge.'
    },
    {
      name: 'Maya Johnson',
      role: 'Grade 10 Student',
      initials: 'MJ',
      content: 'The mini-guides are so much clearer than our textbook. I finally understand mathematical induction thanks to the student-written explanations.'
    },
    {
      name: 'Sam Park',
      role: 'Mentor',
      initials: 'SP',
      content: 'Mentoring younger students through Math Mentors has been incredibly rewarding. Seeing their "aha" moments makes all the preparation worthwhile.'
    }
  ];

  const faqs = [
    {
      question: 'How can I join Math Mentors?',
      answer: 'Math Mentors is open to all high school students interested in mathematics. You can join by attending our weekly meetings or by reaching out to our club leaders. No advanced math background required - just enthusiasm for learning and teaching!'
    },
    {
      question: 'Are the resources really free?',
      answer: 'Yes! All Math Mentors resources are completely free. We believe in making quality math education accessible to everyone. No registration, login, or payment required.'
    },
    {
      question: 'Can I contribute my own resources?',
      answer: 'Absolutely! We encourage all members to create and contribute resources. Our team will help you with LaTeX formatting, problem design, and review. It\'s a great way to deepen your understanding while helping others.'
    },
    {
      question: 'What topics do you cover?',
      answer: 'We cover a wide range of high school math topics including algebra, geometry, trigonometry, pre-calculus, and calculus. Our resources are categorized by difficulty level, so you can find materials that match your current understanding.'
    }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="animate-float mb-8"
          >
            <div className="w-32 h-32 bg-cyan-500 rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-cyan-500/30">
              <span className="text-gray-900 font-bold text-5xl">MM</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Math Mentors</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl text-gray-300 mb-8"
          >
            Mathematics made by students, for students
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            A student-led initiative making mathematics more approachable, collaborative, and creative. 
            We create high-quality educational materials and mentoring opportunities that allow students to both learn and teach.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/resources" className="btn-primary">
              Explore Resources
            </Link>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="btn-secondary"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Counter value={47} label="Published Resources" />
            <Counter value={1234} label="Downloads" />
            <Counter value={28} label="Active Contributors" />
            <Counter value={15} label="Schools Reached" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">About Math Mentors</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Learn. Create. Mentor.</h3>
              <p className="text-gray-300 mb-6">
                Math Mentors is a student-led initiative designed to make mathematics more approachable, collaborative, and creative. 
                We focus on producing student-made educational materials—from LaTeX-formatted problem sets to mini-guides— 
                that allow students to both learn and teach mathematics.
              </p>
              <p className="text-gray-300 mb-6">
                Unlike competition-driven math clubs, Math Mentors prioritizes clarity, understanding, and creativity over speed or contest preparation. 
                We embrace the idea of building something lasting—an open collection of resources written by students, for students.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                  <span>Professional LaTeX formatting</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <span>Student-led mentoring</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <span>Creative problem-solving approach</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 card-hover">
                <h4 className="text-xl font-semibold mb-6 text-cyan-400">What Makes Us Different</h4>
                <div className="space-y-4">
                  {[
                    'Focus on Understanding',
                    'Student-Created Resources',
                    'Open and Accessible'
                  ].map((title, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{title}</h5>
                        <p className="text-gray-400 text-sm">
                          {title === 'Focus on Understanding' && 'We prioritize deep comprehension over competitive speed'}
                          {title === 'Student-Created Resources' && 'All materials are crafted by students who understand the learning journey'}
                          {title === 'Open and Accessible' && 'No login required - free resources for everyone'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section ref={goalsRef} className="section-padding bg-gray-800/30">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Our Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Build Lasting Resources',
                description: 'Create a permanent library of student-authored math resources that future generations can expand and improve.'
              },
              {
                icon: GraduationCap,
                title: 'Empower Student Teachers',
                description: 'Give students the confidence and skills to teach mathematics, reinforcing their own understanding through teaching.'
              },
              {
                icon: Globe,
                title: 'Expand Our Network',
                description: 'Reach out to other schools and programs to build a collaborative math education network.'
              }
            ].map((goal, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card-hover bg-gray-800 rounded-xl p-8 border border-gray-700"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <goal.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{goal.title}</h3>
                <p className="text-gray-400">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Student Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="section-padding bg-gray-800/30">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg border border-gray-700"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;