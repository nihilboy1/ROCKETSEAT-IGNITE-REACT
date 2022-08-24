import { render, screen } from '@testing-library/react'
import { debug } from 'console'
import { useSession } from 'next-auth/react'
import { SignInButton } from '.'

jest.mock('next-auth/react')

describe('SignInButton Component', () => {
  /*
Esse teste utiliza a função useSession, vinda de 'next-auth/react', e como ele se trata de um teste unitário, 
não existe acesso a essa função através desse local. pra isso, é necessário criar um "mock" através do jest, 
que vai imitar a funcionalidade do useRouter e setar um retorno padrão pra ela, 
fazendo com que o componente funcione corretamente
*/
  it('renders correctly when user is not logged in', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })

    render(<SignInButton />)
    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      screen.getByText('Sign in with Github')
    ) // essa função procura um elemento baseado em seu texto interno
      .toBeInTheDocument() // essa função testa se o objeto que a chamou se encontra dentro da dom

    // se o retorno for true, o teste passa

  })

  it('renders correctly when user is logged in', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'Jhon Doe',
          email: 'jhon.doe@example.com'
        },
        expires: 'fake-expires'
      },
      status: 'authenticated'
    })
    render(<SignInButton />)

    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      screen.getByText('Jhon Doe')
    ) // essa função procura um elemento baseado em seu texto interno
      .toBeInTheDocument() // essa função testa se o objeto que a chamou se encontra dentro da dom

    // se o retorno for true, o teste passa
  })
})
