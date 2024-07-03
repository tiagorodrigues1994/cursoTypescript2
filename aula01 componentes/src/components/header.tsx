import './header.css'
// sempre é bom colocar o nome da componente com "Props " na frente pra simbolisar/mostrar que a tipagem desse componete quer receber , porque até então não tinha passado nenhum paramentro(elemento de dentro da interface)

interface HeaderProps{
title?:string;
}


// Se eu colocar uma "?" DEPOIS do "title" eu vou estar dizendo que essa propriedade title:string é opcional

// caso seja opcional e eu naõ passe o valor , eu posso esta colcando o valor no proprio title na linah 14
// deixando assim :export default function Header({title ='curso React' um exemplo}:

export default function Header({title}: HeaderProps){
  return(
    <header className='header'>
    <h1 className='title'>{title}</h1>

    </header>
  )
}
