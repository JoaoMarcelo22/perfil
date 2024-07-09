"use client"

import { duoData } from '@/api/axiosData';
import * as S from './styles'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Idiomas =()=>{
  const [elements, setElements] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await duoData(); // Faz a requisição
            setElements(response); // Define os elementos no estado
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            // Lógica para lidar com erros, se necessário
        }
    };

    fetchData(); // Chama a função de busca de dados ao montar o componente
}, []);
  return(
        <S.Central>
            <S.Title>Idiomas</S.Title>
            <S.Text>A1 - Inglês</S.Text>
            <h1>Elementos Extraídos:</h1>
            <ul>
                {elements.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </S.Central>
  );
}
export default Idiomas;
