"use client"

import * as S from './styles';
import { axiosData } from '@/api/axiosData';
import ExperienciaComponent from '@/components/ExperienciaComponent';
import useData from '@/services/data';
import { useEffect, useState } from 'react';

const Experiencia = () => {
  const { data, error} = useData();

  return (
    <S.Main>
      <S.ContainerText>
        <S.Title>Experiencia</S.Title>
        {data?.experiencia?.map((item, index) => (
          <ExperienciaComponent
            key={index}
            name={item.name}
            cargo={item.cargo}
            description={item.description}
            periodo={item.periodo}
          />
        ))}
      </S.ContainerText>
    </S.Main>
  );
};

export default Experiencia;
