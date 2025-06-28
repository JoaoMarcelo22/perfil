"use client"
import * as S from './styles'
import FormacaoComponent from '@/components/FormacaoComponent';
import useData from '@/services/data';
import SubTitle from '@/components/atoms/SubTitle/index';
import Linha from '@/components/atoms/Linha/index';

const Formacao = () => {
  const { data, error} = useData();
  return(
    <>
    <S.Main id='Formacao'>
      <div><SubTitle text='Formação Acadêmica'/></div>
          {data?.formacao?.map((item, index)=>(
      <S.ContainerText alignment={item.alinhamento}>
          <FormacaoComponent
          key={index}
          name={item.name}
          periodo={item.periodo}
          instituicao={item.instituicao}
        />
      </S.ContainerText>
      ))}
    </S.Main>
    <Linha/>
    </>
  );
}
export default Formacao;