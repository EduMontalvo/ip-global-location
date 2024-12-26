import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";

export default function Layout() {

    const  FromLocalStorage = useAppStore((state) => state.FromLocalStorage)

    useEffect( () => {
        FromLocalStorage()
    },[])

    return (
        <>
            <Header />
            <main className="bg-zinc-800 flex flex-col w-full">
                <div className="flex-grow">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}
