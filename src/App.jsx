import Vehicles from './components/Vehicles'
import { vehiclesData } from './Data'

function App() {

  return (
    <>
      <div className="min-h-screen min-w-screen bg-cover bg-veryLightGray overflow-hidden flex justify-center items-center flex-col md:flex-row py-10 ">
        {vehiclesData.map((vehicle) => {
          return <Vehicles key={vehicle.id} {...vehicle} />;
        })}
      </div>
    </>
  )
}

export default App
