const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-115"
      style={{
        backgroundImage: "url('/banner-photo.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl">
          Learn from industry experts and build your future with SkillSphere
        </p>

      </div>
    </div>
  );
};

export default Banner;