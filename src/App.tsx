import React from 'react';
import { Heart, PlayCircle } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Ganga Aarti at Mahakumbh",
    thumbnail: "https://images.unsplash.com/photo-1599289392410-bcbc1e2b4be2?auto=format&fit=crop&q=80&w=800",
    url: "https://www.youtube.com/shorts/23f_QCQiYRs"
  },
  {
    id: 2,
    title: "Spiritual Gathering at Sangam",
    thumbnail: "https://images.unsplash.com/photo-1583391733956-6c78dd99de2f?auto=format&fit=crop&q=80&w=800",
    url: "https://www.youtube.com/watch?v=VUev_TjkwjQ"
  },
  {
    id: 3,
    title: "Sacred Rituals of Mahakumbh",
    thumbnail: "https://images.unsplash.com/photo-1584721901453-0a3748861032?auto=format&fit=crop&q=80&w=800",
    url: "https://www.youtube.com/watch?v=hNxXNb8r22E"
  }
];

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Mahakumbh 2024</h1>
          <p className="text-center mt-2">Experience the Divine Gathering</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => setSelectedVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="p-4 text-lg font-medium">{video.title}</h3>
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
              Support the Mahakumbh 2024 gathering by donating to the cause.Starting with 10 Rs
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./images/mahakumbh.jpeg"
              alt="10 Rs Donation QR Code"
              className="w-48 h-48 object-cover mb-4 rounded-lg shadow-md"
            />
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
              Donate Now for Seva
            </button>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden">
            <iframe
              src={selectedVideo.url}
              title={selectedVideo.title}
              className="w-full aspect-video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;