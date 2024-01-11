import Vehicles from './components/Vehicles'
import sedanLogo from './assets/icon-sedans.svg'
import suvLogo from './assets/icon-suvs.svg'
import luxuryLogo from './assets/icon-luxury.svg'



function App() {

  return (
    <>
      <div className="min-h-screen min-w-screen bg-cover bg-veryLightGray overflow-hidden flex justify-center items-center flex-col md:flex-row py-10 ">
        <Vehicles
          logo={sedanLogo}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          bgColor="bg-brightOrange" 
          borderType="md:rounded-l-md"
          borderTypeMobile="rounded-t-md"
          hoverColor="hover:bg-brightOrange"
          textColor="text-brightOrange"
        />
        <Vehicles
          logo={suvLogo}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          bgColor="bg-darkCyan" 
          borderType="rounded-none"
          borderTypeMobile="rounded-none"
          hoverColor="hover:bg-darkCyan"
          textColor="text-darkCyan"
        />
        <Vehicles
          logo={luxuryLogo}
          title="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          bgColor="bg-veryDarkCyan" 
          borderType="md:rounded-r-md"
          borderTypeMobile="rounded-b-md"
          hoverColor="hover:bg-veryDarkCyan"
          textColor="text-veryDarkCyan"
        />
      </div>
    </>
  )
}

export default App
