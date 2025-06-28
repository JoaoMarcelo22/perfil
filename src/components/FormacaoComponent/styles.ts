import styled from "styled-components";

export const ContainerFormation = styled.div`
display: flex;
flex-direction: column;
    
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
`
export const ContainerDate = styled.div`
    display: flex;
    justify-content:space-between ;
`
export const Text = styled.p`
    font-family:sans-serif ;
    font-size: 1rem;
    text-align: start;
    opacity: 0.9;
    /* margin: 6px;
    text-decoration-color: #00275b;
    text-decoration-line:overline;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
    &:before{
        content:url(assets/Img/calender.svg);
        margin-right: 4px;
    } */
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