import { SignInButton } from '../SignInButton'
import S from './styles.module.scss'
import { useRouter } from 'next/router'
import { ActiveLink } from '../activeLink'

export function Header() {
  const { asPath } = useRouter()
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={S.active} href="/" prefetch>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={S.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
