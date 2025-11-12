import { useState } from "react";
import { Play, X } from "lucide-react";

const testimonialVideos = [
  {
    id: 1,
    title: "Transformação Financeira - Família Silva",
    category: "Pais",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Como o SAFE Kids mudou a vida financeira da nossa família",
  },
  {
    id: 2,
    title: "De Endividado a Investidor",
    category: "Aluno",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Minha jornada no Finanças em Foco",
  },
  {
    id: 3,
    title: "Educação Financeira desde Cedo",
    category: "Pais",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "O impacto do SAFE Kids na vida do meu filho",
  },
  {
    id: 4,
    title: "Impacto na Empresa",
    category: "Empresa",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Como o SAFE Company transformou nossa equipe",
  },
  {
    id: 5,
    title: "Conquistando a Liberdade Financeira",
    category: "Aluno",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Minha jornada no Rumo à Liberdade",
  },
  {
    id: 6,
    title: "Criando Filhos Financeiramente Inteligentes",
    category: "Família",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Nossa experiência com o SAFE Kids",
  },
];

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof testimonialVideos[0] | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", "Aluno", "Pais", "Família", "Empresa"];

  const filteredVideos = filter === "Todos" 
    ? testimonialVideos 
    : testimonialVideos.filter(video => video.category === filter);

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            SAFE <span className="text-accent">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Histórias reais de transformação e impacto na vida de nossos alunos, famílias e empresas
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-accent text-accent-foreground shadow-gold"
                    : "bg-secondary text-foreground hover:bg-accent/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-gold transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 bg-card">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-3">
                    {video.category}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                aria-label="Fechar vídeo"
              >
                <X size={32} />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-3">
                  {selectedVideo.category}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-white/80">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
