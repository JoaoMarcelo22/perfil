"use client"
import * as S from './styles';
import ExperienciaComponent from '@/components/ExperienciaComponent';
import useData from '@/services/data';
import SubTitle from '@/components/atoms/SubTitle/index';
import Linha from '@/components/atoms/Linha/index';

const Experiencia = () => {
  const { data, error} = useData();

  return (
    <>
    <S.Main id='Experiencia'>
      <div><SubTitle text='Experiencia Profissional'/></div>
      <S.ContainerText>
          {data?.experiencia?.map((item, index) => (
            <ExperienciaComponent
            key={index}
            name={item.name}
            cargo={item.cargo}
            description={item.description}
            periodo={item.periodo}
            tipo={item.tipo}
          />
        ))}
      </S.ContainerText>
    </S.Main>
    <Linha/>
    </>
  );
};

export default Experiencia;
