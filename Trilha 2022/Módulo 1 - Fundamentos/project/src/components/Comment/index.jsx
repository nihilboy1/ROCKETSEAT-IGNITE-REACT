import { ThumbsUp, Trash } from 'phosphor-react'
import S from './style.module.css'
import { Avatar } from '../Avatar'

export function Comment() {
  return (
    <div className={S.comment}>
      <Avatar hasBorder={false} src={'https://avatars.githubusercontent.com/u/2254731?v=4'} />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Samuel Seve</strong>
              <time title="03 de Junho de 2022" dateTime="2022-05-11 08:13:30">
                Há cerca de 1h
              </time>
            </div>
            <button title="deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>nice demais, man</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
