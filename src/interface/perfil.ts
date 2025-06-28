
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
    alinhamento?: 'top' | 'center' | 'bottom';
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
    objetivo:Objetivo[];
    skillSoftware: SkillSoftwate[];
    skillHard: SkillHard[];
    person: Person;
}

export  type {Data,Person,Contato,Objetivo,Formacao,Experiencia,SkillSoftwate,SkillHard};