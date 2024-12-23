import { ArrowRightOutlined, LoginOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";
import FormSearchIp from "../components/FormSearchIp";
import { Map } from "../components/Map";
import AlertMessage from "../components/AlertMessage";

export default function IndexPage() {

    const setIp = useAppStore((state) => state.setIp)

    const searchIpData = useAppStore((state) => state.searchIpData)
    const ip = useAppStore((state) => state.ip)
    const resultIpData = useAppStore((state) => state.resultIpData)
    const visibility = useAppStore((state) => state.visibility)
    const activeInput = useAppStore((state) => state.activeInput)
    const stateInput = useAppStore((state) => state.stateInput)
    const addToHistory = useAppStore((state) => state.addToHistory)
    const disableButton = useAppStore((state) => state.disableButton)
    const isSameIp = useAppStore((state) => state.isSameIp)
    const repeatItemMessage = useAppStore((state) => state.repeatItemMessage)
    const AddItemMessage = useAppStore((state) => state.AddItemMessage)

    useEffect(() => {
        setIp()
    }, [])


    const handleClickFindMyIp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        isSameIp()
        searchIpData(ip)
    }
    const handleClickFindOtherIp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        activeInput()
    }


    return (
        <>
            <AlertMessage Mensaje={AddItemMessage ? 'Se agrego correctamente al historial' : repeatItemMessage ? 'Ya se encuentra en el historial' : ''} open={AddItemMessage || repeatItemMessage} changeIcon={AddItemMessage ? 'success' : repeatItemMessage ? 'warning' : ''} />

            <div className="flex flex-col items-center m-auto w-4/5 gap-4 md:flex-row  md:w-11/12 md:justify-center md:h-96 md:mt-10 ">
                <div
                    className="bg-contain bg-no-repeat bg-center my-5 rounded-xl h-56 md:h-60 md:w-60 md:rounded-full bg-yellow-400 w-full  md:order-2"
                    style={{ backgroundImage: "url('https://svgsilh.com/svg/2750411.svg')" }}
                >
                </div>
                <div className="text-white flex flex-col gap-4 md:w-3/5 md:order-1 md:px-4">
                    <h2 className="text-2xl">Descubre tu ip publica, ubicacion y geolocalizacion gratuita</h2>
                    <p className="text-sm pb-8">Obtener tu ip publica te da acceso a muchas ventajas como la localizacion y la geolocalizacion de tu dispositivo.Ademas tambien podras probar y validar si tu servicio vpn esta activo y funcionando.</p>
                    <div className="flex justify-around items-center mb-4 w-full">
                        <button className={disableButton ? 'bg-yellow-700 px-4 py-2.5 font-semibold rounded-md md:w-5/12' : 'bg-yellow-500 px-4 py-2.5 font-semibold rounded-md md:w-5/12'} disabled={disableButton} onClick={handleClickFindMyIp}>Buscar mi ip <ArrowRightOutlined /></button>
                        <button className='bg-gray-700 border-2 border-yellow-500 text-yellow-500 px-4 py-2 font-semibold rounded-md md:w-5/12' onClick={handleClickFindOtherIp}>Buscar otro ip <LoginOutlined /></button>
                    </div>
                </div>
                {/* md:w-5/12 */}
            </div>
            {stateInput ? (<FormSearchIp />) : (<></>)}
            {visibility ?
                (<>
                    <div className="grid grid-cols-1 py-10 md:grid-cols-2 md:grid-rows-3 md:gap-y-10 w-11/12 mx-auto ">
                        <div
                            className="bg-cover bg-center w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96 order-1"
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
                        >
                            <div className="flex flex-col justify-center opacity-50 bg-black border-2 border-white  rounded-xl p-4 h-4/6 w-11/12">
                                <h2 className="text-white font-bold">Informacion de tu ip publica</h2>
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
                            className="bg-cover bg-center md:row-span-1 md:col-span-2 md:w-5/12 md:m-auto w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96 order-3"
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/593159/pexels-photo-593159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
                        >
                            <div className="flex flex-col justify-center opacity-80 bg-black border-2 border-white  rounded-xl p-4 h-4/6 w-11/12">
                                <h2 className="text-white font-bold">Informacion de Ubicación</h2>
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
                            className="bg-cover bg-center w-4/5 m-auto mt-10 flex flex-col items-center justify-center gap-4  rounded-xl h-96 order-2"
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/29149883/pexels-photo-29149883/free-photo-of-detalle-de-arquitectura-geometrica-moderna-abstracta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
                        >
                            <div className="flex flex-col justify-center opacity-80 bg-black border-2 border-white  rounded-xl p-4 h-4/6 w-11/12">
                                <h2 className="text-white font-bold">Informacion Relevante</h2>
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
                        <div className="w-4/5 m-auto mt-10 md:row-span-1 md:col-span-2 md:w-11/12 order-4">
                            <div className="h-96 w-full z-0 relative">
                                <Map latitude={resultIpData.latitude} longitude={resultIpData.longitude} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-8">
                        <h3 className="text-white font-extralight"> Guardar en tu historial de busqueda?  </h3>
                        <div className="w-4/5 m-auto mt-5 md:w-2/12">
                            <button className="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded w-full" onClick={() => addToHistory(resultIpData)}>Guardar</button>
                        </div>
                    </div>
                </>) :
                (<></>)
            }
            <div className="w-4/5 m-auto mt-10 p-2 flex flex-col">
                <h2 className="text-white text-2xl font-bold py-4">¿Qué es una Dirección IP?</h2>
                <p className="text-white">
                    Una dirección IP (Protocolo de Internet) es un número único que identifica a cada dispositivo conectado a una red de internet. Es como la "dirección" de tu dispositivo, permitiendo que los datos lleguen a su destino. Existen dos tipos principales de direcciones IP: IPv4 (formato numérico de 32 bits) e IPv6 (más avanzado, con un formato de 128 bits). Las direcciones IP se asignan a los dispositivos ya sea de forma estática (fija) o dinámica (cambia con el tiempo).
                </p>
                <h2 className="text-white text-2xl font-bold py-4">¿Qué es una VPN y cómo se relaciona con la Dirección IP?</h2>
                <p className="text-white">
                    Una VPN (Red Privada Virtual) es una herramienta que permite a los usuarios crear una conexión segura y encriptada a través de una red menos segura, como Internet. Al usar una VPN, tu dirección IP real se oculta y se reemplaza por la dirección IP del servidor VPN al que te conectas. Esto no solo proporciona privacidad y seguridad, sino que también permite acceder a contenido restringido geográficamente.
                </p>
                <h2 className="text-white text-2xl font-bold py-4">Conceptos Adicionales</h2>
                <h2 className="text-white text-2xl font-bold py-4">Dirección IP Pública y Privada:</h2>
                <p className="text-white">
                    La dirección IP pública es la que se asigna a tu red por tu proveedor de internet, visible desde cualquier parte del mundo. Por otro lado, la IP privada es la que se asigna a los dispositivos dentro de una red local (como en tu hogar u oficina) y no es accesible desde el exterior sin el uso de una dirección pública.
                </p>
                <h2 className="text-white text-2xl font-bold py-4">Geolocalización de IP:</h2>
                <p className="text-white">
                    La geolocalización de una IP es el proceso mediante el cual se determina la ubicación física de un dispositivo a partir de su dirección IP. Esto permite saber desde qué país, ciudad e incluso región se está conectando un usuario, aunque no siempre es 100% preciso debido a diversos factores como el uso de VPNs o proxies.
                </p>
            </div>
        </>
    )
}
