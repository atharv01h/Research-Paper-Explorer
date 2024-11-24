import React from 'react';
import { ExternalLink, Users, Calendar } from 'lucide-react';

interface PaperCardProps {
  paper: {
    title: string;
    author: string[];
    published: string;
    doi: string;
    url: string;
  };
}

function PaperCard({ paper }: PaperCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{paper.title}</h2>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-sm">
            {paper.author.length > 0
              ? paper.author.join(', ') + (paper.author.length > 2 ? ' et al.' : '')
              : 'Unknown Authors'}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{paper.published}</span>
        </div>
      </div>

      <div className="flex justify-end">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors duration-200"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Paper
        </a>
      </div>
    </div>
  );
}

export default PaperCard;