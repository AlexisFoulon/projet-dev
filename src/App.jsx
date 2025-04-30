import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom"
import NavBar from "./componnents/NavBar"
import Footer from "./componnents/footer"
import Home from './pages/Home'
import Services from "./pages/services"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Mentions from "./pages/mentions"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement:<PageError/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: 'portfolio',
                element: <Portfolio/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'mentions',
                element: <Mentions/>
            },
        ]
    }
])


// En cas d'erreur, la page affichera cette chaîne de charactère ainsi que le sujet  de l'erreur
function PageError (){
    const error = useRouteError()
    return(
    <>
        <h1>Une erreur est survenue </h1>
        <p>
            {error?.error?.toString() ?? error?.toString()}
        </p>
    </>
)
}

function Root (){
    return (
        <>
            <NavBar/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}

function App() {
    return <RouterProvider router={router} />

}

export default App;