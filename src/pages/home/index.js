import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import './styles'
import { Container, Imagem, H1, Label, Input, Button } from "./styles";
import Burger from "../../assets/burger.svg"


function App() {

  const [ pedidos, setPedidos] = useState([])
  const InputPedido = useRef();
  const InputCliente = useRef();
  const histoty = useHistory()
  

    async function addNewRequest(){

      // CONECTANDO COM O BACK VIA AXIOS
      const { data: newRequest } = await axios.post("http://localhost:3001/pedidos",{
        pedido:InputPedido.current.value, 
        cliente:InputCliente.current.value })

        setPedidos([
         ...pedidos,newRequest
          ])

          histoty.push("/pedidos")
      
    }

    
  return(
  
    <Container>
      <Imagem alt="logo-imagem" src={Burger} />

      <H1>Faça seu pedido!</H1>

      <Label>Pedido</Label>
      <Input ref={InputPedido} placeholder="Pedido"></Input>

      <Label>Nome do cliente</Label>
      <Input ref={InputCliente} placeholder="Nome"></Input>

      <Button to="/pedidos" onClick={addNewRequest}>Novo pedido</Button>

  

    </Container>
  )
  
}

export default App;
