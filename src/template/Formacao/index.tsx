"use client"
import * as S from './styles'

const Formacao =()=>{
  return(
    <S.Main>
      <S.ContainerText>
        <S.Title>
          Formação Academica
        </S.Title>
        <S.ContainerFormation>
        <S.SubTitle>        
          Ciência da Computação - Bacharelado
        </S.SubTitle>
        <S.ContainerDate>
          <S.Text>        
            Fev 2024 - Fev 2028
          </S.Text>
          <S.Img src='assets/Img/cruzeiroDoSul2.png'/>
        </S.ContainerDate>
        <S.SubTitle>        
          Ciência de Dados - Tecnólogo
        </S.SubTitle>
        <S.ContainerDate>
          <S.Text>        
            Jan 2022 - Dez 2023
          </S.Text>
          <S.Img src='assets/Img/cruzeiroDoSul2.png'/>
        </S.ContainerDate>
        <S.SubTitle>        
          Análise e Desenvolvimento de Sistemas - Tecnólogo
        </S.SubTitle>
        <S.ContainerDate>
          <S.Text>        
            Fev 2019 - Dez 2021
          </S.Text>
          <S.Img src='assets/Img/cruzeiroDoSul2.png'/>
        </S.ContainerDate>
        </S.ContainerFormation>
      </S.ContainerText>
    </S.Main>
  );
}
export default Formacao;