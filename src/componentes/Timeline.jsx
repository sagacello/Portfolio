import React, { Component } from 'react';
import '../css/Timeline.scss';
import diploma from '../imagens/diploma.png';
import cv from '../imagens/cursoemvideo2.jpg';
import i2a2 from '../imagens/i2a2.jpg';
import astronauta from '../imagens/astronauta.png';
import trybe from '../imagens/trybe.jpg';

class Timeline extends Component {
  render() {
    return (
      <div id="timeline">
         <h1>Linha do tempo</h1>
        <p className="leader">
          <p>
            Essa linha do tempo conta um pouco da minha trajetória ,desde a
            transição de carreira até os dias de hoje.
          </p>
        </p>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>
                <span className="small">Junho de 2019</span>
                Perdido
              </h2>
            </div>
            <div className="body">
              <p>
                Mesmo depois de graduado em engenharia química não me via
                atuando na área, sentia que faltava algo e começei a cogitar uma
                transição de carreira.
              </p>
              <img src={diploma} alt="diploma" />
            </div>
          </div>
          <div className="demo-card demo-card--step2">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">julho de 2019</span>
                começando
              </h2>
            </div>
            <div className="body">
              <p>
                Logo me vi estudando programação, tentando aprender um mudo de
                coisas novas em pouco tempo, iniciei o estudo com o aprendizado
                de Python assistindo as aulas do incrível Gustavo Guanabara.
              </p>
              <img src={cv} alt="curso_em_video" />
            </div>
          </div>
          <div className="demo-card demo-card--step3">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">outubro de 2019</span>
                Focando
              </h2>
            </div>
            <div className="body">
              <p>
                Após alguns meses estudando consegui entrar em um
                instituto focado no aprendizado de inteligencia artificial,
                onde aprendi diversas coisas interessantes, com o enfoque
                maior no funcionamento dos algoritimos de visão computacional.
              </p>
              <img src={i2a2} alt="instituto" />
            </div>
          </div>
          <div className="demo-card demo-card--step4">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">julho de 2020</span>
                Idealizando
              </h2>
            </div>
            <div className="body">
              <p>
                Terminado os meus estudos no instituto e com um pouco de bagagem 
                na programação, percebi que faltavam algumas coisas para me tornar um desenvolvedor, 
                comecei então a procurar cursos com as tecnologias mais utilizadas na atualidade.
              </p>
              <img src={astronauta} alt="voando" />
            </div>
          </div>
          <div className="demo-card demo-card--step5">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span className="small">junho de 2020</span>
                Esperançoso
              </h2>
            </div>
            <div className="body">
              <p>
                Depois de procurar por um tempo encontrei a Trybe, uma escola de tecnologia com propostas 
                surpreendentes e inovadoras, e investigando tudo o que era proposto pela escola e
                tomei a decisão de me inscrever para o processo seletivo.
              </p>
              <img src={trybe} alt="trybe" />
            </div>
          </div>
          <div className="demo-card demo-card--step6">
            <div className="head">
              <div className="number-box">
                <span>06</span>
              </div>
              <h2>
                <span className="small">Agosto de 2020</span> Trajetória
              </h2>
            </div>
            <div className="body">
              <p>
               Logo iniciei minha jornada na Trybe e 
               nas primeiras semanas já tinha aprendido diversas coisas, tanto em hard skills 
               quanto em soft skills e cheguei a conclusão que entrar na trybe foi uma excelente escolha 
               e o caminho a percorrer é extenso.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
          <div className="demo-card demo-card--step7">
            <div className="head">
              <div className="number-box">
                <span>07</span>
              </div>
              <h2>
                <span className="small">Abril de 2021</span> Conclusão
              </h2>
            </div>
            <div className="body">
              <p>
                Após 7 meses de curso, percebi que sou uma pessoa totalmente diferente 
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timeline;
