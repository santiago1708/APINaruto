/* eslint-disable react/react-in-jsx-scope */
import { Carousel } from "antd";
import { Character } from "../types";
const contentStyle: React.CSSProperties = {
    height: '300px', // Aumenté la altura para que se vean mejor las imágenes
    textAlign: 'center',
    background: '#364d79',
};
type CharacterCardProps = {
    character: Character;
}

export default function ModalCharacter({ character }: CharacterCardProps) {
    return (
        <div key={character.id} className=" bg-white rounded-lg flex flex-col items-center shadow-2xl p-5 w-3/4 lg:w-3/5 m-auto">
            <Carousel arrows dotPosition="left" infinite={true} autoplay style={{ backgroundColor: 'black', width: '80%', height: '80%', margin: 'auto', borderRadius: '10px' }}>
                {character.images && character.images.length > 0 ? (
                    character.images.map((image, index) => (
                        <div key={index} style={contentStyle}>
                            <img src={image} alt={character.name} style={{ width: '80%', height: '80%', margin: 'auto' }} />
                        </div>
                    ))
                ) : (
                    <div style={contentStyle}>
                        <p>No hay imágenes disponibles</p>
                    </div>
                )}
            </Carousel>
            <div className=" lg:w-2/3"> {/* Informacion */}
                <div className="flex flex-col  lg:flex-row justify-around items-center p-4 space-y-8 lg:space-x-16">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Datos personales</h2>
                        <p><span className="font-semibold">Clan perteneciente:</span> {character.personal.clan ? character.personal.clan : 'Desconocido'}</p>
                        <p><span className="font-semibold">Tipo de sangre:</span> {character.personal.bloodType ? character.personal.bloodType : 'Desconocido'}</p>
                        <p><span className="font-semibold">Genero:</span> {character.personal.sex ? character.personal.sex : 'Desconocido'}</p>
                        <p><span className="font-semibold">Edad Parte I: </span> {character.personal.age?.["Part I"] ? character.personal.age?.["Part I"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Edad Parte II: </span> {character.personal.age?.["Part II"] ? character.personal.age?.["Part II"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Fecha de cumpleaños: </span>{character.personal.birthdate ? character.personal.birthdate : 'Desconocido'}</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-center mb-2">Herramientas</p>
                        {character.tools?.length ? (
                            character.tools.map((herramienta) => (
                                <li
                                    className="leading-tight list-image-[url(../public/marca-de-verificacion.png)]"
                                    key={herramienta}
                                >
                                    {herramienta || 'No contiene'}
                                </li>
                            ))
                        ) : (
                            <li className="leading-tight list-image-[url(../public/marca-de-verificacion.png)] ">No contiene herramientas</li>
                        )}
                    </div>
                </div>
                <div className="flex flex-col  lg:flex-row justify-around items-center p-4 space-y-8 lg:space-x-16">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Familia</h2>
                        <p><span className="font-semibold">Padre:</span> {character.family.father ? character.family.father : 'Desconocido'}</p>
                        <p><span className="font-semibold">Madre:</span> {character.family.mother ? character.family.mother : 'Desconocido'}</p>
                        <p><span className="font-semibold">Padrino:</span> {character.family.godfather ? character.family.godfather : 'Desconocido'}</p>
                        <p><span className="font-semibold">Esposa: </span> {character.family.wife ? character.family.wife : 'Desconocida'}</p>
                        <p><span className="font-semibold">Hijo: </span> {character.family.son ? character.family.son : 'Desconocido'}</p>
                        <p><span className="font-semibold">Hija: </span>{character.family.daughter ? character.family.daughter : 'Desconocido'}</p>
                        <p><span className="font-semibold">Hermano: </span>{character.family.brother ? character.family.brother : 'Desconocido'}</p>
                        <p><span className="font-semibold">Abuela: </span>{character.family.grandmother ? character.family.grandmother : 'Desconocido'}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center mb-2">Rango</h2>
                        <p><span className="font-semibold">Período en blanco:</span> {character.rank?.ninjaRank["Blank Period"] ? character.rank?.ninjaRank["Blank Period"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Parte I:</span> {character.rank?.ninjaRank["Part I"] ? character.rank?.ninjaRank["Part I"] : 'Desconocido'}</p>
                        <p><span className="font-semibold">Parte II:</span> {character.rank?.ninjaRank["Part II"] ? character.rank?.ninjaRank["Part II"] : 'Desconocido'}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
