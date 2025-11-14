import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Download, 
  Calendar, 
  Eye, 
  ArrowRight,
  Grid,
  List,
  Filter,
  SearchX
} from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredResources, setFilteredResources] = useState([]);

  const resources = [
    {
      id: 1,
      title: 'Quadratic Equations Problem Set',
      description: 'A comprehensive set of problems covering factoring, completing the square, and the quadratic formula.',
      difficulty: 'intermediate',
      topic: 'algebra',
      tags: ['Algebra', 'Equations', 'Problem Set'],
      downloads: 234,
      date: '2024-01-15',
      pdfUrl: '/resources/quadratic-equations.pdf'
    },
    {
      id: 2,
      title: 'Mathematical Induction Mini-Guide',
      description: 'Step-by-step guide to understanding and applying mathematical induction with examples.',
      difficulty: 'advanced',
      topic: 'combinatorics',
      tags: ['Proofs', 'Induction', 'Mini-Guide'],
      downloads: 189,
      date: '2024-01-10',
      pdfUrl: '/resources/mathematical-induction.pdf'
    },
    {
      id: 3,
      title: 'Introduction to Trigonometry',
      description: 'Basic concepts of trigonometry including sine, cosine, and tangent functions.',
      difficulty: 'beginner',
      topic: 'trigonometry',
      tags: ['Trigonometry', 'Functions', 'Introduction'],
      downloads: 456,
      date: '2024-01-08',
      pdfUrl: '/resources/intro-trigonometry.pdf'
    },
    {
      id: 4,
      title: 'Calculus Limits and Continuity',
      description: 'Comprehensive guide to limits, continuity, and their applications in calculus.',
      difficulty: 'advanced',
      topic: 'calculus',
      tags: ['Calculus', 'Limits', 'Continuity'],
      downloads: 312,
      date: '2024-01-05',
      pdfUrl: '/resources/calculus-limits.pdf'
    },
    {
      id: 5,
      title: 'Geometry: Area and Perimeter',
      description: 'Practice problems for calculating areas and perimeters of various geometric shapes.',
      difficulty: 'beginner',
      topic: 'geometry',
      tags: ['Geometry', 'Area', 'Perimeter', 'Problem Set'],
      downloads: 523,
      date: '2024-01-03',
      pdfUrl: '/resources/geometry-area-perimeter.pdf'
    },
    {
      id: 6,
      title: 'Linear Algebra Basics',
      description: 'Introduction to vectors, matrices, and basic linear algebra operations.',
      difficulty: 'intermediate',
      topic: 'algebra',
      tags: ['Linear Algebra', 'Vectors', 'Matrices'],
      downloads: 167,
      date: '2023-12-28',
      pdfUrl: '/resources/linear-algebra-basics.pdf'
    }
  ];

  useEffect(() => {
    filterResources();
  }, [searchQuery, selectedTopic, selectedDifficulty, sortBy]);

  const filterResources = () => {
    let filtered = [...resources];
    
    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Topic filter
    if (selectedTopic) {
      filtered = filtered.filter(resource => resource.topic === selectedTopic);
    }
    
    // Difficulty filter
    if (selectedDifficulty) {
      filtered = filtered.filter(resource => resource.difficulty === selectedDifficulty);
    }
    
    // Sort
    switch(sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'difficulty':
        const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
        filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    setFilteredResources(filtered);
  };

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

  const ResourceCard = ({ resource, isListView = false }) => {
    if (isListView) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="resource-card bg-gray-800 rounded-xl border border-gray-700 p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <h3 className="text-xl font-semibold">{resource.title}</h3>
                <span className={`difficulty-badge ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
                </span>
              </div>
              <p className="text-gray-400 mb-3">{resource.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {resource.downloads} downloads
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {resource.date}
                </span>
                <div className="flex gap-2">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2 ml-6">
              <button 
                onClick={() => openPDF(resource.pdfUrl)}
                className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
              >
                <Eye className="w-4 h-4 mr-2" />
                View
              </button>
              <button 
                onClick={() => downloadPDF(resource.pdfUrl, resource.title)}
                className="border border-cyan-500 hover:bg-cyan-500/10 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
              <Link 
                to={`/resource/${resource.id}`}
                className="bg-gray-700 hover:bg-gray-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Details
              </Link>
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="resource-card bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-cyan-400" />
            </div>
            <span className={`difficulty-badge ${getDifficultyColor(resource.difficulty)}`}>
              {resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
          <p className="text-gray-400 mb-4">{resource.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {resource.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-1" />
                {resource.downloads}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {resource.date}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => openPDF(resource.pdfUrl)}
              className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Eye className="w-4 h-4 mr-2" />
              View PDF
            </button>
            <button 
              onClick={() => downloadPDF(resource.pdfUrl, resource.title)}
              className="flex-1 border border-cyan-500 hover:bg-cyan-500/10 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
          <Link 
            to={`/resource/${resource.id}`}
            className="w-full mt-2 bg-gray-700 hover:bg-gray-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            Resource Details
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Resource Library</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of student-created math resources. From problem sets to mini-guides, 
            everything is designed to make learning mathematics more accessible and enjoyable.
          </p>
        </motion.div>
        
        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedTopic} 
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">All Topics</option>
                  <option value="algebra">Algebra</option>
                  <option value="geometry">Geometry</option>
                  <option value="trigonometry">Trigonometry</option>
                  <option value="calculus">Calculus</option>
                  <option value="combinatorics">Combinatorics</option>
                </select>
                <select 
                  value={selectedDifficulty} 
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="difficulty">Difficulty</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-400 text-sm">
                Showing {filteredResources.length} of {resources.length} resources
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-gray-900' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-500 text-gray-900' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resources Grid/List */}
        {filteredResources.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-4'}>
            {filteredResources.map((resource) => (
              <ResourceCard 
                key={resource.id} 
                resource={resource} 
                isListView={viewMode === 'list'}
              />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchX className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No resources found</h3>
            <p className="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Resources;