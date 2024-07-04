import { useState } from "react"

export default function  App(){

  const [input, setInput] = useState('');
  const [idade, setIdade] = useState ('');
  const [aluno, setAluno] = useState('Sem nenhum aluno');
// fiz essa const aluno para capturar o que foi digitado no input
  function mostrarAluno(){

setAluno(input);
console.log(idade);

// aqui mostrar aonde esta sendo colcado o valor do input, e lá em baixo no h3 sera mostrado o valor digitado.
 

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


    <h3>Bem vindo: {aluno}</h3>
  </div>
      
  )
}

