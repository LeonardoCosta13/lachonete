import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import './styles'

import { Container, Imagem, H1, Button, Cliente } from "./styles";

import Pacote from "../../assets/pacote.svg"
import Delete from "../../assets/delete.svg"


function Pedidos() {

  const [pedidos, setPedidos] = useState([])
  const history = useHistory()


  function voltarPagina(){
    history.goBack()
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
      <Imagem alt="logo-imagem" src={Pacote} />

      <H1>Pedidos</H1>

      <ul>
        { pedidos.map(cli => (
          <Cliente key={cli.id}>
            <p>{cli.cliente}</p> <p>{cli.pedido}</p>
            
            <button onClick={() => deletePedido(cli.id)}><img src={Delete} alt="delete" /></button>
          </Cliente>
        ))
          
        }
      </ul>

      <Button onClick={voltarPagina} to="/">Voltar</Button>


    </Container>
  )
  
}

export default Pedidos;
