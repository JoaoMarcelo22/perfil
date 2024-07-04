"use client"
import * as S from './styles'
import FotoPerfil from '@/components/FotoPerfil'
import Person from '@/components/Person';
import useData from '@/services/data';

const About =()=>{
  const { data, error} = useData();
  return(
    <S.Main>
        <S.Title>
          Olá seja bem vindo(a) ao meu perfil.
        </S.Title>
        <S.ContainerComponents>
        <FotoPerfil imagemPerfil="https://avatars.githubusercontent.com/u/78456074?s=400&u=0847bf6d0bebd46c2bfc4a1efadf844e30dd0ce1&v=4" />
        <S.ContainerText>
          <S.ContainerPerfil>
        {data?.person?.contato?.map((item, index) => (
            <Person
            key={index}
            context={item.context}
            icon={item.icon}
          />
        ))}
          </S.ContainerPerfil>
          <S.ContainerPerfil>
        {data?.person?.social?.map((item, index) => (
            <Person
            key={index}
            context={item.context}
            icon={item.icon}
          />
        ))}
          </S.ContainerPerfil>
        </S.ContainerText>
        </S.ContainerComponents>
      
    </S.Main>
  );
}
export default About;