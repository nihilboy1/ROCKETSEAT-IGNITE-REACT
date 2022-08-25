import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]'
import { getPrismicClient } from '../../services/prismic'

const post = {
  slug: 'my-new-post',
  title: 'My new post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de abril'
}
jest.mock('../../services/prismic')
jest.mock('next-auth/react')
jest.mock('next/router')

describe('Post preview page', () => {
  it('should be able to render correctly', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated'
    })
    render(<Post post={post} />)

    expect(screen.getByText('My new post')).toBeInTheDocument()
    expect(screen.getByText('Post excerpt')).toBeInTheDocument()
    expect(screen.getByText('Want to continue reading?')).toBeInTheDocument()
  })

  it('should be able to redirect the user to complete post when user is subscribed', async () => {
    const useSessionMocked = jest.mocked(useSession)
    const useRouterMocked = jest.mocked(useRouter)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce({
      data: {
        activeSubscription: 'fake-active-subscription',
        expires: null
      },
      status: 'authenticated'
    })

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<Post post={post} />)

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
  })

  it('loads initial data', async () => {
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
        getByUID: jest.fn().mockResolvedValueOnce({
           data: {
            title: [
                {type: 'heading', text: 'My new post'}
            ],
            content: [
                { type: 'paragraph', text: 'Post content'}
            ],
        },
        last_publication_date: '01-01-2021'
    })
    } as any);

   const response = await getStaticProps({ params: { slug: 'my-new-post' }})

expect(response).toEqual(
    expect.objectContaining({
        props: {
            post: {
                slug: 'my-new-post',
                title: 'My new post',
                content: '<p>Post content</p>',
                updatedAt: '01 de janeiro de 2021'
            }
        }
    })
)
});
});