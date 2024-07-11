import axios from "axios";

export const axiosData = async ()=>{
    try{
        const response = await axios.get('https://raw.githubusercontent.com/JoaoMarcelo22/perfil/main/public/data/data.json')
        return response.data;
    }   catch (error){
        throw new Error("Erro ao buscar dados")
    };
};
export const duoData = async ()=>{
    try{
        const response = await axios.get('http://localhost:3050/scrape');
        console.log('dado recebido', response.data)
        return response.data;
    }   catch (error){
        console.log('dado recebido', error)
        throw new Error("Erro ao buscar dados")
    };
};