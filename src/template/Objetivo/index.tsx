"use client"
import Linha from '@/components/atoms/Linha/index';
import SubTitle from '@/components/atoms/SubTitle/index';
import useData from '@/services/data';
import * as S from './styles'
import parse from 'html-react-parser';

const Objetivo =()=>{
  const { data, error} = useData();
  return(
    <>
    <S.Main>
      <S.ContainerText>
      <SubTitle text='Sobre'/>
      <S.Container>
        {data?.sobre?.map((item:any, index:any) => (
          <S.Text key={index}>
            {parse(item.obj)}
          </S.Text>
        ))}
      </S.Container>
        <SubTitle text='Objetivo'/>
        <S.Container>
        {data?.objetivo?.map((item, index) => (
          <S.Text key={index}>
            {parse(item.obj)}
          </S.Text>
        ))}
        </S.Container>
      
      </S.ContainerText>
    </S.Main>
    <Linha/>
    </>
  );
}
export default Objetivo;