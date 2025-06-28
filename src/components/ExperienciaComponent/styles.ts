import styled from "styled-components";
interface ContainerTextProps {
    alignment?: string;
  }

export const Title = styled.h3`
    font-family:sans-serif ;
    line-height: 1.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.8;
    font-style: italic;
    color: #ffb74d;
`
export const Text = styled.p`
    font-size: 1rem;
    text-align: start;
    opacity: 0.8;

`
export const Period = styled.p`
    margin-left:4px;
    font-family:sans-serif ;
    font-size: 0.9rem;
    font-weight:500;
    opacity: 0.9;
`
export const Cargo = styled.p`
    font-family:sans-serif ;
    font-size: 0.9rem;
    font-weight:550 ;
    text-align: start;
    opacity: 0.9;
    color:#55569E ;
`
export const CargoDiv =styled.div`
    display:flex;
`
export const Atribuicao =styled.div`
    display:flex;
    justify-content:space-between ;
`

export const Descrition = styled.p`
    font-size: 0.95rem;
    text-align: left;
    color: #e5e5e5;
    line-height:1.5;
    word-spacing:1.5px;
    text-indent: 20px;
    font-family:sans-serif ;
`
export const ContainerFormation = styled.div`
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
`;