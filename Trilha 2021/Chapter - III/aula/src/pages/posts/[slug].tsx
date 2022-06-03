import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'
import S from './post.module.scss'
import Head from 'next/head'

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | "ig.news"</title>
      </Head>
      <main className={S.container}>
        <article className={S.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={S.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const session = await getSession({ req })

  const slug = params?.slug

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID<any>('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  }

  return {
    props: {
      post
    }
  }
}
