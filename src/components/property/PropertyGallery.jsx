// src/components/property/PropertyGallery.jsx
export default function PropertyGallery({ images }) {
  return (
    <div className="grid grid-cols-4 gap-2 h-[300px] md:h-[500px]">
      {/* Image principale */}
      <div className="col-span-4 md:col-span-3 h-full">
        <img 
          src={images[0]} 
          className="w-full h-full object-cover rounded-2xl" 
          alt="Vue principale"
        />
      </div>
      {/* Miniatures sur desktop */}
      <div className="hidden md:flex flex-col gap-2 h-full">
        {images.slice(1, 4).map((img, idx) => (
          <div key={idx} className="flex-1">
            <img 
              src={img} 
              className="w-full h-full object-cover rounded-xl hover:opacity-80 cursor-pointer" 
              alt="Vue secondaire"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
