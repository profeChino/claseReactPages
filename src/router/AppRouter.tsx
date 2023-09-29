import AboutPage from "../pages/AboutPage"
import ContentPage from "../pages/ContentPage"
import HomePage from "../pages/HomePage"
import Navbar from "./Navbar"
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return <> 
            <Navbar/>
            <Routes>
                <Route path="/*" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/content" element={<ContentPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
         </>
}

export default AppRouter
