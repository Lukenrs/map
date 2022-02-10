import React, { Component} from "react"


export default class App extends Component{
  state = {
    espadas:[{
      nome: "Dragon Sword",
      elemento: "fogo"
    },
    {
      nome: "Spike Sword",
      elemento:"terra"
    },{
      nome: "Brave Sword",
      elemento:"aço"
    },{
      nome: "Ventania ",
      elemento: "vento"
    },{
      nome: "Mezan",
      elemento: "planta"
    }]
  }
  render(){
    return(
      <div>

      {this.state.espadas.map((item)=>(
       <div>
         <ul>
           <li>Nome: {item.nome}</li>
           <ul>
             <li>Elemento: {item.elemento}</li>
           </ul>
         </ul>
       </div>
       ))}

      </div>
    )
  }

}