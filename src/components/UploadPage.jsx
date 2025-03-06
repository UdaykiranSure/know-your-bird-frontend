import Header from './Header'

const UploadPage = ({ handleImageUpload, handleSubmit, uploadedBirdImage ,loading}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-[#0e161b] mb-6 text-center">Identify Your Bird</h1>
          <p className="text-[#507a95] mb-8 text-center">
            Upload a photo of a bird to identify its species and learn more about it
          </p>
          
          <div className="mb-8">
            <div className="border-2 border-dashed border-[#d1dde6] rounded-xl p-8 flex flex-col items-center justify-center">
              {uploadedBirdImage ? (
                <div className="w-full">
                  <img 
                    src={uploadedBirdImage} 
                    alt="Uploaded bird" 
                    className="w-full h-64 object-contain mb-4 rounded-lg"
                  />
                  
                </div>
              ) : (
                <>
                  <div className="text-[#1f93e0] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#0e161b] font-medium mb-2">Upload a bird photo</p>
                  <p className="text-[#507a95] text-sm text-center mb-4">
                    JPG, PNG or GIF files up to 5MB
                  </p>
                  <button 
                    onClick={() => { document.getElementById('bird-image-input').click()}}
                    className="bg-[#1f93e0] text-white rounded-full px-6 py-2 text-sm font-bold"
                  >
                    Select image
                  </button>
                </>
              )}
              

              <input 
                type="file" 
                id="bird-image-input" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload} 
              />
            </div>
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={!uploadedBirdImage || loading}
            className={`w-full rounded-full py-3 font-bold text-center ${
              uploadedBirdImage 
                ? 'bg-[#1f93e0] text-white cursor-pointer' 
                : 'bg-[#e8eef3] text-[#507a95] cursor-not-allowed'
            }`}
          >
           {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    <span className="ml-3">Processing...</span>
                  </div>
                ) : (
                  "Identify Bird"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage