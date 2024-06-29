import * as S from './styles'
import {Experiencia} from '@/interface/perfil';

const ExperienciaComponent: React.FC<Experiencia> =({name,cargo,description,periodo })=>{
  return(
  <>
        <S.ContainerFormation>
          <S.Title>        
          {name}
          {cargo}
          </S.Title>
          <S.Period>        
            {periodo}
          </S.Period>
              <S.Descrition>
                {description}
              </S.Descrition>
        </S.ContainerFormation>
  </>
  );
}
export default ExperienciaComponent;