import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import { useState, useEffect } from 'react'

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/nihilboy1/repos')
      .then(res => res.json())
      .then(res_json => setRepositories(res_json))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((item, index) => {
          return <RepositoryItem key={index} repository={item} />
        })}
      </ul>
    </section>
  )
}
