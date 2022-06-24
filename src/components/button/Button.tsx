import './button.css'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
   <button className="container" {...props}>{children}</button>
  )
}

export default Button