import { Map } from "../components/Map"
import { useAppStore } from "../store/useAppStore"

export default function History() {

  const historyArray = useAppStore((state) => state.historyArray)


  return (
    <div>
      {historyArray.map(item => (
        <div className="w-4/5 m-auto bg-zinc-950 rounded-lg">
          <div className="h-56 w-full">
            <Map latitude={item.latitude} longitude={item.longitude}/>
          </div>
          <div className="px-4 pb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 border-2 border-white rounded-full  flex items-center mx-3 overflow-hidden my-4">
                <img src={item.location.country_flag} alt="Pais" className="object-cover h-10 w-10" />
              </div>
              <p className="inline text-white text-2xl font-bold">{item.country_name}</p>
            </div>
            <p className="text-white"><strong>IP : </strong>{item.ip}</p>
            <p className="text-white"><strong>Region : </strong>{item.continent_name} - {item.continent_code}</p>
            <p className="text-white"><strong>Ciudad : </strong>{item.location.capital}</p>
            <p className="text-white"><strong>Latitud : </strong>{item.latitude}</p>
            <p className="text-white"><strong>Longitud : </strong>{item.longitude}</p>
          </div>
        </div>
      ))}
      <div className="w-4/5 mx-auto mt-16 h-full">
        <h1 className="font-bold text-2xl text-center text-white">Aún no tienes ningun analisis en el historial</h1>
        <p className="text-center py-8 text-white sm:font-extralight">Puedes realizar uno en la seccion de busqueda.</p>
      </div>
    </div>
  )
}
