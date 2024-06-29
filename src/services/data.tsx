import { axiosData } from "@/api/axiosData";
import { useEffect, useState } from "react";

interface ExperienciaItem {
  id: string;
  name: string;
  cargo: string;
  description: string;
  periodo: string;
}

interface FormacaoItem {
  id: string;
  name: string;
  periodo: string;
  instituicao: string;
}
interface ObejetivoItem {
  obj: string;
}
interface Social{
  context: string;
  icon: string
}
interface PersonItem{
  img: string;
  social: Social;
}
interface Dados {
  experiencia: ExperienciaItem[];
  formacao: FormacaoItem[];
  objetivo: ObejetivoItem[];
  person: PersonItem;
}
const useData =()=>{
    const [data, setData] = useState< Dados| null>(null);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axiosData();
        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e, "Erro 1")
          setError(e.message);
        } else {
          console.log(e, "Erro 2")
          setError('Unknown error occurred');
        }
      }
    };

    getData();
  }, []);
  return { data, error};
}
export default useData;