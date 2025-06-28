"use client"
import Linha from '@/components/atoms/Linha/index';
import menuButton from '@/components/atoms/menuButton';
import FotoPerfil from '@/components/FotoPerfil/index';
import * as S from './styles'

const About =()=>{
  return(
    <>
    <S.Main>
      <div>
      <FotoPerfil imagemPerfil="https://avatars.githubusercontent.com/u/78456074?s=400&u=0847bf6d0bebd46c2bfc4a1efadf844e30dd0ce1&v=4"/>
      </div>
      <S.Div2>
      <S.Menu>
      <S.MenuLeft>
        <S.Text>Projetos</S.Text>
      </S.MenuLeft>
      <S.MenuCenter>
        <S.Text>Artigos Científicos</S.Text>
      </S.MenuCenter>
      <S.MenuRight>
        <S.Text>Artigos</S.Text>
      </S.MenuRight>
      </S.Menu>
      <S.P>João Marcelo - Cientista de Dados</S.P>
      <S.Social>
        <S.Contato>
          <div><S.Icone src='../assets/img/linkedin.svg'/></div>
          <div><S.Text>Linkdin</S.Text></div>
        </S.Contato>
        <S.Contato>
          <div><S.Icone src='../assets/img/curriculum.svg'/></div>
          <div><S.Text>Curriculo Letter</S.Text></div>
        </S.Contato>
        <S.Contato>
          <div><S.Icone src='../assets/img/github.svg'/></div>
          <div><S.Text>Git-Hub</S.Text></div>
        </S.Contato>
      </S.Social>
      </S.Div2>
    </S.Main>
    <S.Social>
      <S.Contato>
        <div><S.Icone src='../assets/img/location.svg'/></div>
        <div><S.Text>Rio de Janeiro/RJ</S.Text></div>
      </S.Contato>
      <S.Contato>
        <div><S.Icone src='../assets/img/whatsapp.svg'/></div>
        <div><S.Text>(21) 99207 - 8320</S.Text></div>
      </S.Contato>
      <S.Contato>
        <div><S.Icone src='../assets/img/email.svg'/></div>
        <div><S.Text>joao_msferreira@hotmail.com</S.Text></div>
      </S.Contato>
    </S.Social>
    <Linha/>
    </>
  );
}
export default About;