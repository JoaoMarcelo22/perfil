"use client"
import BotaoLink from "@/components/atoms/ButtonLink/index";
import Linha from "@/components/atoms/Linha/index";
import SubTitle from "@/components/atoms/SubTitle/index";
import TitleTwo from "@/components/atoms/TercTitle/index";
import Main from "@/template/Main";
import * as S from "./styles";

const Menu =()=>{
  return(
    <Main>
      <div><SubTitle text='Projetos'/></div>
      <Linha/>
      <S.Context>
      <TitleTwo text='Dados'/>
      <p>-</p>
      <p>-</p>
      <p>-</p>
      </S.Context>
      <Linha/>
      <S.Context>
      <TitleTwo text='Dev'/>
      <BotaoLink href="/PerfilOnline">
        Perfil online
      </BotaoLink>
      <p>-</p>
      <p>-</p>
      </S.Context>
      <Linha/>
        <S.Voltar>
        <BotaoLink href="/">
          Voltar
        </BotaoLink>
        </S.Voltar>
    </Main>
  );
}
export default Menu;