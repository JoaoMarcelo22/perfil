"use client"

import * as S from './styles';
import { axiosData } from '@/api/axiosData';
import ExperienciaComponent from '@/components/ExperienciaComponent';
import { useEffect, useState } from 'react';

interface ExperienciaItem {
  name: string;
  cargo: string;
  periodo: string;
}

const Experiencia = () => {
  const [data, setData] = useState<{ experiencia: ExperienciaItem[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axiosData();
        setData(result);
      } catch (e) {
          console.log(e,"Erro 1")
          setError(e instanceof Error ? e.message : "Erro generico");
      }
    };

    getData();
  }, []);

  if (error) return <div>Erro: {error}</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <S.Main>
      <S.ContainerText>
        <S.Title>Experiencia</S.Title>
        {data.experiencia.map((item, index) => (
          <ExperienciaComponent
            key={index}
            name={item.name}
            cargo={item.cargo}
            periodo={item.periodo}
          />
        ))}
      </S.ContainerText>
    </S.Main>
  );
};

export default Experiencia;
