"use client"

import { duoData } from '@/api/axiosData';
import * as S from './styles'
import { useEffect, useState } from 'react';

const Idiomas =()=>{
  const [elements, setElements] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await duoData();
        console.log('Response from duoData:', response); // Adicione este log
        if (response.elements) {
          setElements(response.elements); // Certifique-se de acessar 'elements'
        } else {
          setError('Dados não encontrados na resposta');
        }
      } catch (error) {
        setError('Erro ao buscar dados');
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);
 console.log(elements[1])
  return(
        <S.Central>
            <S.Title>Idiomas</S.Title>
            <S.Text>A1 - Inglês</S.Text>
        
        </S.Central>
  );
}
export default Idiomas;
