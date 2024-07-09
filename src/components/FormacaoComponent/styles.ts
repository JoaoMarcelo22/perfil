import styled from "styled-components";

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
    opacity: 0.9;
    margin: 6px;
    text-decoration-color: #00275b;
    text-decoration-line:overline;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
    &:before{
        content:url(assets/Img/calender.svg);
        margin-right: 4px;
    }
`
export const SubTitle = styled.h4`
    margin-left: 20px;
    line-height: 1.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 0.8;
    font-style: italic;
`
export const Img = styled.img`
    width: 150px;
`