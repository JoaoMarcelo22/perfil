"use client"

import SubTitle from '@/components/atoms/SubTitle/index';
import useData from '@/services/data';
import * as S from './styles'

const Idiomas =()=>{
  const { data, error} = useData();
  return(
    <>
    <S.Central>
      <div><SubTitle text='Idiomas'/></div>
      {data?.idioma?.map((item, index) => (
            <><S.Text key={index}>{item.titulo}</S.Text>
            <S.Descricao key={index}>{item.context}</S.Descricao>
            </>
        ))}
    </S.Central>
    </>
  );
}
export default Idiomas;