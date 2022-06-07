import { ThumbsUp, Trash } from 'phosphor-react'
import S from './style.module.css'
import { Avatar } from '../Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  deleteComment: (x: string) => void
}

export function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    deleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={S.comment}>
      <Avatar
        hasBorder={false}
        src={'https://avatars.githubusercontent.com/u/2254731?v=4'}
      />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Samuel Seve</strong>
              <time title="03 de Junho de 2022" dateTime="2022-05-11 08:13:30">
                Há cerca de 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
