import styled from "styled-components";

interface ContainerTextProps {
    alignment?: string;
  }

export const ContainerFormation = styled.div`
display: flex;
flex-direction: column;
flex:1 ;
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
`
export const ItemWrapper = styled.div<ContainerTextProps>`
  display: flex;
  align-items: ${({ alignment }) => {
    if (alignment === 'top') return 'flex-start';
    if (alignment === 'bottom') return 'flex-end';
    return 'center';
  }};
  height: 60px;
@media(max-width:480px){
    display:inline-block;
    margin:10px 0px ;
}
`;
export const ContainerDate = styled.div`
    display: flex;
    justify-content:space-between ;
@media(max-width:480px){
    display:inline-block;
    margin:2px 0px ;
}
`
export const Text = styled.p`
    font-family:sans-serif ;
    font-size: 1rem;
    text-align: start;
    opacity: 0.9;
`
export const SubTitle = styled.h4`
    font-family:sans-serif ;
    line-height: 1.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.8;
    font-style: italic;
    color: #ffb74d;
`