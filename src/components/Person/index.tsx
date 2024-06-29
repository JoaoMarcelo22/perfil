import * as S from "./styles"

interface Social{
  context: string;
  icon: string
}

interface PersonProps{
  img: string;
  social: Social;
}

const Person:React.FC<PersonProps> =({social}) => {
  
  return(
    <S.Main>
      <S.ContainerText>
        <S.Text>
        Developer / Data Scientist
        {social?.context}
        {social?.icon}
        </S.Text>
      </S.ContainerText>
    </S.Main>
  );
}
export default Person;