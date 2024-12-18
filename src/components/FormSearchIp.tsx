import { useState } from "react"
import { useAppStore } from "../store/useAppStore"
import { PushpinOutlined } from "@ant-design/icons"

export default function FormSearchIp() {

    const [valueInput, setValueInput] = useState('')

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
    }

    const searchIpData = useAppStore((state) => state.searchIpData)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchIpData(valueInput)
        setValueInput('')
    }


    return (
        <div className="bg-cover bg-center w-4/5 m-auto h-96 flex flex-col justify-center items-center gap-10 bg-fixed mt-10" style={{ backgroundImage: "url('https://images.pexels.com/photos/1597776/pexels-photo-1597776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
            <h3 className="text-white px-2 text-2xl text-center font-semibold">Verifica siempre la estructura de la direccion ip que deseas buscar. Como veras lineas abajo</h3>
            <form className="flex justify-center gap-2" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChangeInput} value={valueInput} className="rounded-md w-2/4 px-2" placeholder="Ej: 237.84.2.178"/>
                <button className="bg-yellow-500 px-4 py-2 font-semibold rounded-md">Buscar &nbsp;<PushpinOutlined /></button>
            </form>
        </div>
    )
}

/* */

