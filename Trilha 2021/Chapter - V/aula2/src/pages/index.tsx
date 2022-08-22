import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])


  /*
  O useCallBack() faz com que a função não seja recriada todas as vezes que o componente é recriado.
  é útil para usar quando se esta fazendo muito prop drilling com a função. 
  isso evita com que o react faça processamento desnecessário
  */
  const  addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  async function handleSearch(e: FormEvent) {
    e.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()
    

    setResults(data)
  }
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults onAddToWishList={addToWishList} results={results} />
    </div>
  )
}
