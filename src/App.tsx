import React, { useState } from 'react';
import { Search, BookOpen, Download, ExternalLink, Github, Coffee } from 'lucide-react';
import SearchBar from './components/SearchBar';
import PaperCard from './components/PaperCard';
import Footer from './components/Footer';

interface Paper {
  title: string;
  author: string[];
  published: string;
  doi: string;
  url: string;
}

function App() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);

  const searchPapers = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.crossref.org/works?query=${encodeURIComponent(query)}&select=title,author,published,DOI,URL&rows=10`
      );
      const data = await response.json();
      
      const formattedPapers = data.message.items.map((item: any) => ({
        title: item.title?.[0] || 'Untitled',
        author: item.author?.map((a: any) => `${a.given} ${a.family}`).slice(0, 3) || [],
        published: item.published?.['date-parts']?.[0]?.[0] || 'N/A',
        doi: item.DOI || '',
        url: item.URL || `https://doi.org/${item.DOI}`
      }));
      
      setPapers(formattedPapers);
    } catch (error) {
      console.error('Error fetching papers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Research Paper Explorer</h1>
          <p className="text-lg text-gray-600">Discover academic papers from around the world</p>
        </div>

        <SearchBar onSearch={searchPapers} loading={loading} />

        <div className="mt-12 space-y-6">
          {papers.map((paper, index) => (
            <PaperCard key={index} paper={paper} />
          ))}
          
          {papers.length === 0 && !loading && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Search for research papers to get started</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;