import { Header } from '../Header'
import { Sidebar } from '../Sidebar.jsx'
import { PostComponent } from '../PostComponent'
import S from './style.module.css'
import '../../global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera!' },
      { type: 'paragraph', content: 'Conteudo do post' },
      { type: 'link', content: 'link.com.br' }
    ],
    publishedAt: new Date('2022-06-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/nihilboy1.png',
      name: 'Samuel Seve',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera!' },
      { type: 'paragraph', content: 'Conteudo do post' },
      { type: 'link', content: 'link.com.br' }
    ],
    publishedAt: new Date('2022-03-01 20:10:00')
  }
]

export function App() {
  return (
    <>
      <Header></Header>
      <div className={S.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <PostComponent
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
