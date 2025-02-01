import React from 'react';
import { Heart } from 'lucide-react';
import mahakumbhImage from './images/mahakumbh.jpeg';


const images = [
  {
    id: 1,
    title: "Ganga Aarti at Mahakumbh",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW6vVZbdG1DU8sbfbM54L6dUIJKZMnr4FqA&s"
  },
  {
    id: 2,
    title: "Spiritual Gathering at Sangam",
    url: "https://cdn4.premiumread.com/?url=https://malaymail.com/malaymail/uploads/images/2025/01/13/255358.jpg&w=1000&q=100&f=jpg&t=6"
  },
  {
    id: 3,
    title: "Sacred Rituals of Mahakumbh",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LHz_XA5x0qWDHFSgVeGKLvYjNpEQDOXgA&s"
  }
];


function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 px-4">
       Mahakumbh Darshan 2025
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Image Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-lg font-medium text-center p-4">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Donation Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <div className="text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Support Mahakumbh</h2>
            <p className="text-gray-600 mb-6">
              Support the Mahakumbh 2024 gathering by donating to the cause. Starting with 10 Rs
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={mahakumbhImage}
              alt="10 Rs Donation QR Code"
              className="w-48 h-48 object-cover mb-4 rounded-lg shadow-md"
            />
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
              Donate Now for Seva
            </button>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
