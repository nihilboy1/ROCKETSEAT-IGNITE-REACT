import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/react'

import S from './styles.module.scss'

export function SignInButton() {
  const { data: session } = useSession()

  console.log(session)

  return session ? (
    <button
      onClick={() => {
        signOut()
      }}
      className={S.signInButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={S.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => {
        signIn('github')
      }}
      className={S.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}
