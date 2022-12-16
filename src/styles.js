import styled from "styled-components";



export const Container = styled.div`
  
  background: #0A0A10;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  
`

export const Imagem = styled.img`
  width: 342px;
  height: 354px;
  margin-top: 20px;
  margin-bottom: 25px;
`

export const H1 = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  margin-bottom: 76px;
`

export const Label = styled.p`

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #EEEEEE;
  justify-content: flex-start;
  margin-left: px;
  margin-bottom: 2px;

`

export const Input = styled.input`

  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  border: none;
  padding-left: 16px;
  margin-bottom: 42px;
  outline: none;
  
`

export const Button = styled.button`

  width: 342px;
  height: 68px;
  background: #D93856;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`
export const Cliente = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    border: none;
    padding-left: 16px;
    margin-top: 32px;

    p{
      display: flex;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;
    }

    button{
      cursor: pointer;

      background: transparent;
      border: none;
    }
`