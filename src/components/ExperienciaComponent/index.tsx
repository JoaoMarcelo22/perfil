import * as S from './styles'
import {Experiencia} from '@/interface/perfil';
import parse from 'html-react-parser';

const ExperienciaComponent: React.FC<Experiencia> =({name,cargo,description,periodo,tipo,alinhamento })=>{
  return(
  <>    
    <S.ItemWrapper alignment={alinhamento}>
      <S.ContainerFormation>
        <S.Title>        
          {name}
        </S.Title>
        <S.Atribuicao>
          <S.CargoDiv>
            <S.Cargo>
              {cargo}        
            </S.Cargo>
            <S.Period>
              {periodo}
            </S.Period>
            </S.CargoDiv>
            <div>
              <S.Cargo>
                {tipo}        
              </S.Cargo>
            </div>
        </S.Atribuicao>
        <S.Descrition>
          {parse(description)}
        </S.Descrition>
      </S.ContainerFormation>
    </S.ItemWrapper>
  </>
  );
}
export default ExperienciaComponent;