import About from "@/template/About";
import Experiencia from "@/template/Experiencia";
import Formacao from "@/template/Formacao";
import Idiomas from "@/template/Idiomas";
import Main from "@/template/Main";
import Objetivo from "@/template/Objetivo";
import Portifolio from "@/template/Portifolio";
import Skills from "@/template/Skills";

const Home =()=>{
  return(
    <>
      <Main>
        <About/>
        <Objetivo/>
        <Formacao/>
        <Experiencia/>
        <Skills/>
        <Portifolio/>
        <Idiomas />
      </Main>
    </>
  )
}
export default Home;