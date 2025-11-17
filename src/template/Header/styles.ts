import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    justify-content: space-between;
`;
export const MenuRight = styled.div`
    background-color:rgba(89, 210, 227, 0.2);
    border-radius:0px 15px 15px 0px;
    height:40px;
    min-width:100px;
    text-align:center;
    text-justify:center;
    padding:10px;
    margin-left:1px;
@media (max-width:480px){
    margin-top:4px;
    border-radius:15px;
    height:36px;
}
`
export const MenuCenter = styled.div`
    background-color:rgba(89, 210, 227, 0.2);
    height:40px;
    min-width:200px;
    text-align:center;
    text-justify:center;
    padding:10px;
    margin-left:1px;
@media (max-width:480px){
    margin-top:4px;
    border-radius:15px;
    height:36px;
    min-width:180px;
}
`
export const MenuLeft = styled.div`
    background-color:rgba(89, 210, 227, 0.2);
    border-radius:15px 0px 0px 15px;
    height:40px;
    min-width:110px;
    text-align:center;
    text-justify:center;
    padding:10px;
@media (max-width:480px){
    border-radius:15px;
    height:36px;
}
`
export const Menu = styled.div`
    display:flex;
    margin-top:10px;
@media (max-width:480px){
    display:inline-block ;
}
`
export const Social = styled.div`
    margin-top:10px ;
    display:flex;
    justify-content: space-between;
`
export const Text = styled.div`
    font-family:sans-serif ;
    font-size:16px;
    cursor: pointer;
@media (max-width:480px){
    font-size:14px;
}
`
export const MenuText = styled.a`
    color:#fff ;
    cursor: pointer;
    &:hover{ color:#F28B82};
    text-decoration:none ;
`
export const ContateText = styled.a`
    color:#fff ;
    cursor: pointer;
    &:hover{ color:#FFB74D};
    text-decoration:none ;
`
export const P = styled.div`
    font-family:sans-serif ;
    margin-top:30px ;
    margin-bottom:16px ;
    color:#fff;
    font-size:25px;
    text-align:center;
    font-weight:bold ;
`

export const Div2 = styled.div`
   display:block;
   margin-right:60px ;
`
export const Icone = styled.img`
    height:20px;
    width:20px ;
    margin-right:6px;
`
export const Contato = styled.div`
    display:flex;
    padding: auto ;
`