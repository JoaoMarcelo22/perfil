"use client"
import * as S from './styles'
import useData from '@/services/data';

const About =()=>{
  const { data, error} = useData();
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Olá seja bem vindo(a) ao meu perfil.
        </S.Title>
        {data?.objetivo?.map((item, index) => (
          <S.Text key={index}>
            {item.obj}
          </S.Text>
        ))}
      </S.ContainerText>
    </S.Main>
  );
}
export default About;