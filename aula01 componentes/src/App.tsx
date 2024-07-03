import Header from "./components/header";
import { Aluno } from "./components/aluno";
import Footer from "./components/footer";

export default function  App(){
  return(
    <div>
      <Header title="Curso React + Typescript" />
      <h1>começo</h1>
      <Aluno nome='ana clara' idade={23}/>
    
      <Aluno nome="tiago rodrigues" idade={25} />
      <Footer />
    </div>
  )
}

