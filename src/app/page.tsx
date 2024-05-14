import About from "@/template/About";
import Experiencia from "@/template/Experiencia";
import Formacao from "@/template/Formacao";
import Main from "@/template/Main";
import Objetivo from "@/template/Objetivo";

const Home =()=>{
  return(
    <>
      <Main>
        <About/>
        <Objetivo/>
        <Formacao/>
        <Experiencia/>
      </Main>
    </>
  )
}
export default Home;