import { ArrowRightOutlined, LoginOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";
import FormSearchIp from "../components/FormSearchIp";

export default function IndexPage() {

    const setIp = useAppStore((state) => state.setIp)

    const searchIpData = useAppStore((state) => state.searchIpData)
    const ip = useAppStore((state) => state.ip)
    const resultIpData = useAppStore((state) => state.resultIpData)
    const visibility = useAppStore((state) => state.visibility)
    const activeInput = useAppStore((state) => state.activeInput)
    const stateInput = useAppStore((state) => state.stateInput)

    useEffect(() => {
        setIp()
    }, [])

    const handleClickFindMyIp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        searchIpData(ip)
    }
    const handleClickFindOtherIp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        activeInput()
    }


    console.log(resultIpData);

    return (
        <>
            <div
                className="bg-contain bg-no-repeat bg-center w-4/5 m-auto my-5 rounded-xl h-56 bg-yellow-400"
                style={{ backgroundImage: "url('https://svgsilh.com/svg/2750411.svg')" }}
            >
            </div>
            <div className="flex flex-col gap-4 w-4/5 m-auto">
                <div className="text-white flex flex-col gap-4">
                    <h1 className="text-2xl">Descubre tu ip publica, ubicacion y geolocalizacion gratuita</h1>
                    <p className="text-sm">Obtener tu ip publica te da acceso a muchas ventajas como la localizacion y la geolocalizacion de tu dispositivo.Ademas tambien podras probar y validar si tu servicio vpn esta activo y funcionando.</p>
                </div>
                <div className="flex justify-around items-center mb-4">
                    <button className={visibility ? 'bg-yellow-700 px-4 py-2.5 font-semibold rounded-md' : 'bg-yellow-500 px-4 py-2.5 font-semibold rounded-md'} disabled={visibility} onClick={handleClickFindMyIp}>Buscar mi ip <ArrowRightOutlined /></button>
                    <button className='bg-gray-700 border-2 border-yellow-500 text-yellow-500 px-4 py-2 font-semibold rounded-md' onClick={handleClickFindOtherIp}>Buscar otro ip <LoginOutlined /></button>
                </div>
            </div>
            {stateInput ? (<FormSearchIp />) : (<></>)}
            {visibility ?
                (<>
                    <div
                        className="bg-cover bg-center w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96"
                        style={{ backgroundImage: "url('https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
                    >
                        <div className="flex flex-col justify-center opacity-50 bg-black border-2 border-white  rounded-xl p-4 h-4/6 w-11/12">
                            <h1 className="text-white font-bold">Informacion de tu ip publica</h1>
                            <div>
                                <p className="text-zinc-300">Ip publica :</p>
                                <p className="text-2xl font-semibold text-white inline my-10">{resultIpData.ip}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">inf. IP :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.type}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Region :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.continent_name} - {resultIpData.continent_code}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Pais :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.country_name}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Ciudad :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.location.capital}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-cover bg-center w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96"
                        style={{ backgroundImage: "url('https://images.pexels.com/photos/593159/pexels-photo-593159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
                    >
                        <div className="flex flex-col justify-center opacity-80 bg-black border-2 border-white  rounded-xl p-4 h-4/6 w-11/12">
                            <h1 className="text-white font-bold">Informacion de Ubicación</h1>
                            <div>
                                <p className="text-zinc-300">Ciudad :</p>
                                <p className="text-2xl font-semibold text-white inline my-10">{resultIpData.location.capital}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Codigo de llamada :</p> <p className="font-semibold text-zinc-300 inline text-sm">+{resultIpData.location.calling_code}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Abreviatura :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.location.country_flag_emoji}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Longitud :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.longitude}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Latitud :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.latitude}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-cover bg-center w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96"
                        style={{ backgroundImage: "url('https://images.pexels.com/photos/29149883/pexels-photo-29149883/free-photo-of-detalle-de-arquitectura-geometrica-moderna-abstracta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
                    >
                        <div className="flex flex-col justify-center opacity-80 bg-black border-2 border-white  rounded-xl p-4 h-4/6 w-11/12">
                            <h1 className="text-white font-bold">Informacion Relevante</h1>
                            <div className="flex items-center my-2">
                                <p className="text-white">Bandera:</p>
                                <div className="w-10 h-10 border-2 border-white rounded-full  flex items-center mx-3 overflow-hidden">
                                    <img src={resultIpData.location.country_flag} alt="Pais" className="object-cover h-10 w-10" />
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Idioma :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.location.languages[0].native}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Language :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.location.languages[0].name}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold inline text-sm">Codigo :</p> <p className="font-semibold text-zinc-300 inline text-sm">{resultIpData.location.languages[0].code}</p>
                            </div>
                        </div>
                    </div>
                </>) :
                (<></>)
            }
        </>
    )
}
/* w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96 */