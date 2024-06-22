import axios from "axios";

export const axiosData = async ()=>{
    try{
        const response = await axios.get('https://raw.githubusercontent.com/JoaoMarcelo22/perfil/main/public/data/data.json')
        return response.data;
    }   catch (error){
        throw new Error("Erro ao buscar dados")
    };
};