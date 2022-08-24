import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Header Component', () => {
  /*
Esse teste utiliza a função useRouter, vinda de next/router, e como ele se trata de um teste unitário, 
não existe acesso a essa função através desse local. pra isso, é necessário criar um "mock" através do jest, 
que vai imitar a funcionalidade do useRouter e setar um retorno padrão pra ela, 
fazendo com que o componente funcione corretamente
*/
  it('renders correctly', () => {
    render(<Header />)

    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      screen.getByText('Home')
    ) // essa função procura um elemento baseado em seu texto interno
      .toBeInTheDocument() // essa função testa se o objeto que a chamou se encontra dentro da dom

    // se o retorno for true, o teste passa

    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      screen.getByText('Posts')
    ) // essa função procura um elemento baseado em seu texto interno
      .toBeInTheDocument() // essa função testa se o objeto que a chamou se encontra dentro da dom

    // se o retorno for true, o teste passa
  })
})
