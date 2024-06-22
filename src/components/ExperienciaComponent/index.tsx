"use client"
import * as S from './styles'

interface ExprerienciaProps{
  name: string;
  cargo: string;
  periodo: string
}

const ExperienciaComponent: React.FC<ExprerienciaProps> =({name,cargo,periodo})=>{
  return(
  <>
        <S.ContainerFormation>
          <S.SubTitle>        
          {name}
          {cargo}
          </S.SubTitle>
        <S.ContainerDate>
          <S.Text>        
            {periodo}
          </S.Text>
        </S.ContainerDate>
        </S.ContainerFormation>
  </>
  );
}
export default ExperienciaComponent;