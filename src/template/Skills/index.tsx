"use client"

import Linha from '@/components/atoms/Linha/index';
import SubTitle from '@/components/atoms/SubTitle/index';
import useData from '@/services/data';
import * as S from './styles'

const Skills =()=>{
  const { data, error} = useData();
  return(
    <>
    <S.Central>
      <div><SubTitle text='Skills'/></div>
            <S.Text>Software Skills: </S.Text>
            {data?.skillHard?.map((item, index) => (
            <S.Img key={index} src={item.logo}/>
        ))}
            
            <S.Text>Hard Skills: </S.Text>
            {data?.skillSoftware?.map((item, index) => (
            <S.Text key={index}> {item.context}</S.Text>
        ))}
        </S.Central>
      <Linha/>
    </>
  );
}
export default Skills;