import { Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu.jsx";

function DefaultLayout() {
    return (
        <>
            <header>
                <h2>Logo</h2>
                <MainMenu />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                copyright
            </footer>
        </>
    )
}

export default DefaultLayout