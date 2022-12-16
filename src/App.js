import React, { useState, useRef } from "react";
import './styles.js'
import { Container, Imagem, H1, Label, Input, Button, Cliente } from "./styles";
import Burger from "./assets/burger.svg"
import Delete from "./assets/delete.svg"


function App() {

  const [ pedidos, setPedidos] = useState([])
  const InputPedido = useRef();
  const InputCliente = useRef();
 

    function addNewRequest(){
       setPedidos([ ... pedidos, {
        id: Math.random(), pedido:InputPedido.current.value, 
        cliente:InputCliente.current.value}
      ])
    }

    function deletePedido(cliId){
      const newPedidos =  pedidos.filter( cli => cli.id !== cliId );
      setPedidos(newPedidos)
    }
  

  return(
  
    <Container>
      <Imagem alt="logo-imagem" src={Burger} />

      <H1>Faça seu pedido!</H1>

      <Label>Pedido</Label>
      <Input ref={InputPedido} placeholder="Pedido"></Input>

      <Label>Nome do cliente</Label>
      <Input ref={InputCliente} placeholder="Nome"></Input>

      <Button onClick={addNewRequest}>Novo pedido</Button>

      <ul>
        { pedidos.map(cli => (
          <Cliente key={cli.id}>
            <p>{cli.cliente}</p> - <p>{cli.pedido}</p>
            
            <button onClick={() => deletePedido(cli.id)}><img src={Delete} alt="delete" /></button>
          </Cliente>
        ))
          
        }
      </ul>

    </Container>
  )
  
}

export default App;
