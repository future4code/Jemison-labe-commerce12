import React, {useState} from 'react';
import './App.css';
import { ProdutosDataSet } from './dataset/dataset';
import Card from './components/Cards/Card';
import {Display, Caixas, ConfigCaixa} from './components/Cards/style'



function App() {
  const produtos = ProdutosDataSet;
  const [produtosLista, setProdutosLista] = useState ([...produtos])
  const [busca, setBusca] = useState ('')
  
  const filtrarBusca = event=>{
    setBusca(event.target.value)
    const novaLista = produtos.filter(item=>item.nome.toLowerCase().includes(event.target.value.toLowerCase()))
    setProdutosLista(novaLista)
  }

  const [menorPreco, setMenorPreco] = useState ()
  const filtraMenorPreco = event=>{
    setMenorPreco(event.target.value)
    const novaLista = produtos.filter(item=>item.valor>=event.target.value)
    setProdutosLista(novaLista)
  }

  const [maiorPreco, setMaiorPreco] = useState ()
  const filtrarMaiorPreco = event=>{
    setMaiorPreco(event.target.value)
    const novaLista = produtos.filter(item=>item.valor<=event.target.value)
    setProdutosLista(novaLista)
  }




  return (
    <div>
      <ConfigCaixa>
        <Caixas>
          <input type="text" placeholder="Pesquise o Produto" onChange={filtrarBusca} value={busca}/>
        </Caixas>
        <Caixas>
          <input type="number" placeholder="Pesquise o Valor" onChange={filtraMenorPreco} value={menorPreco}/>
        </Caixas>
        <Caixas>
          <input type="number" placeholder="Pesquise o Valor" onChange={filtrarMaiorPreco} value={maiorPreco}/>
        </Caixas>
      </ConfigCaixa>
        
        
     
      <Display>
      {produtosLista.map(produto => (
        <Card
          nome={produto.nome}
          valor={produto.valor}
          imagem={produto.imagem}
        />
      ))}
    </Display>
    </div>
  );
}

export default App;
