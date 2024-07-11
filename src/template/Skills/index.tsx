"use client"

import useData from '@/services/data';
import * as S from './styles'

const Skills =()=>{
  const { data, error} = useData();
  return(
    <S.Central>
            <S.Title>Skills</S.Title>
            <S.Text>Hard Skills: </S.Text>
            {data?.skillHard?.map((item, index) => (
            <S.Text key={index}>
              {item.context}
            </S.Text>
        ))}
        </S.Central>
  );
}
export default Skills;