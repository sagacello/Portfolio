import React, { Component } from 'react';
import '../css/Projetos.css';
class App extends Component {
  render() {
    return (
      <div id="projetos">
        <div class="container">
          <h1 className="titulo">Projetos</h1>
          <div class="card-projetos">
            <div class="face face1">
              <div class="content-projetos">
                <i class="fab fa-js fa-3x" style={{ color: '#F0DB4F' }}></i>{' '}
                <i class="fab fa-html5 fa-3x" style={{ color: '#A0522D' }}></i>{' '}
                <i
                  class="fab fa-css3-alt fa-3x"
                  style={{ color: '#00008B' }}
                ></i>{' '}
                <i class="fab fa-github fa-3x" style={{ color: '#BC8F8F' }}></i>{' '}
                <i
                  class="fab fa-node-js fa-3x"
                  style={{ color: '#556B2F' }}
                ></i>{' '}
                <h3 style={{ color: '#34b779' }}>Trybe</h3>
                <i
                  class="fas fa-database fa-3x"
                  style={{ color: '#4F4F4F' }}
                ></i>{' '}
                <i class="fab fa-react fa-3x" style={{ color: '#5F9EA0' }}></i>{' '}
              </div>
            </div>
            <div class="face face2">
              <div class="content-projetos">
                <p>
                  {' '}
                  Este repositório contém todos exercícios e desafios propostos
                  pela trybe durante a formação de desenvolvedor de software.
                </p>
                <a href="#">Leia mais</a>
              </div>
            </div>
          </div>

          <div class="card-projetos">
            <div class="face face1">
              <div class="content-projetos">
                <i
                  className="fab fa-react fa-9x"
                  style={{ color: '#61DBFB' }}
                ></i>{' '}
                <h3>React</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content-projetos">
                <p>
                  {' '}
                  Esse repositório contém um aplicativo de receitas responsivo
                  com diversas funcionalidades feito para mobile, as principais
                  tecnologias utilizadas foram o react com redux. Recomendado:
                  Abrir em um celular (MOBILE)
                </p>
                <a
                  href="https://sagacello.github.io/App-recipes/"
                  target="_blank"
                  type="button"
                >
                  Leia mais
                </a>
              </div>
            </div>
          </div>

          <div class="card-projetos">
            <div class="face face1">
              <div class="content-projetos">
                <i
                  class="fab fa-node-js fa-9x"
                  style={{ color: '#556B2F' }}
                ></i>{' '}
                <h3>Node</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content-projetos">
                <p>
                  {' '}
                  Esse repositório contém uma aplicação que simula uma plataforma
                  de delivery de cerveja, existem diversas funcionalidades nesse
                  aplicativo e foi projetado utilizando tecnologias como
                  Node.js, React, Context Api e mysql: (Full-Stack)
                </p>
                <a
                  href="https://github.com/sagacello/Trybeer"
                  target="_blank"
                  type="button"
                >
                  Leia mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
