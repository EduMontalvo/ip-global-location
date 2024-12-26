import AlertMessage from "../components/AlertMessage"
import Card from "../components/Card"
import { useAppStore } from "../store/useAppStore"

export default function History() {

  const historyArray = useAppStore((state) => state.historyArray)
  const deleteItemMessage = useAppStore((state) => state.deleteItemMessage)

  return (
    <div>
      <AlertMessage Mensaje={deleteItemMessage? 'Se elimino del historial' : ''} changeIcon={'error'} open={deleteItemMessage? (true) : (false)}/>
      {historyArray.length ?
        (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
          {historyArray.map((item) => (
            <Card key={item.ip} item={item} />
          ))}
        </div>)
        :
        (<div className="w-4/5 mx-auto mt-16 h-full">
          <h1 className="font-bold text-2xl text-center text-white">Aún no tienes ningun analisis en el historial</h1>
          <p className="text-center py-8 text-white sm:font-extralight">Puedes realizar uno en la sección de busqueda.</p>
        </div>)}
    </div>
  )
}
