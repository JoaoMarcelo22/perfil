"use client"
import BotaoLink from '@/components/atoms/ButtonLink/index';
import Linha from '@/components/atoms/Linha/index';
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
        <S.Text>
        <BotaoLink href="/Projetos">Projetos</BotaoLink>
        </S.Text>
      </S.MenuLeft>
      <S.MenuCenter>
        <S.Text>
        <BotaoLink href="/ArtigosCientificos">Artigos Científicos</BotaoLink>
        </S.Text>
      </S.MenuCenter>
      <S.MenuRight>
        <S.Text>
        <BotaoLink href="/Artigos">Artigos</BotaoLink>
        </S.Text>
      </S.MenuRight>
      </S.Menu>
      <S.P>João Marcelo - Cientista de Dados</S.P>
      <S.Social>
        <S.Contato>
          <div><S.Icone src='https://raw.githubusercontent.com/JoaoMarcelo22/perfil/refs/heads/main/public/assets/Img/linkedin.svg'/></div>
          <div><S.Text>
            <S.ContateText target="_blank" href="https://www.linkedin.com/in/joao-marcelo22/">Linkdin</S.ContateText>
            </S.Text></div>
        </S.Contato>
        <S.Contato>
          <div><S.Icone src='https://raw.githubusercontent.com/JoaoMarcelo22/perfil/refs/heads/main/public/assets/Img/curriculum.svg'/></div>
          <div><S.Text>
          <S.ContateText target="_blank" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K1104513J6&tokenCaptchar=03AFcWeA4bt7PyXWu54d3-bENSUwIbM7y6D54C9xB0ojD3YQsiAB0ZGm6-Bn3tG6yA2mxF45aJiHMmOiqmOrCj97MH_znARbk5IAMyM2NW7y3rUmXchtREjtoXIzfZWax624yYzmMnzGS3t57akcifEOwMe7jOZyVg3loyTpzfWVU_MWRe7kSARQELuNekMG460Gn2May792DnTraq4rMffOvTQKx5UgHy_4ADy1oonkhdNlUhM8zUpjaCEJqaMqIvFBz3s5IecKn8j2PF59eoeJjF5E0e_8NjwjPYwdu197HtTaMAbW5oyO6n8Y6UrLbTgEEnHj9fJOaPUVsoQOuwUxeG8hcEbPppHR6dQbVyhPqlnZuBEskQ_O3TAXgJe2YlTS88a4zudKFPLwoMWzK3Isja3HjKcduzgbaXd8_Sg4XA9aDzDHwjY4rp1Hsz03Bof34QDeVkUj3S0_Hz-eZflvvVpPvfqRUCXc35PFA5HVYH5Ha4GUGvCmgBkNuBHlgVk69cN9sPV6Y3_dWGbbUtb00RmXwg7N97aeddu8UqDnuHdyo4NX7W3WDII6bYeuIwkzN-NhLkP4QeeGTDIL3Ku6_w4I5wABM2G7icxZOTXlPqwdG-BhO3vRkW6CT8ZR6lfmPcyux0IUZDDZfO22k_8NZMzb63jDh_9vDfJ6BgDVu_C_eaJv_6OiMsyWjZJ2_XGkXkiMtQDZv6naXSKK17dDhRvcQv1lLXEprYfCoFdj3Faib8ANcz5DrfN70GQUHx-ez98NmE2wEsEbr4qIAShixjpYy9_cyN-ZbjL52efmiAGJ0j5YKFAgzc0EHmsib4TMinOkQ6Lcth-Eg4BWwlwLZZSUGLkz7INpbUFx5d_vp2CPDv2JLk4q9diN1vUvoRY9NmyQgxYaHhRIX-Go7KmWuPeHb6I9BLuGAwNxZUO30wVcckIJlMLAXaNP9SIrE9MqjXDwEbU7gM">Curriculo Lattes</S.ContateText>
          </S.Text></div>
        </S.Contato>
        <S.Contato>
          <div><S.Icone src='https://raw.githubusercontent.com/JoaoMarcelo22/perfil/refs/heads/main/public/assets/Img/github.svg'/></div>
          <div><S.Text>
          <S.ContateText target="_blank" href="https://github.com/JoaoMarcelo22">Git-Hub</S.ContateText></S.Text></div>
        </S.Contato>
      </S.Social>
      </S.Div2>
    </S.Main>
    <S.Social>
      <S.Contato>
        <div><S.Icone src='https://raw.githubusercontent.com/JoaoMarcelo22/perfil/refs/heads/main/public/assets/Img/location.svg'/></div>
        <div><S.Text>
        <S.ContateText target="_blank" href="https://www.google.com.br/maps/place/Zona+Sul,+Rio+de+Janeiro+-+RJ/@-22.9964598,-43.2957119,12z/data=!3m1!4b1!4m6!3m5!1s0x9bd574fa5a6cf9:0xcb4161d593d6f0dc!8m2!3d-22.9549425!4d-43.1892443!16s%2Fm%2F0ch2_b8?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D">Rio de Janeiro/RJ</S.ContateText></S.Text></div>
      </S.Contato>
      <S.Contato>
        <div><S.Icone src='https://raw.githubusercontent.com/JoaoMarcelo22/perfil/refs/heads/main/public/assets/Img/whatsapp.svg'/></div>
        <div><S.Text>
        <S.ContateText target="_blank" href="https://wa.me/5521992078320">(21) 99207 - 8320</S.ContateText></S.Text></div>
      </S.Contato>
      <S.Contato>
        <div><S.Icone src='https://raw.githubusercontent.com/JoaoMarcelo22/perfil/refs/heads/main/public/assets/Img/email.svg'/></div>
        <div><S.Text>
        <S.ContateText href="mailto:joao_msferreira@hotmail.com">joao_msferreira@hotmail.com</S.ContateText>
        </S.Text></div>
      </S.Contato>
    </S.Social>
    <Linha/>
    </>
  );
}
export default About;