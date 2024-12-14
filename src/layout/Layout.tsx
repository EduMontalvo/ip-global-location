import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main className="container bg-zinc-800">
            <Outlet/>
        </main>
    )
}
