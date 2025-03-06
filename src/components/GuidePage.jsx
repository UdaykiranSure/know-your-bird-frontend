import ReactMarkdown from "react-markdown"
import birdLogo from "/home/user/find-the-bird/src/assets/download (1).png";  // Adjust the path as neededimport UploadPage from './components/UploadPage'



const GuidePage = ({ navigateToHome, birdData }) => {
    // Default markdown content in case birdData is not available
    const birdImages = birdData?.variation_images || [
      "https://cdn.usegalileo.ai/sdxl10/0aa9f8f6-07c1-4760-861d-193e182020ec.png",
      "https://cdn.usegalileo.ai/sdxl10/b89f6aac-2566-4a77-85fa-305758ae2ae9.png",
      "https://cdn.usegalileo.ai/sdxl10/5f777d8a-00c1-4bb7-a26f-c868ff8d6492.png",
      "https://cdn.usegalileo.ai/sdxl10/1532ad9b-6db6-4bd7-9486-3b637724c6f2.png",
      "https://cdn.usegalileo.ai/sdxl10/0169daad-7d55-4874-831e-f03bcea84310.png"
    ];
    const defaultMarkdown = `# Birding Guide

    
  ## Getting Started with Birding
  
  Birding, also known as bird watching, is a wonderful hobby that connects you with nature while developing observation skills. Here's how to get started:
  
  ### Essential Equipment
  
  1. **Binoculars** - The most important tool for any birder
  2. **Field Guide** - To help identify different species
  3. **Notebook** - For recording sightings and observations
  4. **Comfortable Clothing** - Weather-appropriate and in neutral colors
  5. **Camera** - Optional, but great for documenting your finds
  
  ### Best Practices
  
  * Start in your own backyard or local park
  * Go early in the morning when birds are most active
  * Move slowly and quietly
  * Listen for bird calls and songs
  * Join a local birding group for guidance`;
  
    return (
      <div className="min-h-screen flex flex-col bg-[#f8fafb]">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-4 md:px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e161b]">
            <button onClick={navigateToHome} className="flex items-center gap-2 text-[#1f93e0]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M228,128a12,12,0,0,1-12,12H69.66l44.17,44.17a12,12,0,0,1-17,17l-64-64a12,12,0,0,1,0-17l64-64a12,12,0,0,1,17,17L69.66,116H216A12,12,0,0,1,228,128Z"></path>
              </svg>
              <span className="font-medium">Back to Home</span>
            </button>
          </div>
          <div className="flex items-center gap-4 text-[#0e161b]">

 <img src={birdLogo} alt="Bird Logo" className="h-8 w-10 pr-0 "/>
<h2 className="text-[#0e161b] text-lg pl-0 font-bold leading-tight tracking-[-0.015em]">Know you Bird</h2>

</div>
          <div className="size-10"></div> {/* Empty div for balanced spacing */}
        </header>
        
        {birdData && birdData.species_images && (
          <div className="px-4 md:px-10 py-6">
            <h3 className="text-[#0e161b] text-lg font-bold mb-4">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {birdData.species_images.map((image, index) => (
                 <div key={index} className="flex flex-col gap-3">
                 <div
                   className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                   style={{ backgroundImage: `url("${image}")` }}
                 ></div>
               </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex-1 px-4 md:px-10 py-6">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-4xl mx-auto markdown-content">
            <ReactMarkdown>
              {birdData ? birdData.description : defaultMarkdown}
            </ReactMarkdown>
          </div>
        </div>

        <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              {birdData ? "Related Birds" : "Popular Species"}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {birdData.variation_species.map((species) => (
                <div key={species} className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${birdImages[species]}")` }}
                                      >
                  
                  </div>
                  <h3 className="text-[#0e161b] text-base font-bold leading-normal tracking-[-0.015em]">{species}</h3>
                </div>
              ))}
            </div>
        
        <footer className="mt-auto border-t border-[#e8eef3] py-6 px-4 md:px-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
            <img src={birdLogo} alt="Bird Logo" className="h-8 w-10 pr-0 "/>

              <span className="font-bold text-[#0e161b]">Know you Bird</span>
            </div>
            {/* <div className="text-sm text-[#507a95]">© 2025 Birding Community. All rights reserved.</div> */}
          </div>
        </footer>
        
        {/* Custom styling for markdown content */}
        <style jsx global>{`
          .markdown-content h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #0e161b;
          }
          .markdown-content h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: #0e161b;
          }
          .markdown-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            color: #0e161b;
          }
          .markdown-content p {
            margin-bottom: 1rem;
            line-height: 1.6;
            color: #2d3748;
          }
          .markdown-content ul, .markdown-content ol {
            margin-bottom: 1rem;
            padding-left: 1.5rem;
          }
          .markdown-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }
          .markdown-content a {
            color: #1f93e0;
            text-decoration: none;
          }
          .markdown-content a:hover {
            text-decoration: underline;
          }
          .markdown-content blockquote {
            border-left: 4px solid #e8eef3;
            padding-left: 1rem;
            font-style: italic;
            margin: 1rem 0;
            color: #507a95;
          }
          .markdown-content code {
            background-color: #e8eef3;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: monospace;
          }
          .markdown-content pre {
            background-color: #e8eef3;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1rem 0;
          }
          .markdown-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 1rem 0;
          }
        `}</style>
      </div>
    );
  };

export default GuidePage