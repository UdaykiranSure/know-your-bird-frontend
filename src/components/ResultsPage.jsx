// Add this to src/components/ResultsPage.jsx
import React from 'react';

function ModelResultsSection({ birdData }) {
  console.log(typeof birdData.responses)
  
  console.log(birdData.responses.gemini)


  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-sky-800 mb-4">AI Model Analysis</h3>
      <div className="space-y-4">
        
      {birdData?.responses && Object.entries(birdData.responses).map(([model, value]) => (
  <div key={model} className="border border-sky-100 rounded-lg p-4 hover:bg-sky-50 transition">
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-lg font-semibold text-sky-700">{model}</h4>
    </div>
    
    <div className="mb-2">
      <strong className="text-sky-600">Identified Species:</strong>
      <span className="ml-2 text-gray-700">{value?.species || "Unknown"}</span>
    </div>
    
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
      <h5 className="font-medium text-sky-700 mb-2">Reasoning:</h5>
      <p className="text-gray-600 text-sm">{value?.reason || "No reason provided"}</p>
    </div>
  </div>
))}

      </div>
    </div>
  );
}

// Modify the existing ResultsPage component to include this section
function ResultsPage({birdData}) {
  // ... existing code ...

  return (
    <div className="max-w-6xl mx-auto">
      {/* Existing code... */}
      
      {/* Add this new section after the existing sections */}
      <ModelResultsSection birdData={birdData} />
    </div>
  );
}

export default ResultsPage;