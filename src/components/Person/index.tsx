import * as S from "./styles"
import { Contato } from "@/interface/perfil";

const Person:React.FC<Contato> =({context,icon}) => {
  
  return(
    <S.Main>
      <S.ContainerText>
        <S.ContainerSocial>
          <S.Img src={icon}/>
          <S.Text>
          {context}
          </S.Text>
        </S.ContainerSocial>
      </S.ContainerText>
    </S.Main>
  );
}
export default Person;