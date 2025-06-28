import * as S from "./styles"

const menuButton =({label,href}:any)=>{
    return(
      <>
        <S.Content>
            <S.A href={href} >{label}</S.A>
        </S.Content>
      </>
    )
  }
  export default menuButton;