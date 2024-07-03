"use client"
import * as S from './styles'
import FotoPerfil from '@/components/FotoPerfil'
import Person from '@/components/Person';
import useData from '@/services/data';

const About =()=>{
  const { data, error} = useData();
  const profileImage = data?.person.imagemPerfil ?? 'https://www.youtube.com/watch?v=t99KH0TR-J4&ab_channel=QueenOfficial'
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Olá seja bem vindo(a) ao meu perfil.
        </S.Title>
        <FotoPerfil imagemPerfil={profileImage} social={[]} />
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