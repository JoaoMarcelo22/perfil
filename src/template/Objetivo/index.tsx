"use client"
import Linha from '@/components/atoms/Linha/index';
import useData from '@/services/data';
import * as S from './styles'

const Objetivo =()=>{
  const { data, error} = useData();
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Sobre
        </S.Title>
        {data?.objetivo?.map((item, index) => (
          <S.Text key={index}>
            {item.obj}
          </S.Text>
        ))}
        <S.Title>
          Objetivo
        </S.Title>
        {data?.objetivo?.map((item, index) => (
          <S.Text key={index}>
            {item.obj}
          </S.Text>
        ))}
      <Linha/>
      </S.ContainerText>
    </S.Main>
  );
}
export default Objetivo;