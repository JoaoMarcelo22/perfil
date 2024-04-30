"use client"
import * as S from './styles'

const About =()=>{
  return(
    <S.Main>
      <S.Text>
        Olá seja bem vindo(a) ao meu perfil. <br/> Eu sou o João Marcelo, tenho 25 anos sou desenvolvedor Full Stack JavaScript e Cientista de dados, 
        Nascido em Campina Grande  - PB, criado na Rocinha - RJ desde os meus 3 meses de idade. Apaixonado pela natureza, viagens e moto, Ilha Bela, Penedo e Arraial do Cabo são algumas das cidades que cheguei a conhecer. 
        Apaixonado por livros e aprendizados, 1984 - George Orwell e Mais esperto que o diabo são algumas das obras que já li por completo.
        Dentre esses estudos, o movimento Iluminista me encantou e o temo Sapare Aude veio para mudar minha percepção.<br/> Sapere Aude - Ouse saber, Seja sabio!
      </S.Text>
      <S.Img src='./assets/perfil.jpg' />
    </S.Main>
  );
}
export default About;