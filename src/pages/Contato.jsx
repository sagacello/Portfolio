import React, { Component } from 'react';
import '../css/Contato.scss';
export default class Contato extends Component {
  render() {
    return (
      <div id="contato">
        <div className="card1">
        <h1>Contato</h1>
          <div className="card1-back">
            <div className="line-numbers">
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
              <span className="variable">const</span>
              <span> </span>
              <span className="function">meusDados </span>
              <span className="operator">=</span>
              <span> </span>
              <span>{'{'}</span>
              <div className="indent">
                {' '}
                <span className="property">Nome</span>
                <span className="operator">:</span>
                <span className="string">'Marcelo Ivan'</span>
                <span>,</span>
              </div>
              <div className="indent">
                {' '}
                <span className="property">Profissão</span>
                <span className="operator">:</span>
                <span className="string">'Desenvolvedor full stack'</span>
                <span>,</span>
              </div>
              <div className="indent">
                {' '}
                <span className="property">Contato</span>
                <span className="operator">:</span>
                <span> </span>
                <span>{'{'}</span>
                <div className="indent">
                  {' '}
                  <span className="property">email</span>
                  <span className="operator">:</span>
                  <span className="string">'sagacello@hotmail.com'</span>
                  <span>,</span>
                </div>
                <div className="indent">
                  <span className="property">Whatsapp</span>
                  <span className="operator">:</span>
                  <span className="string">'(16) 99244-0686'</span>
                </div>
                <span>{'}'}</span>
              </div>
              <span>{'}'}</span>
            </code>
          </div>
          <div className="card1-front">
            <div className="line-numbers">
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
              <span className="variable">this</span>
              <span>.</span>
              <span className="method">addEventListener</span>
              <span>(</span>
              <span className="string">'mouseover'</span>
              <span>,</span>
              <span className="function">{'() =>'}</span>
              <span> </span>
              <span>{'{'}</span>
              <div className="indent">
                <span className="variable">this</span>
                <span>.</span>
                <span className="property">virarCartao</span>
                <span> </span>
                <span>=</span>
                <span> </span>
                <span className="boolean">true</span>
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
