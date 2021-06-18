import React, { Component } from 'react';
import '../css/Contato.scss';
export default class Contato extends Component {
  render() {
    return (
      <div id="contato">
        <div class="card1">
        <h1>Contato</h1>
          <div class="card1-back">
            <div class="line-numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <code>
              <span class="variable">const</span>
              <span> </span>
              <span class="function">meusDados </span>
              <span class="operator">=</span>
              <span> </span>
              <span>{'{'}</span>
              <div class="indent">
                {' '}
                <span class="property">Nome</span>
                <span class="operator">:</span>
                <span class="string">'Marcelo Ivan'</span>
                <span>,</span>
              </div>
              <div class="indent">
                {' '}
                <span class="property">Profissão</span>
                <span class="operator">:</span>
                <span class="string">'Desenvolvedor full stack'</span>
                <span>,</span>
              </div>
              <div class="indent">
                {' '}
                <span class="property">Contato</span>
                <span class="operator">:</span>
                <span> </span>
                <span>{'{'}</span>
                <div class="indent">
                  {' '}
                  <span class="property">email</span>
                  <span class="operator">:</span>
                  <span class="string">'sagacello@hotmail.com'</span>
                  <span>,</span>
                </div>
                <div class="indent">
                  <span class="property">Whatsapp</span>
                  <span class="operator">:</span>
                  <span class="string">'(16) 99244-0686'</span>
                </div>
                <span>{'}'}</span>
              </div>
              <span>{'}'}</span>
            </code>
          </div>
          <div class="card1-front">
            <div class="line-numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <code>
              <span class="variable">this</span>
              <span>.</span>
              <span class="method">addEventListener</span>
              <span>(</span>
              <span class="string">'mouseover'</span>
              <span>,</span>
              <span class="function">{'() =>'}</span>
              <span> </span>
              <span>{'{'}</span>
              <div class="indent">
                <span class="variable">this</span>
                <span>.</span>
                <span class="property">virarCartao</span>
                <span> </span>
                <span>=</span>
                <span> </span>
                <span class="boolean">true</span>
                <span>;</span>
              </div>
              <span>{'}'});</span>
            </code>
          </div>
        </div>
      </div>
    );
  }
}
