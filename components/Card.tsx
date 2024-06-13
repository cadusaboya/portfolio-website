import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const Card = ({ title, description, imageUrl, skills, githubUrl, mediumUrl }: { title: string, description: string, imageUrl: string, skills: string[], githubUrl: string, mediumUrl: string }) => {
  return (
    <div className="card-container flex relative">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md">
        <img className="w-full h-64" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 text-base mb-4">{description} <a href={mediumUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700"> Learn more </a></p>
            {skills.map((skill, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
            ))}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 text-gray-700"> <FaGithub size={24} /> </a>
        </div>
      </div>
    </div>
  );
}

export default Card;