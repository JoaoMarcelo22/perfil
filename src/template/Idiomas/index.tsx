"use client"

import { duoData } from '@/api/axiosData';
import * as S from './styles'
import { useEffect, useState } from 'react';
import SubTitle from '@/components/atoms/SubTitle/index';
import Linha from '@/components/atoms/Linha/index';

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
    <>
        <S.Central>
            <SubTitle text='Idiomas'/>
            <S.Text>A1hg - Inglês</S.Text>
        </S.Central>
        <Linha/>
    </>
  );
}
export default Idiomas;
