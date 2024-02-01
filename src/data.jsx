import sedanLogo from './assets/icon-sedans.svg'
import suvLogo from './assets/icon-suvs.svg'
import luxuryLogo from './assets/icon-luxury.svg'

export const vehiclesData = [
  {
    id: 1,
    logo: sedanLogo ,
    title: "SEDANS",
    description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bgColor: "bg-brightOrange",
    borderType: "md:rounded-l-md",
    borderTypeMobile: "rounded-t-md",
    hoverColor: "hover:bg-brightOrange",
    textColor: "text-brightOrange",
  },
  {
    id: 2,
    logo:  suvLogo,
    title: "SUVS",
    description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: "bg-darkCyan",
    borderType: "rounded-none",
    borderTypeMobile: "rounded-none",
    hoverColor: "hover:bg-darkCyan",
    textColor: "text-darkCyan",
  },
  {
    id: 3,
    logo: luxuryLogo,
    title:"LUXURY",
    description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor:"bg-veryDarkCyan",
    borderType:"md:rounded-r-md",
    borderTypeMobile:"rounded-b-md",
    hoverColor:"hover:bg-veryDarkCyan",
    textColor:"text-veryDarkCyan",
  },
];