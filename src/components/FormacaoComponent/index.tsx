"use client"
import * as S from './styles'
import { Formacao } from '@/interface/perfil';

const FormacaoComponent: React.FC<Formacao> =({name,periodo,instituicao,alinhamento})=>{
  return(
    <>
      <S.ItemWrapper alignment={alinhamento}>
        <S.ContainerFormation>
        <S.SubTitle>{name}</S.SubTitle>
        <S.ContainerDate>
          <div>
          <S.Text>{periodo}</S.Text>
          </div>
          <div>
            <S.Text>{instituicao}</S.Text>
          </div>
        </S.ContainerDate>
        </S.ContainerFormation>
      </S.ItemWrapper>
    </>
  );
}
export default FormacaoComponent;