const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const dados = {
  "Transporte": [
    {
      "id": 2,
      "rota": 2,
      "descrição": "Veículo 2",
      "placa": "XYZ456",
      "assento": 4,
      "transportadora": 2,
      "localPartida": "Cidade C",
      "destino": "Cidade D",
      "saida": "10:30",
      "chegada": "15:30",
      "nome": "Transportadora 2",
      "endereço": "Rua B, 456",
      "telefone": 987654321,
      "email": "contato@transportadora2.com",
      "sitio": "www.transportadora2.com"
    },
    {
      "id": 3,
      "rota": 3,
      "descrição": "Veículo 3",
      "placa": "DEF789",
      "assento": 6,
      "transportadora": 3,
      "localPartida": "Cidade E",
      "destino": "Cidade F",
      "saida": "12:00",
      "chegada": "17:00",
      "nome": "Transportadora 3",
      "endereço": "Rua C, 789",
      "telefone": 111222333,
      "email": "contato@transportadora3.com",
      "sitio": "www.transportadora3.com"
    },
    {
      "id": 4,
      "rota": 4,
      "descrição": "Veículo 4",
      "placa": "GHI123",
      "assento": 3,
      "transportadora": 4,
      "localPartida": "Cidade G",
      "destino": "Cidade H",
      "saida": "14:30",
      "chegada": "19:30",
      "nome": "Transportadora 4",
      "endereço": "Rua D, 123",
      "telefone": 444555666,
      "email": "contato@transportadora4.com",
      "sitio": "www.transportadora4.com"
    },
    {
      "id": 5,
      "rota": 5,
      "descrição": "Veículo 5",
      "placa": "JKL567",
      "assento": 2,
      "transportadora": 5,
      "localPartida": "Cidade I",
      "destino": "Cidade J",
      "saida": "16:00",
      "chegada": "21:00",
      "nome": "Transportadora 5",
      "endereço": "Rua E, 567",
      "telefone": 777888999,
      "email": "contato@transportadora5.com",
      "sitio": "www.transportadora5.com"
    },
    {
      "id": 6,
      "rota": 6,
      "descrição": "Veículo 6",
      "placa": "MNO987",
      "assento": 4,
      "transportadora": 6,
      "localPartida": "Cidade K",
      "destino": "Cidade L",
      "saida": "18:30",
      "chegada": "23:30",
      "nome": "Transportadora 6",
      "endereço": "Rua F, 987",
      "telefone": 999000111,
      "email": "contato@transportadora6.com",
      "sitio": "www.transportadora6.com"
    },
    {
      "id": 6,
      "rota": 6,
      "descrição": "Veículo 6",
      "placa": "MNO987",
      "assento": 4,
      "transportadora": 6,
      "localPartida": "Cidade K",
      "destino": "Cidade L",
      "saida": "18:30",
      "chegada": "23:30",
      "nome": "Transportadora 6",
      "endereço": "Rua F, 987",
      "telefone": 999000111,
      "email": "contato@transportadora6.com",
      "sitio": "www.transportadora6.com"
    },
    {
      "id": 6,
      "rota": 6,
      "descrição": "Veículo 6",
      "placa": "MNO987",
      "assento": 4,
      "transportadora": 6,
      "localPartida": "Cidade K",
      "destino": "Cidade L",
      "saida": "18:30",
      "chegada": "23:30",
      "nome": "Transportadora 6",
      "endereço": "Rua F, 987",
      "telefone": 999000111,
      "email": "contato@transportadora6.com",
      "sitio": "www.transportadora6.com"
    },
    {
      "id": 6,
      "rota": 6,
      "descrição": "Veículo 6",
      "placa": "MNO987",
      "assento": 4,
      "transportadora": 6,
      "localPartida": "Cidade K",
      "destino": "Cidade L",
      "saida": "18:30",
      "chegada": "23:30",
      "nome": "Transportadora 6",
      "endereço": "Rua F, 987",
      "telefone": 999000111,
      "email": "contato@transportadora6.com",
      "sitio": "www.transportadora6.com"
    },
    {
      "id": 6,
      "rota": 6,
      "descrição": "Veículo 6",
      "placa": "MNO987",
      "assento": 4,
      "transportadora": 6,
      "localPartida": "Cidade K",
      "destino": "Cidade L",
      "saida": "18:30",
      "chegada": "23:30",
      "nome": "Transportadora 6",
      "endereço": "Rua F, 987",
      "telefone": 999000111,
      "email": "contato@transportadora6.com",
      "sitio": "www.transportadora6.com"
    }
  ],

  "Usuario": [
  {
    "id": 4,
    "nome": "Matheus",
    "cpf": "0000000",
    "endereço": "Rua F, 987",
    "email": "matheus@gmail.com",
    "telefone": 9999999,
    "login": "matheus",
    "password": "matheus"
  }]

};
app.use(cors());
app.get('/Transporte', (req, res) => {
  res.json(dados.Transporte);
});
app.get('/Usuario', (req, res) => {
  res.json(dados.Usuario);
});
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
