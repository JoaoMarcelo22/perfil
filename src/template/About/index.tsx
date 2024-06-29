"use client"
import * as S from './styles'
import Person from '@/components/Person';
import useData from '@/services/data';

const About =()=>{
  const { data, error} = useData();
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Olá seja bem vindo(a) ao meu perfil.
        </S.Title>
        {data?.person?.social?.map((item, index) => (
            <Person
            key={index}
            context={item.context}
            icon={item.icon}
          />
        ))}
      </S.ContainerText>
    </S.Main>
  );
}
export default About;