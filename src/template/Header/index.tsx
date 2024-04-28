"use client"
import * as S from './styles'

const Header =()=>{
  return(
    <S.Main>
      <S.Center>
        <S.Img src='/assets/icon.png' alt='Proton em forma de universo'/>
      </S.Center>
      <S.Center>
        <p>Inicio</p>
      </S.Center>
      <S.Center>
        <p>Experiencias</p>
      </S.Center>
      <S.Center>
        <p>Academico</p>
      </S.Center>
      <S.Center>
        <p>Projetos</p>
      </S.Center>
    </S.Main>
  );
}
export default Header;