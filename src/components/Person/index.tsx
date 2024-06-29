import * as S from "./styles"
import { Social } from "@/interface/perfil";

const Person:React.FC<Social> =({context,icon}) => {
  
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