import BotaoLink from "@/components/atoms/ButtonLink/index";
import PgError from "@/components/pgError/index";

const Projetos =()=>{
  return(
    <>
      <PgError/>
      <div style={{
        margin: 'auto',
        textAlign: 'center',
        background: '#00000050',
        maxWidth: '150px',
        marginTop: '10px',
        borderRadius:'50px',
        padding:'4px'}}>
      <BotaoLink href="/">Voltar</BotaoLink>
      </div>
    </>
  );
}
export default Projetos;