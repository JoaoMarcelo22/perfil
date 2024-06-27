"use client"
import FormacaoComponent from '@/components/FormacaoComponent';
import * as S from './styles'
import useData from '@/services/data';

const Formacao = () => {
  const { data, error} = useData();
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Formação Academica
        </S.Title>
      {data?.formacao?.map((item, index)=>(
        <FormacaoComponent
          key={index}
          name={item.name}
          periodo={item.periodo}
          instituicao={item.instituicao}
        />
      ))}
      </S.ContainerText>
    </S.Main>
  );
}
export default Formacao;