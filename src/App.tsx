import { useEffect, useState } from "react";
import 'app.css'
import Button from "./components/button/Button"
import QuestionCard from "./components/questionCard/QuestionCard"
import getQuestions from "./services/api";
import {Question } from './services/types';
import {TailSpin} from 'react-loader-spinner'

function App() {

  const [questions, SetQuestions] = useState<Question[]>();
  const [preguntaActual , setPreguntaActual] = useState<number>(0);
  const [puntuacion, setPuntuacion ] = useState<number>(0)
  const [estado, setEstado ] = useState<"Cargando"|"Cargado"|"Finalizado">("Cargando");

  useEffect(() => {
    getQuestions()
    .then(
      (res) => { SetQuestions(res)
      setEstado("Cargado")
    })
  }, []);

  if(estado === "Cargando"){
    return <TailSpin
    height="100"
    width="100"
    color='pink'
    ariaLabel='loading'
  />
  }

  const question = questions![preguntaActual]

  
  const respuestaCorrecta = (respuesta : string , e:any) => {
    
    e.target.classList.add(question.correct_answer === respuesta ? "correct" : "incorrect")

    if(question.correct_answer === respuesta){  
      switch(question.type){
        case "boolean":{
          setPuntuacion( puntuacion => puntuacion + 5)
          break;
        }
        
        case "multiple":{
          setPuntuacion( puntuacion => puntuacion + 10)
          break;
        }
      }  
    }

    setTimeout(() => {
      if( preguntaActual + 1 === questions!.length){
          setEstado("Finalizado")
      }else{
        setPreguntaActual( question => question + 1)
      }
    }, 1000);
  }

  if(estado === "Finalizado"){
    return <div className="final"> El juego finalizo. Obtuviste {puntuacion} puntos </div>
  }

  return (
    <main className="contenedor">
      <section className="estructura">
        <QuestionCard 
          header={`${question.category} - ${question.difficulty} `} 
          footer={`${preguntaActual + 1} - ${questions!.length}` }>
          {question.question}
        </QuestionCard>
        <nav className="respuestas">
          {[...question.incorrect_answers, question.correct_answer]
            .sort((a,b) => a.localeCompare(b))
            .map(respuesta => 
              <Button key={respuesta} onClick={ (e) => respuestaCorrecta(respuesta, e) } >{respuesta}</Button>)}
        </nav>
      </section>
    </main>
  )
}

export default App
