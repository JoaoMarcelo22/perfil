import Experiencia from "@/template/Experiencia";
import Formacao from "@/template/Formacao";
import Header from "@/template/Header/index";
import Idiomas from "@/template/Idiomas/index";
import Main from "@/template/Main";
import Objetivo from "@/template/Objetivo";
import Skills from "@/template/Skills";

const Home =()=>{
  return(
      <Main>
        <Header/>
        <Objetivo/>
        <Formacao/>
        <Experiencia/>
        <Skills/>
        <Idiomas/>
      </Main>
  )
}
export default Home;