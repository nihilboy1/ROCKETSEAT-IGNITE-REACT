import S from "./style.module.css"
import ignitelogo from "../../images/ignite-logo.svg"

export function Header(){
  return (
    <header className={S.header}>
     <img src={ignitelogo} alt="Logo do Ignite"></img>
    </header>
  )
}