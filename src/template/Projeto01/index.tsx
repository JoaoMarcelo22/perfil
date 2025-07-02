"use client"
import * as S from './styles';
import ExperienciaComponent from '@/components/ExperienciaComponent';
import useData from '@/services/data';
import SubTitle from '@/components/atoms/SubTitle/index';
import Linha from '@/components/atoms/Linha/index';
import BotaoLink from '@/components/atoms/ButtonLink/index';

const Experiencia = () => {
  const { data, error} = useData();

  return (
    <>
    <S.Main id='Experiencia'>
    <div style={{
        margin: 'auto',
        textAlign: 'center',
        background: '#f3141450',
        maxWidth: '150px',
        borderRadius:'50px',
        padding:'8px'}}>
      <BotaoLink href="/">Voltar</BotaoLink>
      </div>
    </S.Main>
    </>
  );
};

export default Experiencia;
