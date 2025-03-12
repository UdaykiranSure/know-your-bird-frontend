import React, { useState } from 'react';

import UploadPage from './components/UploadPage'
import HomePage from './components/HomePage'
import GuidePage from './components/GuidePage'
import './App.css'
  function App() {
    
    const [currentPage, setCurrentPage] = useState('upload'); // 'upload', 'home', 'guide'
    const [uploadedBirdImage, setUploadedBirdImage] = useState(null);
    const [birdData, setBirdData] = useState(null);
    const [loading,setLoading] = useState(false)
    
    // Mock function to simulate API call for bird identification
    const identifyBird = async (imageFile) => {
        // In a real app, this would be an API call
        // Convert Base64 to Blob
        const blob = await fetch(imageFile).then((res) => res.blob());

        // Prepare FormData
        const formData = new FormData();
        formData.append("image", blob, "bird.jpg"); // Append blob as a file
        const identifyBirdApiCall = async (imageFile) => {

        const response = await fetch('https://know-your-bird-tkhn.vercel.app/identify-bird', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            console.error(response)

            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    };
        const data = await identifyBirdApiCall(imageFile);
        console.log(data)
        return (data);
//          {
//             name: "Northern Cardinal",
//       scientificName: "Cardinalis cardinalis",
//       markdownContent: `# Northern Cardinal (Cardinalis cardinalis)

//       ## Description
//       The Northern Cardinal is a distinctive, medium-sized songbird known for its bright red plumage (males) and reddish-brown coloration (females). Both sexes feature a prominent crest on their heads and a distinctive black face mask. Males are vibrant red throughout with black around the bill, while females are more subdued in color with reddish tinges on their crest, wings, and tail.

// ## Habitat
// Cardinals are year-round residents across eastern and central North America, from southern Canada to parts of Mexico and Central America. They thrive in gardens, shrublands, forest edges, and suburban areas where shrubs and small trees provide good nesting sites.

// ## Diet
// Their diet consists primarily of seeds, grains, and fruits, supplemented with insects during the breeding season. Cardinals particularly favor sunflower seeds, making them common visitors to backyard bird feeders.

// ## Behavior
// Northern Cardinals are often seen in pairs and maintain territories year-round. They are known for their beautiful songs, with both males and females being accomplished singers. Males often sing from high perches to defend territory and attract mates.

// ## Conservation
// The Northern Cardinal population is stable and widespread. They have actually benefited from human landscape changes and the popularity of bird feeding.

// ## Interesting Facts
// - The Northern Cardinal is the state bird of seven U.S. states, more than any other species
// - Unlike many songbirds, female cardinals also sing, often while sitting on the nest
// - Cardinals don't migrate and maintain their bright coloration year-round
// - Their red color comes from carotenoid pigments in their diet`,
//       relatedImages: [
//         "https://cdn.usegalileo.ai/sdxl10/0aa9f8f6-07c1-4760-861d-193e182020ec.png",
//         "https://cdn.usegalileo.ai/sdxl10/b89f6aac-2566-4a77-85fa-305758ae2ae9.png",
//         "https://cdn.usegalileo.ai/sdxl10/5f777d8a-00c1-4bb7-a26f-c868ff8d6492.png"
//       ]
//     };
  };

  const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = () => {
              setUploadedBirdImage(reader.result);
            };
            reader.readAsDataURL(file);
          }
        };
      
        const handleSubmit = async () => {
            if (uploadedBirdImage) {
                // In a real app, we would send the image to the server
                setLoading(true)
                const data =  await identifyBird(uploadedBirdImage);
                setBirdData(data);
                setCurrentPage('home');
              }
            };
          
            const navigateToGuide = () => {
                setCurrentPage('guide');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToUpload = () => {
      setLoading(false)
      setUploadedBirdImage(false)
      setCurrentPage('upload');
    };
  
    // Render the correct page based on state
    return (
        <div className="font-serif min-h-screen bg-[#f8fafb]">
          {currentPage === 'upload' && (
              <UploadPage 
                handleImageUpload={handleImageUpload} 
                handleSubmit={handleSubmit}
                uploadedBirdImage={uploadedBirdImage}
                loading={loading}
              />
            )}
            {currentPage === 'home' && (
                <HomePage 
                  navigateToGuide={navigateToGuide}
                  navigateToUpload={navigateToUpload}
                  birdData={birdData}
                />
              )}
              {currentPage === 'guide' && (
                  <GuidePage 
                    navigateToHome={navigateToHome}
                    birdData={birdData}
                  />
                )}
              </div>
            );
          };
          
          
             





export default App
