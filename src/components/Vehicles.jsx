const Vehicles = ({ logo, title, description, bgColor, borderType, borderTypeMobile, hoverColor, textColor }) => {
  return (
    <div className={`lg:w-[250px] lg:h-[400px] w-[300px] h-[375px] ${bgColor} ${borderType} ${borderTypeMobile} md:rounded-none flex-col p-9 space-y-5 relative `} >
      <img src={logo} className="w-11 h-9" alt="vehicle logo" />
      <h1 className="text-white font-bigShoulders font-bold text-3xl">{title}</h1>
      <p className="text-transparentWhite font-lexend text-sm">{description}</p>
      <button className={`bg-white ${textColor} ${hoverColor} hover:text-white text-sm border-2 border-white rounded-full px-4 py-2 transition-colors duration-300 font-lexend absolute bottom-9 left-9`}>
        Learn More
      </button>
    </div>
  );
};

export default Vehicles;
