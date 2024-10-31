/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'

export default function Navegacion() {
    return (
        <nav className='flex flex-col gap-1 md:flex-row lg:flex-row'>
            <Link to={"/"}>
                <button className='m-2 w-40 p-2 rounded-lg text-lg 
                bg-gradient-to-r from-yellow-300 to-orange-600
                hover:bg-gradient-to-t hover:from-orange-400 hover:to-yellow-600
                hover:opacity-70 transition-all duration-500 hover:text-white
                '>Inicio</button>
            </Link>
            <Link to={"/favorites"}>
                <button className='m-2 w-40 p-2 rounded-lg text-lg 
                bg-gradient-to-r from-yellow-300 to-orange-600
                hover:bg-gradient-to-t hover:from-orange-400 hover:to-yellow-600
                hover:opacity-70 transition-all duration-500 hover:text-white'>Favoritos</button>
            </Link>
        </nav>
    )
}
