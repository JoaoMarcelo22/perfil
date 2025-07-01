import styled from "styled-components";

export const Main = styled.article`
    display: flex;
    position: relative;
    height: auto;
`;
export const Img = styled.img`
    margin: auto;
    margin-top: 50px;
    height: 768px;
    width: 512px;
    display: block;
    z-index: 1;
`
export const DivText = styled.div`
    position: absolute;
    top: 95%;       /* ajusta verticalmente */
    left: 50%;      /* ajusta horizontalmente */
    transform: translate(-50%, -50%); /* centraliza no meio */
    z-index: 10;    /* garante que fique acima da imagem */
    color: white;   /* opcional: texto visível */
    text-align: center;
    font-family: sans-serif;
    background-color: #111c1e90;
    border-radius: 25px;
    padding: 6px 16px;
    max-width: 450px;
    min-width: 350px;
`