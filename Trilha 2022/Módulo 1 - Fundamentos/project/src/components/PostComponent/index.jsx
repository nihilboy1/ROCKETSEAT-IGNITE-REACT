import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import S from './style.module.css'

/*  
const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit'
    }).format(publishedAt) 
*/

export function PostComponent({ publishedAt, content, author }) {
  const [comments, setComments] = useState(['Post massa'])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  function handleCreateNewComment(e) {
    e.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }
  function handleNewCommentChange(e) {
    e.target.setCustomValidity('')
    setNewComment(e.target.value)
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return commentToDelete !== comment
    })

    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <Avatar src={author.avatarUrl} />
          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={S.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            )
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={S.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          name="comment"
          value={newComment}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={S.commentList}>
        {comments.map(item => {
          return (
            <Comment deleteComment={deleteComment} key={item} content={item} />
          )
        })}
      </div>
    </article>
  )
}
