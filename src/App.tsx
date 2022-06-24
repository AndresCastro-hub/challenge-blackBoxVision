import Button from "./components/button/Button"
import './app.css'
import QuestionCard from "./components/questionCard/QuestionCard"

function App() {

  return (
    <main className="contenedor">
      <section className="estructura">
        <QuestionCard header="CATEGORY" footer="2 - 10">
          ¿Como se llama el protagonista de the legend of zeld?
        </QuestionCard>
        <nav className="respuestas">
          <Button>Zelda</Button>
          <Button>Link</Button>
          <Button>Peter Pan</Button>
          <Button>El duende verde</Button>
        </nav>
      </section>
    </main>
  )
}

export default App
