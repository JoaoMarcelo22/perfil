import * as S from "./styles"

const Button =({label,href}:any)=>{
    return(
      <>
        <S.Content>
            <S.A href={href} target="_blank">{label}</S.A>
        </S.Content>
      </>
    )
  }
  export default Button;