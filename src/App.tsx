import { useEffect, useState } from "react";
import './app.css'
import Button from "./components/button/Button"
import QuestionCard from "./components/questionCard/QuestionCard"
import getQuestions from "./services/api";
import {Question } from './services/types';

function App() {

  const [questions, SetQuestions] = useState<Question[]>();
  const [preguntaActual , setPreguntaActual] = useState<number>(0);
  const [loading, setLoading]  = useState<boolean>(false)
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
    return <div className="loading">Cargando...</div>
  }

  const question = questions[preguntaActual]

  return (
    <main className="contenedor">
      <section className="estructura">
        <QuestionCard 
          header={`${question.category} - ${question.difficulty} `} 
          footer={`${[preguntaActual] + 1} - ${questions.length}` }>
          ¿Como se llama el protagonista de the legend of zeld?
        </QuestionCard>
        <nav className="respuestas">
          {[...question.incorrect_answers, question.correct_answer].map(respuesta => <Button key={respuesta}>{respuesta}</Button>)}
        </nav>
      </section>
    </main>
  )
}

export default App
