import { axiosData } from "@/api/axiosData";
import { useEffect, useState } from "react";
import { Data } from "@/interface/perfil";

const useData =()=>{
    const [data, setData] = useState< Data| null>(null);
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