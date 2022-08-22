import { useMemo } from 'react'
import { ProductItem } from './ProductItem'

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>

  onAddToWishList: (id: number) => void
}

/* 
o useMemo() evita que alguma tarefa pesada, de dentro do componente, seja refeita toda vez que o componente renderizar.

// quando utilizar

1. para calculos grandes
2. quando eu preciso passar uma variavel que foi criada no componente para, para o componente filho
(usando o useMemo nessa segunda situação, eu evito que o react tente comparar essas duas variaveis que são iguais, mas que são diferentes pelo aspecto referencial, de espaço na memória)
*/

export function SearchResults({
  results,
  onAddToWishList
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])
  return (
    <div>
      {results.map(product => {
        return <ProductItem key={product.id} onAddToWishList={onAddToWishList} product={product} />
      })}
    </div>
  )
}
