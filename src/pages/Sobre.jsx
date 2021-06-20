import React, { Component } from 'react';
import '../css/Sobre.scss';
import foto from '../imagens/foto1.jpg';

export default class Sobre extends Component {
  render() {
    return (
      <div>
        <div class="dark">
          <main class="container py-4">
            <div class="h1 text-center" id="pageHeaderTitle">
              My Cards Dark
            </div>

            <article class="postcard dark blue">
              <img class="postcard__img" src={foto} alt="Image Title" />
              <div class="postcard__text">
                <div class="postcard__subtitle small">
                  <time datetime="1988-02-14 12:00:00">
                    <i class="fas fa-calendar-alt mr-2"></i>14 Fevereiro 1988
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Sou o Marcelo Ivan, moro em Ribeirão Preto, Sou pai de uma
                  menininha de 5 aninhos, atualmente estudo desenvolvimento de
                  software na Trybe e cursando análise de sistemas na
                  UnidomBosco. Nunca me senti tão feliz em aprender algo novo
                  como agora, e a cada dia que passa a realização de pequenas
                  conquistas vai se transformando em um todo que molda meu
                  futuro. Essas pequenas construções diárias sempre vem cercadas
                  de batalhas , que aos poucos são vencidas com uma boa quebra
                  de cabeça e muita dedicação.{' '}
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fab fa-node-js fa-2x"></i>Node.JS
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>React
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>Javascript
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>Mysql
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>MongoDB
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>CSS
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>HTML
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>Redux
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>Context api
                  </li>
                  <li class="tag__item">
                    <i class="fab fa-react fa-2x"></i>Python
                  </li>
                </ul>
              </div>
            </article>
          </main>
        </div>
      </div>
    );
  }
}
