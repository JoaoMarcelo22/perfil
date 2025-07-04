"use client"
import * as S from './styles';
import useData from '@/services/data';
import BotaoLink from '@/components/atoms/ButtonLink/index';
import SubTitle from '@/components/atoms/SubTitle/index';
import Linha from '@/components/atoms/Linha/index';
import TitleTwo from '@/components/atoms/TercTitle/index';

const PerfilOnline = () => {
  const { data, error} = useData();

  return (
    <>
    <S.Main id='Experiencia'>
    <div ><SubTitle text='Perfil Online'/></div>
    <S.Descrition>
    A seguir, apresento o processo que utilizei para desenvolver meu perfil online. Desde já, agradeço pela sua visita e espero que aproveite o resultado. Qualquer sugestão será muito bem-vinda!
    </S.Descrition>
    <Linha/>
    <S.Context>
      <div style={{marginTop:'10px'}}>
        <TitleTwo text='Paleta de cores'/>
      </div>
    <S.ContainerText>
      <S.ColorDiv>
    <S.DivColor style ={{background: '#F28B82'}}>
    #F28B82
    </S.DivColor>
        <S.Text>
        Cor primária utilizada para títulos principais e elementos de destaque.
        </S.Text>
        <S.Text2>
        Exemplo:
        </S.Text2>
      </S.ColorDiv>
      <S.ColorDiv>
    <S.DivColor style ={{background: '#FFB74D'}}>
    #FFB74D
    </S.DivColor>
        <S.Text>
        Cor secundária utilizada para subtítulos e elementos de destaque complementares.
        </S.Text>
        <S.Text2>
        Exemplo:
        </S.Text2>
    </S.ColorDiv>
    <S.ColorDiv>
    <S.DivColor style ={{background: '#55569E'}}>
    #55569E
    </S.DivColor>
    <S.Text>
        Cor terciária utilizada para destacar trechos específicos do conteúdo.
        </S.Text>
        <S.Text2>
        Exemplo:
        </S.Text2>
    </S.ColorDiv>
    <S.ColorDiv>
    <S.DivColor style ={{background: '#122A2E'}}>
    #122A2E
    </S.DivColor>
    <S.Text>
        Cor utilizada como plano de fundo e em elementos com menor destaque visual.
        </S.Text>
        <S.Text2>
        Exemplo:
        </S.Text2>
    </S.ColorDiv>
    <S.ColorDiv>
    <S.DivColor style ={{background: '#AFAFAF'}}>
    #AFAFAF
    </S.DivColor>
    <S.Text>
    Cor utilizada para blocos de texto longos; para trechos curtos, utiliza-se a cor #FFF.
        </S.Text>
        <S.Text2>
        Exemplo:
        </S.Text2>
    </S.ColorDiv>
    </S.ContainerText>
    </S.Context>
    <Linha/>
    <S.Context>
      <div style={{marginTop:'10px'}}>
        <TitleTwo text='Storytelling'/>
      </div>
    </S.Context>
    <div style={{
        margin: 'auto',
        marginTop:'10px',
        textAlign: 'center',
        background: '#122A2E',
        minWidth: '150px',
        borderRadius:'50px',
        padding:'8px'}}>
      <BotaoLink href="/Projetos">Voltar</BotaoLink>
      </div>
    
    </S.Main>
    </>
  );
};

export default PerfilOnline;
