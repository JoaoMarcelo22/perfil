import styled from "styled-components";

export const Main = styled.article`
    display: flex;
    height: auto;
    padding: 10px;
    color: #fff;
`;
export const ContainerFormation = styled.div`
display: flex;
flex-direction: column;
    
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerDate = styled.div`
    display: flex;
`
export const Text = styled.p`
    font-size: 1rem;
    text-align: start;
    opacity: 0.8;
    margin: 1rem;
    text-decoration-color: #00275b;
    text-decoration-line:overline;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
    &:before{
        content:url(assets/Img/calender.svg);
        margin-right: 4px;
    }
`
export const Title = styled.h3`
    margin-left: 20px;
    text-align: start;
    line-height: 1.7rem;
    font-size: 1.25rem;
    margin-bottom: 1rem;
`
export const SubTitle = styled.h4`
    margin-left: 20px;
    line-height: 1.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.9;
    font-style: italic;
`
export const Img = styled.img`
    width: 150px;
`
