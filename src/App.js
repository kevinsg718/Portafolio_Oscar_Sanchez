/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import anime from "animejs"
import { Flipper, Flipped } from 'react-flip-toolkit';

//imgenes a mostrar
import detail1Img from "./assets/Lab1.png"
import detail2Img from "./assets/Lab2.png"
import detail3Img from "./assets/Lab3.png"
import detail4Img from "./assets/Lab4.png"
import detail5Img from "./assets/Lab5.png"
import detail6Img from "./assets/Lab6.png"
import detail7Img from "./assets/Lab7.png"
import detail8Img from "./assets/Lab8.png"

const data = [
  { img: detail1Img, title: "Laboratorio 1", titulo: "El interner antes de la web", info: "Laboratorio 1", 
  texto: "Los puntos de ésta tarea se conseguian navegando en el sitio telehack.com utilizando telnet. Se debe escoger qué preguntas se quieren contestar:", 
  link:"https://drive.google.com/file/d/1A8Iu8KkqmDYI2Qw7fViyhM8dwf3hFUqk/view?usp=sharing" },
  
  { img: detail2Img, title: "Laboratorio 2", titulo: "Basic HTML", info: "Laboratorio 2", 
  texto: "El laboratorio consistia en escribir una historia de texto corta utilizando solo html. Al final de cada página (que no sea un final) debiamos colocar opciones para que el jugador escoja cómo continúa la historia. ", 
  link:"http://34.210.35.174/kevin/Inicio.html" },
  
  { img: detail3Img, title: "Laboratorio 3", titulo: "CSS only", info: "Laboratorio 3", 
  texto: "El laboratorio consistia en eligir una imagen y reproducirla utilizando únicamente html y css. Deben enviar la imagen en canvas junto con la url de su ejercicio.", 
  link:"https://codepen.io/kevinsg718/pen/EdzYMx"  },
  
  { img: detail4Img, title: "Laboratorio 4", titulo: "Comunicacion Cliente Servidor", info: "Laboratorio 4", 
  texto: "El laboratorio consistia en realizar un chat que se conecte al servidor realizado en la clase. El chat debe estar publicado en internet. ", 
  link:"https://github.com/kevinsg718/Lab4_WEB"  },
  
  { img: detail5Img, title: "Laboratorio 5", titulo: "Nodejs", info: "Laboratorio 5" , 
  texto: "El laboratorio consistia en un chat que debe conectarse a un servidor de sockets desarrollado por ustedes mismos utilizando nodejs. Su servidor de sockets debe conectarse al api que hicimos en el laboratorio 4. ", 
  link:"https://github.com/kevinsg718/WEB_Lab5" },
  
  { img: detail6Img, title: "Laboratorio 6", titulo: "Memoria React", info: "Laboratorio 6", 
  texto: "El laboratorio consistia en realizar un juego de memoria. El juego consiste en una grid de al menos 4x4 tarjetas. Las tarjetas se deben mostrar boca abajo para el jugador al inicio del juego y deben voltearse cuando se hace clic. Si la pareja no coincide, deben esperar algunos segundos y volver a voltear las tarjetas. ", 
  link:"https://github.com/kevinsg718/WEB_lab6" },
  
  { img: detail7Img, title: "Laboratorio 7", titulo: "Laberinto React", info: "Laboratorio 7", 
  texto: "El laboratorio consistia en realizar un juego de laberinto. También deben haber tenido una nota distinta de cero en el Lab 6. Deben consumir el endpoint en la siguiente dirección: GET http://34.210.35.174:3001 (Enlaces a un sitio externo.)Enlaces a un sitio externo. y deben construir el laberinto en base a la información que el endpoint provee.", 
  link:"https://github.com/kevinsg718/Lab7_WEB"  },
  
  { img: detail8Img, title: "Laboratorio 8", titulo: "Calculadora React", info: "Laboratorio 8", 
  texto: "El laboratorio consistia en realizar una calculadora simple. La calculadora debe consistir de una pantalla (display) y de un teclado numérico compuesto de botones de html. Todo input debe hacerse desde los botones. ", link:"https://github.com/kevinsg718/Lab_8_Web"  }
]


class App extends Component {
  applyZIndex = el => {
    el.style.zIndex = 3
  }
  applyZIndexHeader = el => {
    el.style.zIndex = 4
  }
  removeZIndex = el => {
    el.style.zIndex = ""
  }

  animateIn = () => {
    anime({
      targets: this.el.querySelectorAll("*[data-fade-in]"),
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 600,
      elasticity: 0,
      ease: "easeOutSine",
      delay: (d, i) => i * 60
    })
  }

  state = { focused: false }
  togglefocused = () => {
    this.setState({ focused: !this.state.focused })
  }



  render() {
    const { focused } = this.state
    return (
      <Flipper flipKey={focused}>
        <div className="Titulo" ref={el => (this.el = el)}>
        <h1>Portafolio</h1>
        <h2>Oscar kevin Sanchez Garcia</h2>
        <h3>Contacto: san15803@uvg.edu.gt</h3>
          <div className="wrapper">            
            {data.map((d, i) => {
              return (
                <div>
                  {i !== focused && (
                    <div
                      className="wrapperSquare"
                      onClick={() => {
                        this.setState({ focused: i })
                      }}
                    >
                      <Flipped
                        flipId={`heading-${i}`}
                        onStart={this.applyZIndexHeader}
                        onComplete={this.removeZIndex}
                        translate
                      >
                        <h2 className="photoHeading">{data[i].title}</h2>
                      </Flipped>{" "}
                      <Flipped
                        flipId={`img-${i}`}
                        onStart={this.applyZIndex}
                        onComplete={this.removeZIndex}
                      >
                        <img src={d.img} alt="" className="wrapperImg" />
                      </Flipped>
                      <Flipped
                        flipId={`shader-${i}`}
                        onStart={this.applyZIndex}
                        onComplete={this.removeZIndex}
                      >
                        <div className="wrapperShader wrapperShaderHidden" />
                      </Flipped>
                    </div>
                  )}
                </div>
              )
            })} </div>



          {typeof focused === "number" && (
            <div
              className="wrapperSquareExpanded"
              onClick={() => {
                this.setState({ focused: null })
              }}
            >
              <Flipped
                flipId={`img-${focused}`}
                onComplete={this.animateIn}
                onStart={this.applyZIndex}
              >
                <img src={data[focused].img} alt="" className="wrapperImg" />
              </Flipped>

              <Flipped flipId={`shader-${focused}`} onStart={this.applyZIndex}>
                <div className="wrapperShader" />
              </Flipped>
              <div className="wrapperFocused">
                <div className="wrapperContentContainer">
                  <Flipped flipId={`heading-${focused}`}>
                    <h1 className="photoHeading photoHeadingFocused">
                      {data[focused].titulo}
                    </h1>



                  </Flipped>
                  <p data-fade-in>{data[focused].info}
                  </p>

                  <p data-fade-in>
                    {data[focused].texto}
                  </p>
                  <p data-fade-in>
                    
                  <a href={data[focused].link} target="_blank">Ir al Laboratorio</a>
                  </p>


                </div>
              </div>
            </div>
          )}
        </div>
      </Flipper>
    )
  }
}

export default App;
