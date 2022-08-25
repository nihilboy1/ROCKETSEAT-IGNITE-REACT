import { render, screen, waitFor } from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()
  // expect(await screen.findByText("Button")).toBeInTheDocument() // essa função é igual a de cima, mas ela espera para achar o elemento

  await waitFor(
    () => {
      // aguarda até que o componente apareça em tela
      return expect(screen.getByText('Button')).toBeInTheDocument()
    },
    {
      timeout: 5000 // tempo que vai aguardar
    }
  )
})


/*  
Para aguardar até que um elemento seja REMOVIDO de tela, eu uso o método assíncrono:
await waitForElementToBeRemoved(screen.queryByText('Button'))
*/

/*
1. métodos iniciados em get, buscam algo de forma síncrona, caso não encontrem imediatamente, eles retornam erro.
2. métodos iniciados em query, buscam também de forma síncrona, mas caso não encontrem nada, eles não retornam erro
3. métodos iniciados em find, buscam elementos de forma assíncrona, mas caso não encontrem nada, eles retornam erro
*/