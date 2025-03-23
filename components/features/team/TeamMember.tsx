'use client';

import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const TeamMember = ({
  name,
  role,
  description,
  imageUrl,
}: TeamMemberProps) => {
  return (
    <div 
      className={`flex flex-col h-full bg-white overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1
      }`}
    >
      <div className="relative w-full aspect-square">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Фото ${name}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Нет фото</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{role}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember; 