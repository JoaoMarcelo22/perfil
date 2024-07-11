
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
interface Contato{
    context:string;
    icon:string
}
interface Social{
    context:string;
    icon:string
}
interface SkillSoftwate{
    context:string;
    icon:string
}
interface SkillHard{
    context:string;
    icon:string
}

interface Person{
    imagemPerfil?:string;
    contato?:Contato[];
    social?:Social[];
}
interface Data{
    experiencia:Experiencia[];
    formacao:Formacao[];
    objetivo:Objetivo[];
    skillSoftware: SkillSoftwate[];
    skillHard: SkillHard[];
    person: Person;
}

export  type {Data,Person,Contato,Objetivo,Formacao,Experiencia};