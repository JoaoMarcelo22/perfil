import styled from "styled-components";

export const Main = styled.article`
    display: flex;
    flex-direction: column;
    color: #fff;
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Descrition = styled.p`
    font-size: 0.95rem;
    text-align: center;
    color: #AFAFAF;
    line-height:1.5;
    word-spacing:1.5px;
    text-indent: 20px;
    font-family:sans-serif;
    ul {
    list-style: none;
    padding-left: 0;
    }
`
export const Context = styled.div`
    text-align: center;
`
export const DivColor = styled.div`
    font-family: sans-serif;
    font-weight: 600;
    display: flex;                
    align-items: center;         
    justify-content: center;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 15px;
`
export const Text = styled.div`
    display: flex;                
    align-items: center;         
    justify-content: center;
    font-size: 0.95rem;
    font-family: sans-serif;
    padding: 4px;
    max-width: 200px;
    max-height: 100px;
`
export const ColorDiv = styled.div`
    display: flex;
`
export const Text2 = styled.div`
    font-weight: 600;
    display: flex;  
    text-align:center ;
    align-items: center;         
    justify-content: center;
    font-size: 0.95rem;
    font-family: sans-serif;
    padding: 4px;
    width: 100px;
`