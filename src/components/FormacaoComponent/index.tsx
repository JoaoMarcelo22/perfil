"use client"
import * as S from './styles'
import { Formacao } from '@/interface/perfil';

const FormacaoComponent: React.FC<Formacao> =({name,periodo,instituicao})=>{
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