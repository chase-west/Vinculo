import React, { useState, useEffect } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("open");

  const fetchProjects = async () => {
    // Implement API call
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-3xl font-bold text-black">
              Vinculo
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Navigation Tabs and Submit Button */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center border-b">
            <div className="flex space-x-1">
              <button
                className={`py-4 px-6 focus:outline-none ${
                  activeTab === 'open' 
                    ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('open')}
              >
                Open Projects
              </button>
              <button
                className={`py-4 px-6 focus:outline-none ${
                  activeTab === 'trending' 
                    ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('trending')}
              >
                Trending
              </button>
              <button
                className={`py-4 px-6 focus:outline-none ${
                  activeTab === 'urgent' 
                    ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('urgent')}
              >
                Urgent Needs
              </button>
              <button
                className={`py-4 px-6 focus:outline-none ${
                  activeTab === 'completed' 
                    ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
            </div>
            <div className="px-6">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Submit Project
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length === 0 ? (
              // Placeholder cards for empty state
              [...Array(6)].map((_, index) => (
                <ProjectCard key={index} project={{
                  title: "Example Project",
                  status: "OPEN",
                  description: "This is an example project description. Real projects will appear here once data is loaded.",
                  skills: ["React", "Python", "Django"],
                  tasks_count: 3
                }} />
              ))
            ) : (
              projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900">{project?.title}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project?.status === 'OPEN' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {project?.status}
          </span>
        </div>
        
        <p className="mt-4 text-gray-600">{project?.description}</p>
        
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project?.skills?.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-500">
              {project?.tasks_count} open tasks
            </span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;