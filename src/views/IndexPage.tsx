import { ArrowRightOutlined, LoginOutlined } from "@ant-design/icons";
import Header from "../components/Header";

export default function IndexPage() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-4 w-4/5 m-auto">
                <div className="text-white flex flex-col gap-4">
                    <h1 className="text-2xl">Descubre tu ip publica, ubicacion y geolocalizacion gratuita</h1>
                    <p className="text-sm">Obtener tu ip publica te da acceso a muchas ventajas como la localizacion y la geolocalizacion de tu dispositivo.Ademas tambien podras probar y validar si tu servicio vpn esta activo y funcionando.</p>
                </div>
                <div className="flex justify-around items-center">
                    <button className='bg-yellow-500 px-4 py-2 font-semibold rounded-md' >Buscar mi ip <ArrowRightOutlined /></button>
                    <button className='border-2 border-yellow-500 text-yellow-500 px-4 py-2 font-semibold rounded-md' >Buscar otro ip <LoginOutlined /></button>
                </div>
            </div>
        </>
    )
}
