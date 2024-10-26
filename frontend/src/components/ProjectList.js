import React, { useState, useEffect } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("open");

  const fetchProjects = async () => {
    // Implement API call
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Open Source Projects</h1>
        <button className="px-4 py-2 border rounded hover:bg-gray-100">
          Submit Project
        </button>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4 border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'open' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('open')}
          >
            Open Projects
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'trending' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'urgent' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('urgent')}
          >
            Urgent Needs
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'completed' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 h-full">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{project?.title}</h2>
        <span className={`px-2 py-1 rounded text-sm ${
          project?.status === 'OPEN' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {project?.status}
        </span>
      </div>
      
      <p className="text-gray-600 my-4">{project?.description}</p>
      
      <div className="space-y-2">
        <div className="flex gap-2 flex-wrap">
          {project?.skills?.map((skill) => (
            <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            {project?.tasks_count} open tasks
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;