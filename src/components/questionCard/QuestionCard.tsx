import './questioncard.css'

interface Props{
    header: string,
    footer: string
    children: string
}

const QuestionCard:React.FC<Props> = ({header,children,footer}) => {
  return (
    <section className='questionCard'>
        <header className='category'>{header}</header>
        <section className='question'>{children}</section>
        <footer className='contador'>{footer}</footer>
    </section>
  )
}

export default QuestionCard