interface AlunoProps{
    nome: string;
    idade: number;
  }
  
  export function Aluno({nome, idade}: AlunoProps){
    return(
      <div>
        <h1>aluno: {nome}</h1>
        <h2>idade: {idade}</h2>
      </div>
    )
  }