import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import './styles.js'
import { Container, Imagem, H1, Label, Input, Button, Cliente } from "./styles";
import Burger from "./assets/burger.svg"
import Delete from "./assets/delete.svg"


function App() {

  const [ pedidos, setPedidos] = useState([])
  const InputPedido = useRef();
  const InputCliente = useRef();
 

    async function addNewRequest(){

      // CONECTANDO COM O BACK VIA AXIOS
      const { data: newRequest } = await axios.post("http://localhost:3001/pedidos",{
        pedido:InputPedido.current.value, 
        cliente:InputCliente.current.value })

        setPedidos([
         ... pedidos, newRequest
          ])

      
    }

    async function deletePedido(cliId){
      await axios.delete(`http://localhost:3001/pedidos/${cliId}`)

      const newPedidos = pedidos.filter( cli => cli.id !== cliId );
      setPedidos(newPedidos)
    }

    useEffect(() => {
      async function fetchRequest(){
      const {data: newPedidos} = await axios.get("http://localhost:3001/pedidos")

      setPedidos(newPedidos)
      }
      
      fetchRequest()
    }, []);

  

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
