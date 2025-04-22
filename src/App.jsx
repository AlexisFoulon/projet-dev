import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom"
import NavBar from "./componnents/NavBar"
import Home from './pages/Home'


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
                path: 'Services',
                element: <div>Services</div>
            },
            {
                path: 'Portfolio',
                element: <div>Portfolio</div>
            },
            {
                path: 'Contact',
                element: <div>Contactez-moi</div>
            },
            {
                path: 'MentionLegales',
                element: <div>Mention Légales</div>
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
        </>

    )
}

function App() {
    return <RouterProvider router={router} />

}

export default App;