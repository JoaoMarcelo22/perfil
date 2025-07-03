
interface Experiencia{
    name: string;
    cargo: string;
    description: string;
    periodo: string;
    tipo: string;
    alinhamento:string;
  }
interface Formacao{
    name: string;
    periodo: string;
    instituicao : string;
    alinhamento?: string;
  }
interface Objetivo{
    obj: string
}
interface Sobre{
    obj: string
}
interface Idioma{
    titulo: string;
    context: string;
}
interface Contato{
    context:string;
    icon:string
}
interface Social{
    context:string;
    icon:string
}
interface SkillSoft{
    context:string
}
interface SkillHard{
    name:string;
    logo:string
}

interface Person{
    imagemPerfil?:string;
    contato?:Contato[];
    social?:Social[];
}
interface Data{
    experiencia:Experiencia[];
    formacao:Formacao[];
    sobre:Sobre[]
    objetivo:Objetivo[];
    skillSoft: SkillSoft[];
    skillHard: SkillHard[];
    person: Person;
    idioma: Idioma[];
}

export  type {Data,Person,Contato,Objetivo,Formacao,Experiencia,SkillSoft,SkillHard,Idioma};