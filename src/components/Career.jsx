import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import CareerForm from './CareerForm';


const Career = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features with React.',
      requirements: ['3+ years of React experience', 'Proficient with CSS/JS', 'Experience with state management'],
      postedDate: '2023-05-15'
    },
    {
      id: 2,
      title: 'UX Designer',
      type: 'Contract',
      location: 'New York, NY',
      department: 'Design',
      description: 'Join our design team to create beautiful and functional user experiences for our products.',
      requirements: ['Portfolio required', 'Figma expertise', 'User research skills'],
      postedDate: '2023-06-01'
    },
    {
      id: 3,
      title: 'Backend Engineer',
      type: 'Full-time',
      location: 'San Francisco, CA',
      department: 'Engineering',
      description: 'Help us build scalable backend services and APIs that power our applications.',
      requirements: ['Node.js/Express', 'Database design', 'AWS experience'],
      postedDate: '2023-06-10'
    }
  ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const popupVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
          Join Our Team
        </h1>
        <p className="max-w-xl mx-auto text-xl text-gray-600">
          We're building the future with talented people like you. Explore our open positions below.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto mb-8"
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search jobs by title or department..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Jobs List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-700 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">
                      {job.type} • {job.location} • {job.department}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-medium text-gray-500">
                    Posted on {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            variants={itemVariants}
            className="bg-white overflow-hidden shadow rounded-lg col-span-2 py-12 text-center"
          >
            <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </motion.div>

      {/* Job Details Modal */}
      {selectedJob && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            variants={popupVariants}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h3>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {selectedJob.type} • {selectedJob.location} • {selectedJob.department}
              </p>
            </div>
            <div className="px-6 py-5">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Job Description</h4>
              <p className="text-gray-700 mb-6">{selectedJob.description}</p>
              
              <h4 className="text-lg font-medium text-gray-900 mb-3">Requirements</h4>
              <ul className="space-y-2 mb-6">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="w-full bg-green-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Apply for this position
                </button>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-500">
                Posted on {new Date(selectedJob.postedDate).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
      >
        <div className=" bg-green-700 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Why Join Us?
              </h2>
              <p className="mt-3 max-w-md mx-auto text-lg text-purple-100">
                We offer competitive benefits and a culture you'll love.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Competitive Salary',
                    description: 'We offer competitive compensation packages including bonuses and stock options.',
                    icon: (
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    name: 'Flexible Work',
                    description: 'Work remotely or from our modern offices with flexible hours.',
                    icon: (
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    )
                  },
                  {
                    name: 'Learning Budget',
                    description: 'Annual stipend for conferences, courses, and books to further your growth.',
                    icon: (
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{benefit.name}</h3>
                        <p className="mt-1 text-purple-100">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <section className=' -mt-8'>
        <CareerForm/>
      </section>
      
  <section className=' mt-[130px]'>
      <Footer />
  </section>
    </div>
  );
};

export default Career;
