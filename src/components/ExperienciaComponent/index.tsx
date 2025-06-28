import * as S from './styles'
import {Experiencia} from '@/interface/perfil';

const ExperienciaComponent: React.FC<Experiencia> =({name,cargo,description,periodo,tipo })=>{
  return(
  <>    
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
                {description}
              </S.Descrition>
        </S.ContainerFormation>
  </>
  );
}
export default ExperienciaComponent;