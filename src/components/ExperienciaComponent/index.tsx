"use client"
import * as S from './styles'

interface ExprerienciaProps{
  name: string;
  cargo: string;
  description: string;
  periodo: string;
}

const ExperienciaComponent: React.FC<ExprerienciaProps> =({name,cargo,periodo,description})=>{
  return(
  <>
        <S.ContainerFormation>
          <S.Title>        
          {name}
          {cargo}
          </S.Title>
              <S.Descrition>
                {description}
              </S.Descrition>
          <S.Text>        
            {periodo}
          </S.Text>
        </S.ContainerFormation>
  </>
  );
}
export default ExperienciaComponent;