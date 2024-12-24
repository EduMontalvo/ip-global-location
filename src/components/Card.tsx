import { CloseOutlined } from "@ant-design/icons"
import { Map } from "../components/Map"
import { TypeIpResultData } from "../types"
import { useAppStore } from "../store/useAppStore"

type TypeCard = {
    item: TypeIpResultData
}

export default function Card({ item }: TypeCard) {
    const deleteFromHistory = useAppStore((state) => state.deleteFromHistory)
    return (
        <div className="w-4/5 m-auto bg-zinc-950 rounded-lg flex flex-col md:flex-row md:items-center md:justify-center md:w-full md:h-full ">
            <div className="h-56 w-full md:h-full md:w-2/3 z-0 relative">
                <Map latitude={item.latitude} longitude={item.longitude} />
            </div>
            <div className="px-4">
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
                <div className="w-full flex justify-center my-4">
                    <div className="rounded-full h-10 w-10  bg-red-600 text-center ">
                        <button className="text-white p-2" onClick={() => deleteFromHistory(item)}><CloseOutlined /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
