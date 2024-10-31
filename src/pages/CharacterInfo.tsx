/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import ModalCharacter from "../components/ModalCharacter";
import { Character } from "../types";
import { getCharactersbyID } from "../services/narutoServices";
import { useParams } from "react-router";


export default function CharacterInfo() {

    const { id } = useParams<{ id: string }>();
    const characterId = Number(id);
    const [character, setCharacter] = useState<Character>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const axiosCharacters = async () => {
            try {
                const result = await getCharactersbyID(characterId)
                console.log(characterId);
                
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
        <>
            <div className="bg-gradient-to-t from-slate-300 m ">
                <h1 className="text-center p-10 font-black text-3xl uppercase hover:text-orange-400  duration-500 underline underline-offset-8">Te presento a {character?.name}!</h1>
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <div className="spinner-border animate-spin inline-block w-24 h-24 border-8 rounded-full border-t-orange-500"></div>
                    </div>
                ) : (
                        <ModalCharacter
                            key={character?.id}
                            character={character as Character}
                        />
                )}
            </div>
        </>
    )
}
