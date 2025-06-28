"use client"
import * as S from './styles'
import { Formacao } from '@/interface/perfil';

const FormacaoComponent: React.FC<Formacao> =({name,periodo,instituicao})=>{
  return(
    <>
      <S.ContainerText>
        <div></div>
        <S.ContainerFormation>
        <S.SubTitle>        
          {name}
        </S.SubTitle>
        <S.ContainerDate>
          <S.Text>        
            {periodo}
          </S.Text>
          <div>
            <S.Text>
              Universidade - Cruzeiro do Sul
            </S.Text>
          </div>
        </S.ContainerDate>
        </S.ContainerFormation>
      </S.ContainerText>
    </>
  );
}
export default FormacaoComponent;