import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"

const App = () => {
  const router =createBrowserRouter([
    {path : "", element : <Layout/> , children:[
      {path : "/", element : <Home/>},
      {path : "/about", element : <About/>},
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/Contact", element: <Contact/> },


    ]}
  ])
  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
