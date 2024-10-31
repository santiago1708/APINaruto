import axios from "axios"

const url = 'https://dattebayo-api.onrender.com/characters'

export const getCharacters = async() => {
    try {
        const response = await axios.get(url)

        if(response.status === 200){
            console.log(response.data.characters)
            return (response.data.characters)
        }
    } catch (error) {
        console.log(error);
    }
}

export const getCharactersbyID = async(id : number) => {
    try {
        const response = await axios.get(`${url}/${id}`)

        if(response.status === 200){
            console.log(response.data)
            return (response.data)
        }
    } catch (error) {
        console.log(error);
    }
}

