import * as S from './styles'

const Header =()=>{
  return(
    <S.Main>
      <S.Center>
        <p>Hello word</p>
        <S.Img src="/assets/home.jpeg" alt='Olha eu aqui' width={300}/>
      </S.Center>
    </S.Main>
  );
}
export default Header;