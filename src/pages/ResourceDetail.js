import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Download, 
  Eye, 
  Calendar, 
  BookOpen,
  User,
  Tag,
  Clock,
  FileText,
  Share2,
  Heart
} from 'lucide-react';

const ResourceDetail = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  const resources = [
    {
      id: 1,
      title: 'Quadratic Equations Problem Set',
      description: 'A comprehensive set of problems covering factoring, completing the square, and the quadratic formula. This resource includes detailed solutions and step-by-step explanations for each problem type.',
      fullDescription: 'This comprehensive problem set covers all aspects of quadratic equations that students encounter in high school mathematics. The resource is structured to build understanding progressively, starting with basic factoring techniques and advancing to complex applications of the quadratic formula. Each section includes worked examples, practice problems with varying difficulty levels, and detailed solutions that explain the reasoning behind each step.',
      difficulty: 'intermediate',
      topic: 'algebra',
      tags: ['Algebra', 'Equations', 'Problem Set', 'Quadratic'],
      downloads: 234,
      views: 1456,
      date: '2024-01-15',
      author: 'Sarah Chen',
      authorRole: 'Grade 12 Student',
      estimatedTime: '45 minutes',
      pageCount: 12,
      pdfUrl: '/resources/quadratic-equations.pdf',
      learningObjectives: [
        'Master factoring quadratic expressions',
        'Apply the quadratic formula confidently',
        'Complete the square method',
        'Solve real-world quadratic problems'
      ],
      prerequisites: [
        'Basic algebraic operations',
        'Understanding of variables and equations',
        'Factoring simple expressions'
      ]
    },
    {
      id: 2,
      title: 'Mathematical Induction Mini-Guide',
      description: 'Step-by-step guide to understanding and applying mathematical induction with examples.',
      fullDescription: 'Mathematical induction is a powerful proof technique that\'s essential for advanced mathematics. This mini-guide breaks down the concept into manageable parts, starting with the basic principle and building up to complex applications. The guide includes numerous examples, common pitfalls to avoid, and practice problems with detailed solutions.',
      difficulty: 'advanced',
      topic: 'combinatorics',
      tags: ['Proofs', 'Induction', 'Mini-Guide', 'Advanced'],
      downloads: 189,
      views: 892,
      date: '2024-01-10',
      author: 'Michael Park',
      authorRole: 'Grade 12 Student',
      estimatedTime: '60 minutes',
      pageCount: 8,
      pdfUrl: '/resources/mathematical-induction.pdf',
      learningObjectives: [
        'Understand the principle of mathematical induction',
        'Apply induction to prove statements',
        'Recognize when induction is appropriate',
        'Write clear and rigorous induction proofs'
      ],
      prerequisites: [
        'Strong algebra foundation',
        'Understanding of mathematical proofs',
        'Experience with sequences and series'
      ]
    },
    {
      id: 3,
      title: 'Introduction to Trigonometry',
      description: 'Basic concepts of trigonometry including sine, cosine, and tangent functions.',
      fullDescription: 'This introduction to trigonometry covers the fundamental concepts that form the foundation for trigonometric studies. Starting with the unit circle and basic definitions, the resource progresses through the six trigonometric functions, their graphs, and basic applications. The material is presented with visual aids and real-world examples to make abstract concepts more concrete.',
      difficulty: 'beginner',
      topic: 'trigonometry',
      tags: ['Trigonometry', 'Functions', 'Introduction', 'Geometry'],
      downloads: 456,
      views: 2134,
      date: '2024-01-08',
      author: 'Emily Johnson',
      authorRole: 'Grade 11 Student',
      estimatedTime: '30 minutes',
      pageCount: 15,
      pdfUrl: '/resources/intro-trigonometry.pdf',
      learningObjectives: [
        'Define the six trigonometric functions',
        'Understand the unit circle',
        'Evaluate trigonometric values',
        'Apply trigonometry to right triangles'
      ],
      prerequisites: [
        'Basic geometry concepts',
        'Understanding of angles and degrees',
        'Ratio and proportion knowledge'
      ]
    },
    {
      id: 4,
      title: 'Calculus Limits and Continuity',
      description: 'Comprehensive guide to limits, continuity, and their applications in calculus.',
      fullDescription: 'This comprehensive guide covers the fundamental concepts of limits and continuity that form the foundation of calculus. The resource explains the intuitive and formal definitions of limits, various techniques for evaluating limits, and the concept of continuity. Detailed examples show how these concepts apply to real-world problems and prepare students for differential calculus.',
      difficulty: 'advanced',
      topic: 'calculus',
      tags: ['Calculus', 'Limits', 'Continuity', 'Analysis'],
      downloads: 312,
      views: 1678,
      date: '2024-01-05',
      author: 'David Kumar',
      authorRole: 'Grade 12 Student',
      estimatedTime: '90 minutes',
      pageCount: 20,
      pdfUrl: '/resources/calculus-limits.pdf',
      learningObjectives: [
        'Understand the concept of limits',
        'Evaluate limits using various techniques',
        'Define and test for continuity',
        'Apply limits to real-world problems'
      ],
      prerequisites: [
        'Strong algebra skills',
        'Understanding of functions',
        'Basic graphing knowledge'
      ]
    },
    {
      id: 5,
      title: 'Geometry: Area and Perimeter',
      description: 'Practice problems for calculating areas and perimeters of various geometric shapes.',
      description: 'Practice problems for calculating areas and perimeters of various geometric shapes.',
      fullDescription: 'This geometry resource provides comprehensive practice in calculating areas and perimeters for a wide variety of shapes. Starting with basic rectangles and triangles, the resource progresses to complex polygons, circles, and composite shapes. Each section includes formula derivations, worked examples, and plenty of practice problems with increasing difficulty levels.',
      difficulty: 'beginner',
      topic: 'geometry',
      tags: ['Geometry', 'Area', 'Perimeter', 'Problem Set'],
      downloads: 523,
      views: 2891,
      date: '2024-01-03',
      author: 'Lisa Wang',
      authorRole: 'Grade 10 Student',
      estimatedTime: '40 minutes',
      pageCount: 10,
      pdfUrl: '/resources/geometry-area-perimeter.pdf',
      learningObjectives: [
        'Calculate area and perimeter of basic shapes',
        'Work with composite figures',
        'Apply geometric formulas',
        'Solve real-world geometry problems'
      ],
      prerequisites: [
        'Basic arithmetic skills',
        'Understanding of shapes',
        'Measurement concepts'
      ]
    },
    {
      id: 6,
      title: 'Linear Algebra Basics',
      description: 'Introduction to vectors, matrices, and basic linear algebra operations.',
      fullDescription: 'This introduction to linear algebra covers the fundamental concepts of vectors and matrices that are essential for advanced mathematics and applications. The resource explains vector operations, matrix arithmetic, determinants, and systems of linear equations. The material is presented with practical applications in physics, computer science, and engineering to show the relevance of abstract concepts.',
      difficulty: 'intermediate',
      topic: 'algebra',
      tags: ['Linear Algebra', 'Vectors', 'Matrices', 'Systems'],
      downloads: 167,
      views: 945,
      date: '2023-12-28',
      author: 'James Rodriguez',
      authorRole: 'Grade 12 Student',
      estimatedTime: '75 minutes',
      pageCount: 18,
      pdfUrl: '/resources/linear-algebra-basics.pdf',
      learningObjectives: [
        'Understand vector operations',
        'Perform matrix arithmetic',
        'Solve systems of linear equations',
        'Calculate determinants'
      ],
      prerequisites: [
        'Strong algebra foundation',
        'Understanding of equations',
        'Basic coordinate geometry'
      ]
    }
  ];

  useEffect(() => {
    const foundResource = resources.find(r => r.id === parseInt(id));
    setResource(foundResource);
    setLoading(false);
  }, [id]);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const downloadPDF = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    link.click();
  };

  const shareResource = () => {
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Resource not found</h2>
          <Link to="/resources" className="btn-primary">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/resources" 
            className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Resources
          </Link>
        </motion.div>

        {/* Resource Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-xl border border-gray-700 p-8 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-3xl font-bold">{resource.title}</h1>
                <span className={`difficulty-badge ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
                </span>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">{resource.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {resource.downloads} downloads
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {resource.views} views
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {resource.date}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3 ml-8">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-lg transition-colors ${
                  isLiked ? 'bg-red-500/20 text-red-400' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={shareResource}
                className="p-3 bg-gray-700 text-gray-400 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {resource.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full flex items-center">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => openPDF(resource.pdfUrl)}
              className="btn-primary flex items-center"
            >
              <Eye className="w-5 h-5 mr-2" />
              View PDF
            </button>
            <button 
              onClick={() => downloadPDF(resource.pdfUrl, resource.title)}
              className="btn-secondary flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Full Description */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-cyan-400" />
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">{resource.fullDescription}</p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                Learning Objectives
              </h2>
              <ul className="space-y-2">
                {resource.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                Prerequisites
              </h2>
              <ul className="space-y-2">
                {resource.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Author Info */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-cyan-400" />
                Author
              </h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold">
                    {resource.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{resource.author}</p>
                  <p className="text-gray-400 text-sm">{resource.authorRole}</p>
                </div>
              </div>
            </div>

            {/* Resource Info */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4">Resource Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pages</span>
                  <span className="font-medium">{resource.pageCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Est. Time</span>
                  <span className="font-medium">{resource.estimatedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Topic</span>
                  <span className="font-medium capitalize">{resource.topic}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Level</span>
                  <span className="font-medium capitalize">{resource.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => openPDF(resource.pdfUrl)}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Open PDF
                </button>
                <button 
                  onClick={() => downloadPDF(resource.pdfUrl, resource.title)}
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;