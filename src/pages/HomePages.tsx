/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react"
import { getCharacters } from "../services/narutoServices"
import { Character } from "../types"
import CharacterCard from "../components/CharactersCard"

export default function HomePages() {

    const [character, setCharacter] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const axiosCharacters = async () => {
            try {
                const result = await getCharacters()
                setCharacter(result)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        axiosCharacters()
    }, [character])


    return (
        <div className="bg-gradient-to-t from-slate-300 ">
            <h1 className="text-center p-10 font-black text-3xl uppercase">Todos nuestros personajes!</h1>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner-border animate-spin inline-block w-24 h-24 border-8 rounded-full border-t-orange-500"></div>
                </div>
            ) : (
                character.map((chara) => (
                    <CharacterCard
                        key={chara.id}
                        character={chara}
                    />
                ))
            )}
        </div>
    )
}
