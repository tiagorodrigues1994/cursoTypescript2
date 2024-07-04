import { useState } from "react"


interface infoAlunoProps{
  nome:string;
  idade: string;
}

export default function  App(){

  const [input, setInput] = useState('');
  const [idade, setIdade] = useState ('');
  // const [aluno, setAluno] =  useState<string | number>('Sem nenhum aluno');
  // // fiz essa const aluno para capturar o que foi digitado no input
  // const [alunoIdade, setAlunoIdade] = useState('')
  // // fiz essa const alunoidade para capturar o que foi digitado no input

  const [infoAluno, setInfoAluno] = useState<infoAlunoProps>();
  // aqui eu criei uma interface para falar pro typescripit que aqui vai ter um nome e uma idade 

const [contador, setContador] = useState(0);


function adicionar(){
setContador(valorAtual => valorAtual +1)
}

function diminuir(){
  if(contador === 0){
    return;
  }
  setContador( valorAtual => valorAtual -1)
  }

  function mostrarAluno(){
    setInfoAluno({
      nome:input,
      idade:idade,
    })

// setAluno(input);
// aqui mostrar aonde esta sendo colcado o valor do input, e lá em baixo no h3 sera mostrado o valor digitado.
 
// setAlunoIdade(idade);
// mostra no h4


  }

  return(
  <div>
    <h1>Conhecendo useState</h1>

    <input
      placeholder="Digite o nome"
      value={input} 
      // ele mostrar aonde atrelar , ou seja vai ta interligado no input, no useState
      onChange={(e) => setInput(e.target.value)} 
      // ele pega o quye vc estiver digitando e vai jogando dentro do useState
      // setInput(e.target.value)} acessa o setinput, quer dizer o valor que tem dentro desse nosso input

    />
    <br />
    <br />

    <input
    placeholder="Digite a idade"
    value={idade}
    onChange={(e)=> setIdade(e.target.value)}
    />

    <br />
    <br />
    <button onClick={mostrarAluno}>Mostrar aluno</button>

    <h3>Bem vindo: {infoAluno?.nome}</h3>
    <h4>idade: {infoAluno?.idade}</h4>
    {/* colocamos a interrogação quando pode ter uma propriedade que pode vir vazia ai se coloca a (?) , caso tente acessar aqueel operador e não tenha nada, ele apensa vai deixar vazio */}

    {/* <h3>Bem vindo: {aluno}</h3>
    <h4>idade: {alunoIdade}</h4> */}

    <hr />
    <br />
    <h1>contador com useState</h1>

    <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>
  </div>
      
  )
}

