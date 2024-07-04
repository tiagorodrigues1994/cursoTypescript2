import { useState, useEffect } from "react"


function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([

    'pagar a conta de luz',
    'estudar reactjs'
    
  ]);



useEffect(()=>{
  const tarefasStorage = localStorage.getItem('@tarefa');
  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage))
  }
}, []);

useEffect(()=>{
  localStorage.setItem('@tarefa', JSON.stringify(tarefas));
}, [tarefas]);





  function handleRegister(e){
    e.preventDefault();


    if (input.trim() !== '') {
      setTarefas([...tarefas, input]);
      setInput('');
    }
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuario</h1>

        <label>Nome da tarefa:</label><br />
        <input placeholder="Digite uma tarefa" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        /><br />


        <button type="submit">Registrar</button>
      </form>
      <br /><br />

      <ul>
 
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default App



