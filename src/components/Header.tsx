import { CloseOutlined, EnvironmentOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

  const [menuOn, setMenuOn] = useState(false)

  const showMenu = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault()
    setMenuOn(true)
  }
  const hiddenMenu = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault()
    setMenuOn(false)
  }

  return (
    <>
      <div className=" w-full bg-zinc-900 sticky top-0 z-40">
        <div className="flex justify-between pt-10 w-4/5 m-auto py-4">
          <h1 className="text-3xl text-white"><EnvironmentOutlined /> IP Location</h1>
          <button className=""><MenuOutlined className={!menuOn ? ('text-2xl text-white md:hidden') : ('hidden')} onClick={showMenu} /></button>
          <div className={menuOn ? ('flex flex-col gap-2 md:flex md:w-1/5 md:justify-between') : ('hidden md:flex md:w-1/5 md:justify-between')}>
            <button className='text-white text-2xl md:hidden ' onClick={hiddenMenu}><CloseOutlined /></button>
            <NavLink className='text-zinc-500 hover:text-white md:text-lg' to={'/'}>Home</NavLink>
            <NavLink className='text-zinc-500 hover:text-white md:text-lg' to={'/history'}>History</NavLink>
          </div>
        </div>
      </div>

    </>
  )
}
//? flex flex-col gap-2