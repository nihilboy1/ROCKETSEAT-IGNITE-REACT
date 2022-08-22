import { memo, useState } from 'react'
import { AddProductToWishlistProps } from './AddProductToWishList'
// import { AddProductToWishlist } from './AddProductToWishList'
import dynamic from 'next/dynamic'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishList').then(
      mod => mod.AddProductToWishlist
    )
  },
  {
    loading: () => <span>loading...</span>
  }
)

/*
a importação dinamica, ou "lazy loading", serve para ser utilizada em componentes que não serão visualizados 
imediatasmente na página. Por exemplo, um modal que só é exibido se o usuário fizer ação X. 
Nesse caso, aplicasse o dynamic import
*/

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onRequestClose={() => {
            setIsAddingToWishlist(false)
          }}
          onAddToWishlist={() => {
            onAddToWishList(product.id)
          }}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
  }
)

/* 
                          //////////// shallow compare = comparação rasa /////////////

Por padrão, sempre que há uma alteração no componente pai ou filho do componente X, 
o componente X também é recriado. Contudo, usando o memo(), essa rerenderização do componente só será feita,
caso haja alguma alteração de propriedade no próprio componente.




                          //////////// deep compare = comparação profunda /////////////

Contudo, quando se está lidando com comparação de objetos ou arrays
(Tudo aquilo que o javascript não consegue fazer a comparação correta)
o ideal é passar como segundo parametro para o memo(), uma função, que recebe como parametro o estado anterior e 
o estado futuro das props em questão, para que eu possa fazer a comparação de um objeto que ela contenha. 
Se houver alteração, ele atualiza o componente, se não, ele passa
*/

// Quando utilizar?

/*
1. Quando a funçaõ for "pura", apenas de layout
2. Quando um componente estiver renderizando muitas vezes, com props iguais
3. Quando a aplicação estiver com um tabalho de médio par grande
*/
