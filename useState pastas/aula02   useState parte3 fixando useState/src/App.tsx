import { useState } from "react"


interface UserProps{
  nome:string;
  cargo:string;
}
export default function  App(){


  const [user, setUser]=  useState<UserProps>({
    nome:"visitante",
    cargo:""
  })

  function handleLogin(){
    setUser({
      nome:"sujeito programador", 
      cargo:"programador"
    })
  }

  function handleLogaut(){
    setUser({
      nome:"visitante", 
      cargo:""
    })
  }
  return(
  <div>
    <h1>Conhecendo useState</h1>

    <button onClick={handleLogin}>Entrar</button>
    <button onClick={handleLogaut}>Fazer logout</button>
    <h3>Olá {user.nome}</h3>
    <strong>{user.cargo}</strong>
  </div>
      
  )
}

