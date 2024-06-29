import * as S from "./styles"
import { Social } from "@/interface/perfil";

const Person:React.FC<Social> =({context,icon}) => {
  
  return(
    <S.Main>
      <S.ContainerText>
        <S.Text>
        Developer / Data Scientist
        {context}
        {icon}
        </S.Text>
      </S.ContainerText>
    </S.Main>
  );
}
export default Person;