import React, { Component } from "react";
import './index.css';
import livrosJson from './api/livros.json';

// Components
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component{

  state = {
    livros: livrosJson
  }
  
  // componentDidMount() {
  //   fetch("/api/livros.json")
  //     .then(response => response.json())
  //     .then(livros => this.setState({ livros }))
  //     .catch(function(error) {
  //       console.log("erro de requisição");
  //     })
  //     .finally(function(){
  //       console.log("Sempre retorna");
  //     });
  // }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({livros});
  }

  handleOrdenarCrescente = () => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.titulo ? -1 : 0
    )
    this.setState({livros});
  }

  handleOrdenarDecrescente = () => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.tiitulo ? -1 : 0
    )
    livros.reverse();
    this.setState({livros});
  }

  handleOrdenarCrescenteA = () => {
    const livros = this.state.livros.sort((a, b) => 
      a.autor < b.autor ? -1 : 0
    )
    this.setState({livros});
  }

  handleOrdenarDecrescenteA = () => {
    const livros = this.state.livros.sort((a, b) => 
      a.autor < b.autor ? -1 : 0
    )
    livros.reverse();
    this.setState({livros});
  }

  handleOrdenarCrescenteI = () => {
    const livros = this.state.livros.sort((a, b) => 
      a.id < b.id ? -1 : 0
    )
    this.setState({livros});
  }

  handleOrdenarDecrescenteI = () => {
    const livros = this.state.livros.sort((a, b) => 
      a.id < b.id ? -1 : 0
    )
    livros.reverse();
    this.setState({livros});
  }

  render(){
    return (
      <div className="tabela">
        <h1>Tabela de livros</h1>
        <TabelaHead 
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
          ordenarCrescenteAutor={this.handleOrdenarCrescenteA}
          ordenarDecrescenteAutor={this.handleOrdenarDecrescenteA}
          ordenarCrescenteI={this.handleOrdenarCrescenteI}
          ordenarDecrescenteI={this.handleOrdenarDecrescenteI}
        />
        <TabelaBody 
          livros={this.state.livros}
          removerLinha={this.handleRemoverLinha}  
        />
        <TabelaFoot qdeLivros={this.state.livros.length}/>
      </div>
    )};
}

export default App;