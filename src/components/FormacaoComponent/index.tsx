"use client"
import * as S from './styles'

interface FormacaoProps{
  name: string;
  periodo: string;
  instituicao : string;
}

const FormacaoComponent: React.FC<FormacaoProps> =({name,periodo,instituicao})=>{
  return(
    <>
      <S.ContainerText>
        <S.ContainerFormation>
        <S.SubTitle>        
          {name}
        </S.SubTitle>
        <S.ContainerDate>
          <S.Text>        
            {periodo}
          </S.Text>
          <S.Img src={instituicao}/>
        </S.ContainerDate>
        </S.ContainerFormation>
      </S.ContainerText>
    </>
  );
}
export default FormacaoComponent;