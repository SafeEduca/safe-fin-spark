import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import safeKidsClass from "@/assets/gallery/safe-kids-class.jpg";
import classroomLecture from "@/assets/gallery/classroom-lecture.png";
import inoveClass1 from "@/assets/gallery/inove-class-1.jpg";
import inoveClass2 from "@/assets/gallery/inove-class-2.jpg";
import certificates from "@/assets/gallery/certificates.jpg";
import kidsClassroom from "@/assets/gallery/kids-classroom.jpg";
import groupPhoto from "@/assets/gallery/group-photo.jpg";
import kidsLearning from "@/assets/gallery/kids-learning.jpg";
import presentation from "@/assets/gallery/presentation.jpg";
import teamPhoto from "@/assets/gallery/team-photo.jpg";
import kidsCooperativa from "@/assets/gallery/kids-cooperativa.jpg";
import classroomSession from "@/assets/gallery/classroom-session.jpg";
import kidsGroupCelebration from "@/assets/gallery/kids-group-celebration.jpg";
import teensClassroom from "@/assets/gallery/teens-classroom.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: teamPhoto, alt: "Turma SAFE - Foto em grupo" },
    { src: presentation, alt: "Apresentação SAFE Educação Financeira" },
    { src: kidsCooperativa, alt: "Aula Cooperativa Mirim com crianças" },
    { src: classroomSession, alt: "Sessão em sala de aula SAFE Kids" },
    { src: kidsGroupCelebration, alt: "Celebração com alunos SAFE Kids" },
    { src: teensClassroom, alt: "Aula para adolescentes - Finanças em Foco" },
    { src: safeKidsClass, alt: "Aula SAFE Kids - Turma interativa" },
    { src: classroomLecture, alt: "Palestra em sala de aula" },
    { src: inoveClass1, alt: "Workshop Comportamento Financeiro" },
    { src: inoveClass2, alt: "Dinâmica em grupo" },
    { src: certificates, alt: "Entrega de certificados" },
    { src: kidsClassroom, alt: "Educação financeira para crianças" },
    { src: groupPhoto, alt: "Turma de alunos SAFE" },
    { src: kidsLearning, alt: "Crianças aprendendo finanças" },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galeria" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossa <span className="text-accent">Galeria</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja momentos especiais das nossas aulas e eventos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">
                  Ver foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
          
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-accent transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <p className="absolute bottom-4 text-white text-center">
            {images[selectedImage].alt}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
