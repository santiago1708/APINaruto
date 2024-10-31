/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePages from "./pages/HomePages"
import Favorites from "./pages/Favorites"
import CharacterInfo from "./pages/CharacterInfo"

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div >
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/character/:id" element={<CharacterInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
