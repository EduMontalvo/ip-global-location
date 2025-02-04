import { EnvironmentOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (

        <div className=" w-full bg-zinc-800">
            <div className="w-full flex justify-center py-11">
                <hr className="border-gray-400 w-4/5 md:w-full" />
            </div>
            <div className="flex justify-between items-center w-4/5 m-auto md:w-4/5">
                <div className="flex flex-col md:w-full md:flex-row md:justify-between md:items-center">
                    <h1 className="text-2xl text-white"><EnvironmentOutlined /> IP Location</h1>
                    <div className="flex flex-col gap-2 mt-10 mb-5 md:justify-center">
                        <NavLink to={"/"} className="text-zinc-500 font-semibold hover:text-white">Home</NavLink>
                        <NavLink to={"/history"} className="text-zinc-500 font-semibold hover:text-white">History</NavLink>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <h3 className="text-zinc-500 text-xs mb-4 mt-8">&copy; 2024, All rights reserved - Created by <a href="https://github.com/edumontalvo" className="text-zinc-500 font-semibold hover:text-white">Edu Montalvo</a></h3>
            </div>
        </div>
    )
}
