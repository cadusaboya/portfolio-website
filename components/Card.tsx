const Card = ({ title, description, imageUrl, skills }: { title: string, description: string, imageUrl: string, skills: string[] }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md">
        <img className="w-full h-64" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 text-base mb-2">{description}</p>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;