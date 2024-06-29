"use client"
import * as S from './styles'
import Person from '@/components/Person';
import useData from '@/services/data';
interface Social{
  context: string;
  icon: string
}

interface PersonProps{
  img: string;
  social: Social;
}

const About =()=>{
  const { data, error} = useData();
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Olá seja bem vindo(a) ao meu perfil.
        </S.Title>
      </S.ContainerText>
    </S.Main>
  );
}
export default About;