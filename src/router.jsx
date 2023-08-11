import { Route, Routes } from 'react-router-dom'
import Calculator from './components/Calculator'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="calculator" element={<Calculator />} />
        </Routes>
    )
}

export default Router