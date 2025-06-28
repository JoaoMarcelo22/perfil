"use client"
import Linha from '@/components/atoms/Linha/index';
import SubTitle from '@/components/atoms/SubTitle/index';
import useData from '@/services/data';
import * as S from './styles'

const Objetivo =()=>{
  const { data, error} = useData();
  return(
    <S.Main>
      <S.ContainerText>
      <SubTitle text='Sobre'/>
        {data?.objetivo?.map((item, index) => (
          <S.Text key={index}>
            {item.obj}
          </S.Text>
        ))}
        <SubTitle text='Objetivo'/>
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