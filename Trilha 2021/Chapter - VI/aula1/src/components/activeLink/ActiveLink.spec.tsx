import { render } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink Component', () => {
  /*
Esse teste utiliza a função useRouter, vinda de next/router, e como ele se trata de um teste unitário, 
não existe acesso a essa função através desse local. pra isso, é necessário criar um "mock" através do jest, 
que vai imitar a funcionalidade do useRouter e setar um retorno padrão pra ela, 
fazendo com que o componente funcione corretamente
*/
  it('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      getByText('Home')
    ) // essa função procura um elemento baseado em seu texto interno
      .toBeInTheDocument() // essa função testa se o objeto que a chamou se encontra dentro da dom

    // se o retorno for true, o teste passa
  })

  it('receives active classname', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      getByText('Home')
    ) // essa função procura um elemento baseado em seu texto interno
      .toHaveClass('active') // essa função testa se o objeto que a chamou possui uma classe chamada "active"

    // se o retorno for true, o teste passa
  })
})
