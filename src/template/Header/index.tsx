"use client"
import Button from '@/components/Button';
import * as S from './styles'

const Header =()=>{
  return(
    <S.Main>
      <S.Center>
        <S.Img src='/assets/icon.png' alt='Proton em forma de universo'/>
        <Button href="https://www.youtube.com/watch?v=t99KH0TR-J4&list=RDEMbHaAxpOZhcVmmF6I3y0siA&index=2&ab_channel=QueenOfficial" label="Inicio"/>
        <Button href="https://www.youtube.com/watch?v=t99KH0TR-J4&list=RDEMbHaAxpOZhcVmmF6I3y0siA&index=2&ab_channel=QueenOfficial" label="Experiencia"/>
        <Button href="https://www.youtube.com/watch?v=t99KH0TR-J4&list=RDEMbHaAxpOZhcVmmF6I3y0siA&index=2&ab_channel=QueenOfficial" label="Academico"/>
        <Button href="https://www.youtube.com/watch?v=t99KH0TR-J4&list=RDEMbHaAxpOZhcVmmF6I3y0siA&index=2&ab_channel=QueenOfficial" label="Projetos"/>
      </S.Center>
    </S.Main>
  );
}
export default Header;