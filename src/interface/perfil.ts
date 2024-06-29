
interface Experiencia{
    name: string;
    cargo: string;
    description: string;
    periodo: string;
  }
interface Formacao{
    name: string;
    periodo: string;
    instituicao : string;
  }
interface Objetivo{
    obj: string
}
interface Social{
    context:string;
    icon:string
}

interface Data{
    experiencia:Experiencia[];
    formacao:Formacao[];
    objetivo:Objetivo[];
    imagemPerfil:string;
    social:Social[];
}

export  type {Data,Social,Objetivo,Formacao,Experiencia};