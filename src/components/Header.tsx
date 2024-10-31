/* eslint-disable react/react-in-jsx-scope */
import Navegacion from "./Navegacion";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export default function Header() {


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    return (
        <header className="p-6 bg-black">
            <div className=" p-6 m-auto flex flex-col space-y-5 lg:flex-row justify-center lg:justify-between items-center">
                <button className="border-none">
                    <img className="w-auto h-28 rounded-lg" src="../public/logoNaruto2.jpg" alt="Logo Naruto" />
                </button>

                <div>
                    <Navegacion />
                </div>

                <div className="w-4/5 lg:w-2/6 flex flex-col rounded-sm">
                    <Paper
                        component="form"
                        sx={{ p: '4px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Busca un personaje!"
                            onChange={handleSearchChange}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </Paper>
                </div>
            </div>
        </header>
    )
}
