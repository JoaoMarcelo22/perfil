import * as S from './styles'
import {Person} from '@/interface/perfil';

const ExperienciaComponent: React.FC<Person> =({imagemPerfil})=>{
  
  return(
  <>
        <S.Img src={imagemPerfil} alt='Imagem de perfil'/>
  </>
  );
}
export default ExperienciaComponent;