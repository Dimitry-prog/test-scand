import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout