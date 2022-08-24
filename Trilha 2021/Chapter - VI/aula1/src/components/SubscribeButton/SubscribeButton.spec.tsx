import { fireEvent, render, screen } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { SubscribeButton } from '.'
jest.mock('next-auth/react')
jest.mock('next/router')

describe('SubscribeButton Component', () => {
  /*
Esse teste utiliza a função useSession, vinda de 'next-auth/react', e como ele se trata de um teste unitário, 
não existe acesso a essa função através desse local. pra isso, é necessário criar um "mock" através do jest, 
que vai imitar a funcionalidade do useRouter e setar um retorno padrão pra ela, 
fazendo com que o componente funcione corretamente
*/
  it('renders correctly', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })

    render(<SubscribeButton />)
    expect(
      // essa função abre para que eu informe o que eu espero encontrar
      screen.getByText('Subscribe Now')
    ) // essa função procura um elemento baseado em seu texto interno
      .toBeInTheDocument() // essa função testa se o objeto que a chamou se encontra dentro da dom

    // se o retorno for true, o teste passa
  })

  it('redirects to SignIn when users is not authenticated', () => {
    const signInMocked = jest.mocked(signIn)
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })
    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe Now')
    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled() // confere se a função foi disparada
  })

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'Jhon Doe',
          email: 'jhon.doe@example.com'
        },
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires'
      },
      status: 'authenticated'
    })

    useRouterMocked.mockReturnValueOnce({
      // como nesse caso, a função push não pode vir diretamente do import, foi necessário mockar a lib primeiro, 
      // pra depois instanciar o hook que retornava a função necessária
      push: pushMock
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe Now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith("/posts") // confere se a função foi chamada com um determinado parametro
  })
})
