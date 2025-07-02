import Experiencia from "@/template/Experiencia";
import Formacao from "@/template/Formacao";
import Header from "@/template/Header/index";
import Main from "@/template/Main";
import Objetivo from "@/template/Objetivo";
import Portifolio from "@/template/Portifolio";
import Skills from "@/template/Skills";

const Home =()=>{
  return(
      <Main>
        <Header/>
        <Objetivo/>
        <Formacao/>
        <Experiencia/>
        <Skills/>
        <Portifolio/>
      </Main>
  )
}
export default Home;