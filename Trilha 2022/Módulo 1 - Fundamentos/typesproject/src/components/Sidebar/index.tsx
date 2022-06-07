import S from './style.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Sidebar() {
  return (
    <aside className={S.sidebar}>
      <img
        className={S.cover}
        src="https://images.unsplash.com/photo-1650024520022-cab7611a460b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className={S.profile}>
        <Avatar src={'https://avatars.githubusercontent.com/u/62472120?v=4'} />
        <strong>Samuel Seve</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
