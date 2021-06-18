/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import '../css/Projetos.css';
class Projetos extends Component {
  render() {
    return (
      <div id="projetos">
        <div className="container">
        <h1 className="titulo">Projetos</h1>

          <div className="card11">
            <div className="face face1">
              <div className="content11">
                <i className="fab fa-react fa-9x" style={{ color: '#61DBFB' }}></i>
                <h3>React</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content11">
                <p>
                  {' '}
                  Esse repositório contém um aplicativo de receitas responsivo
                  com diversas funcionalidades feito para mobile, as principais tecnologias 
                  utilizadas foram o react com redux.
                  Recomendado: Abrir em um celular.
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
          <div className="card11">
            <div className="face face1">
              <div className="content11">
                <i className="fab fa-js fa-3x" style={{ color: '#F0DB4F' }}></i>{' '}
                <i className="fab fa-html5 fa-3x" style={{ color: '#A0522D' }}></i>{' '}
                <i className="fab fa-css3-alt fa-3x" style={{ color: '#00008B' }}></i>{' '}
                <i  className="fab fa-github fa-3x" style={{ color: '#BC8F8F' }}></i>{' '}
                <i className="fab fa-node-js fa-3x" style={{ color: '#556B2F' }}></i>{' '}
                <h3 style={{ color: '#00FA9A' }} >Trybe</h3>
                <i className="fas fa-database fa-3x" style={{ color: '#4F4F4F' }}></i>{' '}
                <i className="fab fa-react fa-3x" style={{ color: '#5F9EA0' }}></i>{' '}


              </div>
            </div>
            <div className="face face2">
              <div className="content11">
                <p>
                  {' '}
                  Este repositório contém todos exercícios e desafios propostos
                  pela trybe durante a formação de desenvolvedor de software.
                </p>
                <a
                  href="https://github.com/sagacello/trybe-exercises"
                  target="_blank"
                  type="button"
                >
                  Leia mais
                </a>
              </div>
            </div>
          </div>
          <div className="card11">
            <div className="face face1">
              <div className="content11">
                <i className="fab fa-python fa-9x" style={{ color: '#FFFAFA' }}></i>
                <h3>Python</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content11">
                <p>
                  {' '}
                  Esse repositório contém um algoritmo que simula uma comparação
                  entre duas mãos de poker, a tecnologia base para esse projeto
                  foi o python 3.7.
                </p>
                <a
                  href="https://github.com/sagacello/Pokerhand"
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

export default Projetos;
